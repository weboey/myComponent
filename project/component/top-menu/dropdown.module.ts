import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { DropDownComponent } from './dropdown.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {TreeViewComponent, TreeViewItemComponent} from './tree-view.component';
@NgModule({
  imports: [
    CommonModule, NgZorroAntdModule
  ],
  declarations: [
    DropDownComponent,
    TreeViewComponent,
    TreeViewItemComponent
  ],
  exports: [DropDownComponent,
    TreeViewComponent,
    TreeViewItemComponent],
  providers: [],
})
export class DropDownModule {

}
