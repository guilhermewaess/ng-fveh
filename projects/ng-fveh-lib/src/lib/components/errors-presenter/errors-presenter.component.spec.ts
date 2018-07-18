import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { createStubInstance, SinonStub } from 'sinon';
import { ErrorsPresenterComponent } from './errors-presenter.component';
import { FormControl, Validators } from '@angular/forms';
import { NgFvehLibService } from '../../ng-fveh-lib.service';

describe('ErrorsPresenterComponent', () => {
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
    component.field = field;

    fixture.detectChanges();
  });

  describe('getFieldErrors', () => {
    beforeEach(() => {
      field.setErrors({ error1: true, error2: false });
    });
    it('should return all property names from field errors', () => {
      expect(component.getFieldErrors()).toEqual(['error1', 'error2']);
    });
  });

  describe('getErrorMessage', () => {
    let getMessageStub: SinonStub;
    let message: string;
    let fieldError: { [key: string]: any };
    let result: string;
    beforeEach(() => {
      message = 'Error Message';
      fieldError = { error: 'payload' };
      getMessageStub = libServiceMock.getMessage as SinonStub;
      getMessageStub.returns(message);

      field.setErrors(fieldError);
      result = component.getErrorMessage('error');
    });
    it('should call service with errorPropertyName and payload', () => {
      expect(
        getMessageStub.calledWithExactly('error', fieldError.error),
      ).toEqual(true);
    });
    it('should return the result of service call', () => {
      expect(result).toEqual(message);
    });
  });

  describe('hasErrors', () => {
    it('should return true when field is touched, invalid and errors is not null', () => {
      field.markAsTouched();
      field.setValue('');
      field.setErrors({ required: true });
      expect(component.hasErrors()).toEqual(true);
    });
    it('should return false when is untouched', () => {
      field.setValue('123');
      field.setErrors(null);
      field.markAsUntouched();
      expect(component.hasErrors()).toEqual(false);
    });
    it('should return false when field is touched and valid', () => {
      field.markAsTouched();
      field.setValue('123');
      field.setErrors(null);
      expect(component.hasErrors()).toEqual(false);
    });
    it('should return false when field is touched, invalid but errors null', () => {
      field.markAsTouched();
      field.setValue('');
      field.setErrors(null);
      expect(component.hasErrors()).toEqual(false);
    });
  });
});
