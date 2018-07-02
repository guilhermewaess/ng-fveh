import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { ErrorsPresenterComponent } from './components/errors-presenter/errors-presenter.component';
// import { NgFvehLibService } from './ng-fveh-lib.service';
// import { Messages } from './interfaces';



@NgModule({
  imports: [CommonModule],
  exports: [ErrorsPresenterComponent],
  declarations: [ErrorsPresenterComponent],
})
export class NgFvehLibModule {
  constructor() {}

  // https://github.com/angular/angular/issues/23609
  // public static forRoot(messagesDictionary: Messages = {}): ModuleWithProviders {
  //   return {
  //     ngModule: NgFvehLibModule,
  //     providers: [
  //       { provide: MESSAGES_CONFIGURATION, useValue: messagesDictionary }, //AOT BUG
  //       NgFvehLibService,
  //     ],
  //   };
}
