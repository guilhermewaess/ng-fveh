import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ErrorsPresenterComponent } from './components/errors-presenter/errors-presenter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFvehLibModule, ERROR_MESSAGES_CONFIGURATION } from 'ng-fveh';
import ErrorsMessages from './ErrorsMessages';
import { FormIsValidDecoratorComponent } from './components/form-is-valid-decorator/form-is-valid-decorator.component';
import { GroupMatchValidatorComponent } from './components/group-match-validator/group-match-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorsPresenterComponent,
    FormIsValidDecoratorComponent,
    GroupMatchValidatorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgFvehLibModule,
  ],
  providers: [
    // https://github.com/angular/angular/issues/23609
    // using this provider here because of this issue.
    { provide: ERROR_MESSAGES_CONFIGURATION, useValue: ErrorsMessages },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
