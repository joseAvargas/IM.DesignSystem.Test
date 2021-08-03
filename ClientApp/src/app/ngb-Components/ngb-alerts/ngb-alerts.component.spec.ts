import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbAlertsComponent } from './ngb-alerts.component';

describe('NgbAlertsComponent', () => {
  let component: NgbAlertsComponent;
  let fixture: ComponentFixture<NgbAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
