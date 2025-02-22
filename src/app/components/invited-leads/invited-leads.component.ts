import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Lead, LeadService } from '../../../services/lead.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-invited-leads',
  standalone: true,
  imports: [ CommonModule, MatCardModule, MatDividerModule, MatIconModule, MatButtonModule, MatSnackBarModule ],
  templateUrl: './invited-leads.component.html',
  styleUrls: ['./invited-leads.component.scss']
})
export class InvitedLeadsComponent implements OnChanges {
  private _snackBar = inject(MatSnackBar);
  
  @Output() leadUpdated = new EventEmitter<Lead[]>();
  @Input() leads: Lead[] = [];
  filteredLeads: Lead[] = [];

  constructor(private leadService: LeadService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['leads']) {
      this.filterLeads();
    }
  }

  filterLeads() {
    this.filteredLeads = [...this.leads.filter(l => l.status === "New")];
  }

  acceptLead(lead: Lead) {
    lead.status = "Accepted"
    this.leadService.updateLead(lead.id, lead).subscribe((lead: Lead) => {
      const tempLead = this.leads.find(l => l.id === lead.id);
      if (tempLead) {
        tempLead.status = lead.status;
        tempLead.price = lead.price;
        this._snackBar.open("Lead successfully accepted!", 'Close', {
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        });
        this.filterLeads();
        this.leadUpdated.emit(this.leads);
      }
    });
  }

  declineLead(lead: Lead) {
    lead.status = "Declined"
    this.leadService.updateLead(lead.id, lead).subscribe((lead: Lead) => {
      const tempLead = this.leads.find(l => l.id === lead.id);
      if (tempLead) {
        tempLead.status = lead.status;
        tempLead.price = lead.price;
        this.filterLeads();
        this.leadUpdated.emit(this.leads);
      }
    });
  }
}
