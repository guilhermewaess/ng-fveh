import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-errors-presenter',
  templateUrl: './errors-presenter.component.html',
  styleUrls: ['./errors-presenter.component.scss'],
})
export class ErrorsPresenterComponent {
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

  getHtmlCode() {
    return `
    <form [formGroup]="form">
      <mat-form-field appearance="standard">
        <mat-label>Max Length: 5 - Required Field</mat-label>
        <input matInput
               placeholder="Required and Max length 5"
               formControlName="input">
        <mat-hint>Type more than 5 characters</mat-hint>
        <mat-error>
          <fveh-errors-presenter [field]="form.get('input')"></fveh-errors-presenter>
        </mat-error>
      </mat-form-field>
    </form>
    `
      .replace(/</gi, '&lt')
      .replace(/>/gi, '&gt');
  }

  getTsCode() {
    return `
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
    `;
  }

  getModuleCode() {
    return `
    import { AppComponent } from './app.component';
    import { ReactiveFormsModule } from '@angular/forms';
    import { NgFvehLibModule, ERROR_MESSAGES_CONFIGURATION } from 'ng-fveh';

    const errorsMessages = {
      required: () => 'This field is required',
      maxlength: errorObject =>
        \`Max permited characters: \${errorObject.requiredLength}, but you typed: \${errorObject.actualLength}\`
    };

    @NgModule({
      declarations: [AppComponent, ErrorsPresenterComponent],
      imports: [
        ReactiveFormsModule,
        NgFvehLibModule
      ],
      providers: [
        { provide: ERROR_MESSAGES_CONFIGURATION, useValue: errorsMessages },
      ],
      bootstrap: [AppComponent],
    })
    export class AppModule {}
    `;
  }
}
