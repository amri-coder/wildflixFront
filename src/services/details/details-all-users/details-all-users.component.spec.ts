import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAllUsersComponent } from './details-all-users.component';

describe('DetailsAllUsersComponent', () => {
  let component: DetailsAllUsersComponent;
  let fixture: ComponentFixture<DetailsAllUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsAllUsersComponent]
    });
    fixture = TestBed.createComponent(DetailsAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
