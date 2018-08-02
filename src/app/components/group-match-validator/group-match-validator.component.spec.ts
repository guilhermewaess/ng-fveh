import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMatchValidatorComponent } from './group-match-validator.component';

describe('GroupMatchValidatorComponent', () => {
  let component: GroupMatchValidatorComponent;
  let fixture: ComponentFixture<GroupMatchValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMatchValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMatchValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
