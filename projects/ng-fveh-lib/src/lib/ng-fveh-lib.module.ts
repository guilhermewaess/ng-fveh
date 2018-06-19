import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorsPresenterComponent } from './components/errors-presenter/errors-presenter.component';
import { ModuleWithProviders } from '@angular/core';
import { NgFvehLibService } from './ng-fveh-lib.service';
import { Messages } from './interfaces';

@NgModule({
  imports: [CommonModule],
  exports: [ErrorsPresenterComponent],
  declarations: [ErrorsPresenterComponent],
})
export class NgFvehLibModule {
  constructor() {}

  public static forRoot(messagesObject: Messages): ModuleWithProviders {
    return {
      ngModule: NgFvehLibModule,
      providers: [
        NgFvehLibService,
        { provide: 'messagesObject', useValue: messagesObject },
      ],
    };
  }
}
