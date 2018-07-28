import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fvehFormIsValid } from './form-is-valid.decorator';
import { SinonSpy, spy } from 'sinon';

class ComponentForTest {
  simpleForm: FormGroup;
  deepForm: FormGroup;
  simpleFormSpy: SinonSpy;
  deepFormSpy: SinonSpy;

  constructor(simpleFormSpy: SinonSpy, groupFormSpy: SinonSpy) {
    this.simpleForm = this.createForm();
    this.deepForm = this.createDeepForm();
    this.simpleFormSpy = simpleFormSpy;
    this.deepFormSpy = groupFormSpy;
  }

  private createForm() {
    return new FormGroup({
      required: new FormControl('', [Validators.required]),
    });
  }

  private createDeepForm() {
    return new FormGroup({
      required: new FormControl('', [Validators.required]),
      groupFields: new FormGroup({
        field1: new FormControl('', [Validators.required]),
      }),
    });
  }

  @fvehFormIsValid('simpleForm')
  submitSimpleForm() {
    this.simpleFormSpy();
  }

  @fvehFormIsValid('deepForm')
  submitDeepForm() {
    this.deepFormSpy();
  }
}

describe('fvehFormIsValid', () => {
  let componentForTest: ComponentForTest;
  let simpleFormSpy: SinonSpy;
  let deepFormSpy: SinonSpy;

  beforeEach(() => {
    simpleFormSpy = spy() as SinonSpy;
    deepFormSpy = spy() as SinonSpy;
    componentForTest = new ComponentForTest(simpleFormSpy, deepFormSpy);
  });

  describe('when validate simple form', () => {
    let simpleForm: FormGroup;
    let simpleFormRequiredField: FormControl;
    beforeEach(() => {
      simpleForm = componentForTest.simpleForm;
      simpleFormRequiredField = simpleForm.get('required') as FormControl;
    });
    describe('and the form is valid', () => {
      beforeEach(() => {
        simpleFormRequiredField.setValue('abc');
        simpleForm.updateValueAndValidity();
        componentForTest.submitSimpleForm();
      });
      it('should execute original function if form is valid', () => {
        expect(simpleFormSpy.calledOnce).toEqual(true);
      });
    });
    describe('and the form is invalid', () => {
      beforeEach(() => {
        simpleFormRequiredField.setValue('');
        simpleFormRequiredField.markAsUntouched();
        simpleForm.updateValueAndValidity();
        componentForTest.submitSimpleForm();
      });
      it('should not execute original function', () => {
        expect(simpleFormSpy.notCalled).toEqual(true);
      });
      it('should mark field control as touched', () => {
        expect(simpleFormRequiredField.touched).toEqual(true);
      });
    });

    describe('when validate deep forms', () => {
      let deepForm: FormGroup;
      let requiredField: FormControl;
      let deepFields: FormGroup;
      let deepFieldField1: FormControl;
      beforeEach(() => {
        deepForm = componentForTest.deepForm;
        requiredField = deepForm.get('required') as FormControl;
        deepFields = deepForm.get('groupFields') as FormGroup;
        deepFieldField1 = deepFields.get('field1') as FormControl;
      });

      describe('and the form is valid', () => {
        beforeEach(() => {
          requiredField.setValue('abc');
          deepFieldField1.setValue('abc');
          requiredField.updateValueAndValidity();
          deepFieldField1.updateValueAndValidity();

          componentForTest.submitDeepForm();
        });
        it('should execute origina function', () => {
          expect(deepFormSpy.calledOnce).toEqual(true);
        });
      });
      describe('and the form is invalid', () => {
        beforeEach(() => {
          requiredField.setValue('');
          deepFieldField1.setValue('');
          requiredField.markAsUntouched();
          deepFieldField1.markAsUntouched();
          requiredField.updateValueAndValidity();
          deepFieldField1.updateValueAndValidity();

          componentForTest.submitDeepForm();
        });
        it('should not execute origina function', () => {
          expect(deepFormSpy.notCalled).toEqual(true);
        });
        it('should mark field as touched', () => {
          expect(requiredField.touched).toEqual(true);
        });
        it('should mark deep field as touched', () => {
          expect(deepFieldField1.touched).toEqual(true);
        });
      });
    });
  });
});
