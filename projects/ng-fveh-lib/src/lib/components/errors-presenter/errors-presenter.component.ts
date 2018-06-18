import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fveh-errors-presenter',
  templateUrl: './errors-presenter.component.html',
  styleUrls: ['./errors-presenter.component.scss'],
})
export class ErrorsPresenterComponent {
  @Input() field: FormControl;

  constructor() {}

  getFieldErrors() {
    return Object.keys(this.field.errors);
  }

  getErrorMessage(errorType: string) {
    return 'error';
  }

  hasErrors() {
    return this.field.touched && this.field.invalid && !!this.field.errors;
  }
}
