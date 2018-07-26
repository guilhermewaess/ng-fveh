import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIsValidDecoratorComponent } from './form-is-valid-decorator.component';

describe('FormIsValidDecoratorComponent', () => {
  let component: FormIsValidDecoratorComponent;
  let fixture: ComponentFixture<FormIsValidDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIsValidDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIsValidDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
