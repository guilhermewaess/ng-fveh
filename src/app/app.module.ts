import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SimpleReactiveFormComponent } from './components/simple-reactive-form/simple-reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFvehLibModule } from 'ng-fveh-lib';
import ErrorsMessages from './ErrorsMessages';

@NgModule({
  declarations: [AppComponent, SimpleReactiveFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgFvehLibModule.forRoot(ErrorsMessages),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
