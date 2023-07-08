import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyOnlyMembersComponent } from './body-only-members.component';

describe('BodyOnlyMembersComponent', () => {
  let component: BodyOnlyMembersComponent;
  let fixture: ComponentFixture<BodyOnlyMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyOnlyMembersComponent]
    });
    fixture = TestBed.createComponent(BodyOnlyMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
