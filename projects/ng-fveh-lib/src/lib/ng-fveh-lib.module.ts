import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import { ErrorsPresenterComponent } from './components/errors-presenter/errors-presenter.component';
import { NgFvehLibService } from './ng-fveh-lib.service';
import { Messages } from './interfaces';

@NgModule({
  imports: [CommonModule, MatFormFieldModule],
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
