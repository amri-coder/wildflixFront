import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTrialPeriodComponent } from './details-trial-period.component';

describe('DetailsTrialPeriodComponent', () => {
  let component: DetailsTrialPeriodComponent;
  let fixture: ComponentFixture<DetailsTrialPeriodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTrialPeriodComponent]
    });
    fixture = TestBed.createComponent(DetailsTrialPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
