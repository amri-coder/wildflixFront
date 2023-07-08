import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAllUsersComponent } from './body-all-users.component';

describe('BodyAllUsersComponent', () => {
  let component: BodyAllUsersComponent;
  let fixture: ComponentFixture<BodyAllUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyAllUsersComponent]
    });
    fixture = TestBed.createComponent(BodyAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
