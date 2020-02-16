import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistDashboardComponent } from './dentist-dashboard.component';

describe('DentistDashboardComponent', () => {
  let component: DentistDashboardComponent;
  let fixture: ComponentFixture<DentistDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
