import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorsPresenterComponent } from './components/errors-presenter/errors-presenter.component';

@NgModule({
  imports: [CommonModule],
  exports: [ErrorsPresenterComponent],
  declarations: [ErrorsPresenterComponent],
})
export class NgFvehLibModule {}
