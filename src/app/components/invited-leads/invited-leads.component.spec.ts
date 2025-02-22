import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedLeadsComponent } from './invited-leads.component';

describe('InvitedLeadsComponent', () => {
  let component: InvitedLeadsComponent;
  let fixture: ComponentFixture<InvitedLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvitedLeadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitedLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
