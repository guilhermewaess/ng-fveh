import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-reactive-form',
  templateUrl: './simple-reactive-form.component.html',
  styleUrls: ['./simple-reactive-form.component.scss'],
})
export class SimpleReactiveFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group(
      {
        input: this.fb.control('', [
          Validators.required,
          Validators.maxLength(5),
        ]),
      },
      { updateOn: 'blur' },
    );
  }
}
