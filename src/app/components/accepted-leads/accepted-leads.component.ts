import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Lead, LeadService } from '../../../services/lead.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-accepted-leads',
  standalone: true,
  imports: [ CommonModule, MatCardModule, MatDividerModule, MatIconModule, MatButtonModule ],
  templateUrl: './accepted-leads.component.html',
  styleUrl: './accepted-leads.component.scss'
})
export class AcceptedLeadsComponent implements OnChanges {
  @Input() leads: Lead[] = [];

  filterLeads() {
    this.leads = [...this.leads.filter(l => l.status === "Accepted")];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['leads']) {
      this.filterLeads();
    }
  }
}
