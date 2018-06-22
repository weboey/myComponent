import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTemplateComponent} from './ng-template/ng-template.component';
import { SelectTagComponent } from './select-tag/select-tag.component';
import {FormsModule} from '@angular/forms';
import { DataChangeComponent } from './data-change/data-change.component';
import { DisplayPersonComponent } from './display-person/display-person.component';
import {ParentComponent} from './on-push-demo/one/parent';
import {ChildComponent} from './on-push-demo/one/child';
import {CounterComponent} from './on-push-demo/two/counter';
import { MouseEventComponent } from './mouse-event/mouse-event.component';
@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [NgTemplateComponent,
    SelectTagComponent,
    DataChangeComponent,
    DisplayPersonComponent,
    CounterComponent, ParentComponent, ChildComponent, MouseEventComponent],
  exports: [NgTemplateComponent, SelectTagComponent, DataChangeComponent,
    DisplayPersonComponent,
    ParentComponent,
    CounterComponent,
    MouseEventComponent]
})
export class DemoExampleModule { }
