import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosOnlyMembersComponent } from './videos-only-members.component';

describe('VideosOnlyMembersComponent', () => {
  let component: VideosOnlyMembersComponent;
  let fixture: ComponentFixture<VideosOnlyMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideosOnlyMembersComponent]
    });
    fixture = TestBed.createComponent(VideosOnlyMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
