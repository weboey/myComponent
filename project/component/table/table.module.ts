import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RowSpanTableComponent} from './rowspan-table/rowspan-table.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {ChildTableComponent} from './child-table/child-table.component';
import {RendererHostDirective, SxzqTableCellComponent} from './core/table-cell.component';

@NgModule({
  imports: [CommonModule, NgZorroAntdModule, FormsModule],
  declarations: [RowSpanTableComponent, ChildTableComponent, RendererHostDirective, SxzqTableCellComponent],
  exports: [RowSpanTableComponent],
  providers: [],
})
export class TableModule {
}
