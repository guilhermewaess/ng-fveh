import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFvehLibComponent } from './ng-fveh-lib.component';

describe('NgFvehLibComponent', () => {
  let component: NgFvehLibComponent;
  let fixture: ComponentFixture<NgFvehLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFvehLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFvehLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
