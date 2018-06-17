import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleReactiveFormComponent } from './simple-reactive-form.component';

describe('SimpleReactiveFormComponent', () => {
  let component: SimpleReactiveFormComponent;
  let fixture: ComponentFixture<SimpleReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
