import { FormGroup, FormControl, Validators } from '@angular/forms';
import { groupMatch } from './group-match.validator';

describe('groupMatchValidator', () => {
  let matchFunction: Function;
  let formGroup: FormGroup;
  let formField1: FormControl;
  let formField2: FormControl;
  let friendlyFieldNames: string[];
  let result: any;
  let expectedError: any;

  beforeEach(() => {
    result = null;
    friendlyFieldNames = ['Form Field1', 'Form Field 2'];
    formField1 = new FormControl('');
    formField2 = new FormControl('');
    formGroup = new FormGroup({
      formField1,
      formField2,
    });
    expectedError = {
      fvehGroupMatch: {
        fields: friendlyFieldNames,
      },
    };
    matchFunction = groupMatch(friendlyFieldNames);
  });
  describe('when match group which is pristine', () => {
    beforeEach(() => {
      formGroup.markAsPristine();
      result = matchFunction(formGroup);
    });
    it('should return null', () => {
      expect(result).toBeNull();
    });
    it('should not change error property', () => {
      expect(formField1.errors).toBeNull();
    });
  });
  describe('when match group which is not touched', () => {
    beforeEach(() => {
      formGroup.markAsDirty();
      formGroup.markAsUntouched();
      result = matchFunction(formGroup);
    });
    it('should insert error on formField1', () => {
      expect(formField1.errors.fvehGroupMatch).toEqual(
        expectedError.fvehGroupMatch,
      );
    });
    it('should insert error on formField2', () => {
      expect(formField2.errors.fvehGroupMatch).toEqual(
        expectedError.fvehGroupMatch,
      );
    });
    it('should return the error injected on fields', () => {
      expect(result).toEqual(expectedError);
    });
  });
  describe('when match group which is touched and not match', () => {
    beforeEach(() => {
      formGroup.markAsDirty();
      formGroup.markAsTouched();
      formField1.setValue('1');
      formField2.setValue('2');
      result = matchFunction(formGroup);
    });
    it('should insert error on formField1', () => {
      expect(formField1.errors.fvehGroupMatch).toEqual(
        expectedError.fvehGroupMatch,
      );
    });
    it('should insert error on formField2', () => {
      expect(formField2.errors.fvehGroupMatch).toEqual(
        expectedError.fvehGroupMatch,
      );
    });
    it('should return the error injected on fields', () => {
      expect(result).toEqual(expectedError);
    });
  });
  describe('when match group which is touched and fields do match', () => {
    beforeEach(() => {
      formGroup.markAsDirty();
      formGroup.markAsTouched();
      formField1.setValue('1');
      formField2.setValue('1');
      formField1.setErrors(expectedError);
      formField1.setErrors(expectedError);
      result = matchFunction(formGroup);
    });
    it('should remove fvehGroupMatch error on formField1', () => {
      expect(formField1.errors).toBeNull();
    });
    it('should remove fvehGroupMatch error on formField2', () => {
      expect(formField2.errors).toBeNull();
    });
    it('should return the error injected on fields', () => {
      expect(result).toBeNull();
    });
  });
  describe('when match group which is touched and fields do match and theres no other errors on fields', () => {
    beforeEach(() => {
      formGroup.markAsDirty();
      formGroup.markAsTouched();
      formField1.setValue('1');
      formField2.setValue('1');
      formField1.setErrors(expectedError);
      formField2.setErrors({ otherError: true }, ...expectedError);
      result = matchFunction(formGroup);
    });
    it('should remove set errors null on field with only groupMatch validation', () => {
      expect(formField1.errors).toBeNull();
    });
    it('should keep other errors on field which have more validators errors', () => {
      expect(formField2.errors.otherError).toBeTruthy();
    });
  });
});
