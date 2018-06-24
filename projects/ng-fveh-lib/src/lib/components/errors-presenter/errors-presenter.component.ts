import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgFvehLibService } from '../../ng-fveh-lib.service';

@Component({
  selector: 'fveh-errors-presenter',
  templateUrl: './errors-presenter.component.html',
  styleUrls: ['./errors-presenter.component.scss'],
})
export class ErrorsPresenterComponent {
  @Input() field: FormControl;

  constructor(public service: NgFvehLibService) {}

  getFieldErrors() {
    return Object.keys(this.field.errors);
  }

  getErrorMessage(errorType: string) {
    const errorPayload = this.field.errors[errorType];
    return this.service.getMessage(errorType, errorPayload);
  }

  hasErrors() {
    return this.field.touched && this.field.invalid && !!this.field.errors;
  }
}
