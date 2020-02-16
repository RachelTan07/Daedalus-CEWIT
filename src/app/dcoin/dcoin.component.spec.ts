import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcoinComponent } from './dcoin.component';

describe('DcoinComponent', () => {
  let component: DcoinComponent;
  let fixture: ComponentFixture<DcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
