import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOnlyMembersComponent } from './details-only-members.component';

describe('DetailsOnlyMembersComponent', () => {
  let component: DetailsOnlyMembersComponent;
  let fixture: ComponentFixture<DetailsOnlyMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsOnlyMembersComponent]
    });
    fixture = TestBed.createComponent(DetailsOnlyMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
