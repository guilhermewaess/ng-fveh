import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

const components = [MatCardModule, MatFormFieldModule, MatInputModule];

@NgModule({
  imports: [CommonModule, ...components],
  exports: components,
})
export class MaterialModule {}
