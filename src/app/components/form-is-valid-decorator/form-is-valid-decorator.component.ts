import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FvehFormIsValid } from 'ng-fveh';

@Component({
  selector: 'app-form-is-valid-decorator',
  templateUrl: './form-is-valid-decorator.component.html',
  styleUrls: ['./form-is-valid-decorator.component.scss'],
})
export class FormIsValidDecoratorComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      input: this.fb.control('', [Validators.required]),
    });
  }

  getHtmlCode() {
    return `
    <form [formGroup]="form"
      (ngSubmit)="onSubmit()">
      <mat-form-field appearance="standard">
        <mat-label>Click on the button and watch the field validating</mat-label>
        <input matInput
          formControlName="input">
        <mat-hint>Click on the button to test decorator</mat-hint>
        <mat-error>
          <fveh-errors-presenter [field]="form.get('input')"></fveh-errors-presenter>
        </mat-error>
      </mat-form-field>
      <button type="submit"
        mat-stroked-button
        color="primary"
        class="button-submit">
        Click-me
      </button>
    </form>`
      .replace(/</gi, '&lt')
      .replace(/>/gi, '&gt');
  }

  getTsCode() {
    return `
      @FvehFormIsValid('form')
      onSubmit() {
        window.alert('Submitted');
      }
    `;
  }

  @FvehFormIsValid('form')
  onSubmit() {
    window.alert('Submitted');
  }
}
