import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FvehValidators } from 'ng-fveh';

@Component({
  selector: 'app-group-match-validator',
  templateUrl: './group-match-validator.component.html',
  styleUrls: ['./group-match-validator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupMatchValidatorComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group(
      {
        input: this.fb.control(''),
        emails: this.fb.group(
          {
            email: this.fb.control(''),
            emailConfirmation: this.fb.control(''),
          },
          {
            validator: FvehValidators.groupMatch([
              'E-mail',
              'E-mail Confirmation',
            ]),
          },
        ),
      },
      { updateOn: 'blur' },
    );
  }

  getHtmlCode() {
    return `
    <form [formGroup]="form">
      <div formGroupName="emails">
        <mat-form-field appearance="standard">
          <mat-label>Email</mat-label>
          <input matInput
            formControlName="email">
          <mat-hint>Email</mat-hint>
          <mat-error>
            <fveh-errors-presenter [field]="form.get(['emails', 'email'])"></fveh-errors-presenter>
          </mat-error>
        </mat-form-field>
        <mat-form-field appearance="standard">
          <mat-label>Confirm Email</mat-label>
          <input matInput
            formControlName="emailConfirmation">
          <mat-hint>Email Confirmation</mat-hint>
          <mat-error>
            <fveh-errors-presenter [field]="form.get(['emails', 'emailConfirmation'])"></fveh-errors-presenter>
          </mat-error>
        </mat-form-field>
      </div>
    </form>
    `
      .replace(/</gi, '&lt')
      .replace(/>/gi, '&gt');
  }

  getTsCode() {
    return `
    import { FvehValidators } from 'ng-fveh';

    initForm() {
      this.form = this.fb.group(
        {
          input: this.fb.control(''),
          emails: this.fb.group(
            {
              email: this.fb.control(''),
              emailConfirmation: this.fb.control(''),
            },
            {
              validator: FvehValidators.groupMatch([
                'E-mail',
                'E-mail Confirmation',
              ]),
            },
          ),
        },
        { updateOn: 'blur' },
      );
    }
    `;
  }
}
