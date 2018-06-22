import {Component, Input, OnInit} from '@angular/core';
import {TableCellSetting} from '../rowspan-table/rowspan-table.component';

@Component({
  selector: 'sxzq-child-table',
  templateUrl: './child-table.component.html',
  styleUrls: ['./child-table.component.scss']
})
export class ChildTableComponent implements OnInit {
  _$cellSettings = [];
  constructor() { }
  _data: any;
  @Input()
  set data(value: any) {
    // console.log('子表数据');
    // console.log(value);
    this._data = value;
  }
  get data(): any {
    return this._data;
  }
  ngOnInit() {
    this._update();
    // console.log('字表cell data');
    // console.log(this._$cellSettings);
  }
  _update() {
    const columnDefines = this._columnDefineGenerator();
    this._updateCellSettings(columnDefines);
  }
  private _columnDefineGenerator(field?: string, index?: number){
    const columnDefines = [];
    this.data.field.forEach((field2, index2) => {
      columnDefines.push({target: field2});
    });
    return columnDefines;
  }
  _updateCellSettings(columnDefines) {
    // this._$cellSettings.splice(dataLen, this._$cellSettings.length);
    this.data.data.forEach((row, rowIndex) => {
      let groupSetting: TableCellSetting;
      let precolumnDefine: any;
      columnDefines.forEach(columnDefine => {
        if (columnDefine.visible === false) {
          return;
        }
        const field: string = <string>columnDefine.target;
        const settings = new TableCellSetting(); // 每个单元格处理逻辑
        if (!this._$cellSettings[rowIndex]) {
          this._$cellSettings.push([]);
        }
        this._$cellSettings[rowIndex].push(settings);
        settings.cellData = this._getCellDataByField(field, rowIndex);
        settings.colSpan = 1;
        if (columnDefine.group) {
          if (groupSetting && precolumnDefine.group === columnDefine.group) {
            groupSetting.colSpan++;
            settings.colSpan = 0;
          } else {
            groupSetting = settings;
            precolumnDefine = columnDefine;
          }
        }
      });
    });
  }

  _getCellDataByField(field, rowIndex) {
    const index = this._getColumnIndex(field);
    if (index === -1) {
      console.error('no cell data found, unknown field: ' + field);
      return '';
    }
    if (!this.data.data[rowIndex]) {
      this.data.data[rowIndex] = [];
    }
    // console.log('cellData', this.data.data[rowIndex][field]);
    return this.data.data[rowIndex][field];
  }

  private _getColumnIndex(field: string): number {
    const index = this.data.field.indexOf(field);
    if (index !== -1) {
      return index;
    }
  }
}
