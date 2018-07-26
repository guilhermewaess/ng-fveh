import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fvehFormIsValid } from 'projects/ng-fveh-lib/src/lib/decorators/form-is-valid.decorator';

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

  @fvehFormIsValid('form')
  onSubmit() {
    window.alert('Submitted');
  }
}
