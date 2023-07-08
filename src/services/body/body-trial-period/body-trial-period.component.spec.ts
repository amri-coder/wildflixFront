import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTrialPeriodComponent } from './body-trial-period.component';

describe('BodyTrialPeriodComponent', () => {
  let component: BodyTrialPeriodComponent;
  let fixture: ComponentFixture<BodyTrialPeriodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyTrialPeriodComponent]
    });
    fixture = TestBed.createComponent(BodyTrialPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
