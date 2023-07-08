import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAllComponent } from './footer-all.component';

describe('FooterAllComponent', () => {
  let component: FooterAllComponent;
  let fixture: ComponentFixture<FooterAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterAllComponent]
    });
    fixture = TestBed.createComponent(FooterAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
