import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ZtreeComponent } from './ztree/ztree.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { NgZorroAntdModule } from "ng-zorro-antd";
import {TreeViewItemComponent} from "./tree-view/tree-view.component";
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
@NgModule({
  declarations: [
    ZtreeComponent,
    TreeViewComponent,
    TreeViewItemComponent
  ],
  providers: [],
  imports: [ CommonModule,FormsModule,ReactiveFormsModule,NgZorroAntdModule],
  exports: [ZtreeComponent,TreeViewComponent,TreeViewItemComponent]
})
export class ComponentModule { }
