import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatButtonModule,
} from '@angular/material';

const components = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
];

@NgModule({
  imports: [CommonModule, ...components],
  exports: components,
})
export class MaterialModule {}
