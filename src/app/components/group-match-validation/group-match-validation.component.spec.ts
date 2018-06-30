import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMatchValidationComponent } from './group-match-validation.component';

describe('GroupMatchValidationComponent', () => {
  let component: GroupMatchValidationComponent;
  let fixture: ComponentFixture<GroupMatchValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMatchValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMatchValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
