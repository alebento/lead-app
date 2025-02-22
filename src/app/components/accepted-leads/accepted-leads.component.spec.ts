import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedLeadsComponent } from './accepted-leads.component';

describe('AcceptedLeadsComponent', () => {
  let component: AcceptedLeadsComponent;
  let fixture: ComponentFixture<AcceptedLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptedLeadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
