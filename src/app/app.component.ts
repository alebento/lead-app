import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcceptedLeadsComponent } from './components/accepted-leads/accepted-leads.component';
import { InvitedLeadsComponent } from './components/invited-leads/invited-leads.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Lead, LeadService } from '../services/lead.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, AcceptedLeadsComponent, InvitedLeadsComponent, MatTabsModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'leads-app';
  leads: Lead[] = [];

  constructor(private leadService: LeadService) {}

  ngOnInit(): void {
    this.loadLeads();
  }

  loadLeads() {
    this.leadService.getLeads().subscribe(leads => {
      this.leads = leads;
    });
  }

  updateLeads(updatedLeads: Lead[]) {
    this.leads = [...updatedLeads];
  }
}
