import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { SearchSelectComponent } from './search-select.component';

@NgModule({
  imports: [
     CommonModule,
     FormsModule,
     OverlayModule
  ],
  declarations: [
    SearchSelectComponent
  ],
  providers: [],
  exports: [SearchSelectComponent],
})
export class SearchSelectModule { }
