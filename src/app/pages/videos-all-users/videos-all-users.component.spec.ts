import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosAllUsersComponent } from './videos-all-users.component';

describe('VideosAllUsersComponent', () => {
  let component: VideosAllUsersComponent;
  let fixture: ComponentFixture<VideosAllUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideosAllUsersComponent]
    });
    fixture = TestBed.createComponent(VideosAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
