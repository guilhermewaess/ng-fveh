import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
} from '@angular/material';

const components = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTabsModule,
  MatToolbarModule
];

@NgModule({
  imports: [CommonModule, ...components],
  exports: components,
})
export class MaterialModule {}
