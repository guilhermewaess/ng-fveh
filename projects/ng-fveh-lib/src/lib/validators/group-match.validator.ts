import { FormControl } from '@angular/forms';

interface FormControls {
  [key: string]: FormControl;
}

function setErrors(errors: any, control: FormControl) {
  if (Object.keys(errors).length) {
    control.setErrors(errors);
  } else {
    control.setErrors(null);
  }
}

function setErrorOnFields(error: {} | null, controls: FormControls) {
  Object.keys(controls).forEach(controlName => {
    const errors = Object.assign({}, controls[controlName].errors, error);
    setErrors(errors, controls[controlName]);
  });
}

function clearErrorOnFields(fieldErrorName: string, controls: FormControls) {
  Object.keys(controls).forEach(controlName => {
    const errors = controls[controlName].errors;
    if (errors) {
      delete errors[fieldErrorName];
      setErrors(errors, controls[controlName]);
    }
  });
}

function createGroupMatchError(friendlyFieldNames: string[]) {
  return {
    fvehGroupMatch: {
      fields: friendlyFieldNames,
    },
  };
}

function validateIfValuesMatch(controlValues: any) {
  const [firstField, ...otherFields] = Object.keys(controlValues);
  const isValid = otherFields.every(
    currentValue => controlValues[firstField] === controlValues[currentValue],
  );

  return isValid;
}

export function groupMatch(friendlyFieldNames: string[]) {
  return ({ value, touched, controls }) => {
    const error = createGroupMatchError(friendlyFieldNames);
    const isGroupMatching = validateIfValuesMatch(value);

    if (touched && isGroupMatching) {
      clearErrorOnFields('fvehGroupMatch', controls);
      return null;
    }

    setErrorOnFields(error, controls);
    return error;
  };
}
