import { AbstractControl, FormGroup } from '@angular/forms';

function markControlsAsTouched(controls: { [key: string]: AbstractControl }) {
  Object.keys(controls).forEach(field => {
    const formGroup = controls[field] as FormGroup;

    if (formGroup.controls) {
      const groupControls = formGroup.controls;
      markControlsAsTouched(groupControls);
    } else {
      formGroup.markAsTouched({ onlySelf: true });
    }
  });
}

export function fvehFormIsValid(formName: string) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function() {
      const form = this[formName];
      if (form.valid) {
        originalMethod.apply(this, arguments);
      } else {
        markControlsAsTouched(form.controls);
      }
    };

    return descriptor;
  };
}
