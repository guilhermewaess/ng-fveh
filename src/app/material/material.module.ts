import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
} from '@angular/material';

const components = [
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
