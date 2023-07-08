import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosTrialPeriodComponent } from './videos-trial-period.component';

describe('VideosTrialPeriodComponent', () => {
  let component: VideosTrialPeriodComponent;
  let fixture: ComponentFixture<VideosTrialPeriodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideosTrialPeriodComponent]
    });
    fixture = TestBed.createComponent(VideosTrialPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
