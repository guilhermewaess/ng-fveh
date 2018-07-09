import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { createStubInstance } from 'sinon';
import { ErrorsPresenterComponent } from './errors-presenter.component';
import { FormControl, Validators } from '@angular/forms';
import { NgFvehLibService } from '../../ng-fveh-lib.service';

fdescribe('ErrorsPresenterComponent', () => {
  let component: ErrorsPresenterComponent;
  let fixture: ComponentFixture<ErrorsPresenterComponent>;
  let field: FormControl;
  let libServiceMock: NgFvehLibService;

  beforeEach(async(() => {
    libServiceMock = createStubInstance(NgFvehLibService);
    TestBed.configureTestingModule({
      declarations: [ErrorsPresenterComponent],
      providers: [{ provide: NgFvehLibService, useValue: libServiceMock }],
    }).compileComponents();
  }));

  beforeEach(() => {
    field = new FormControl('', [Validators.required]);
    fixture = TestBed.createComponent(ErrorsPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.field = field;
  });

  describe('hasErrors', () => {
    it('should return true when field is touched, invalid and errors is not null', () => {
      field.markAsTouched();
      expect(component.hasErrors()).toEqual(true);
    });
  });
});
