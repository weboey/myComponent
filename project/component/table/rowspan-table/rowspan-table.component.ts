import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import {TableCellRendererBase} from '../core/table-cell.component';
@Component({
  template: `<div>my test......</div>`
})

export class TableCellSetting {
  cellData: any;
  width: string | number;
  visible: boolean;
  renderer: TemplateRef<any>;
  class: string;
  editable: boolean;
  editorRenderer: TemplateRef<any>;
  group: string;
  field: string;
  cellField: Array<any>;
  colSpan: any;
  tooltip: any;
}

@Component({
  selector: 'sxzq-rowspan-table',
  templateUrl: './rowspan-table.component.html',
  styleUrls: ['./rowspan-table.component.css']
})
export class RowSpanTableComponent implements OnInit {

  constructor() { }
  _$headerSettings = [];
  _$cellSettings = [];
  _$tableData = [];
  _$headerSettingsMap = new Map();
  _data: any;
  @Input()
  set data(value: any) {
    this._data = value;
  }
  get data(): any {
      return this._data;
  }
  @Input() columnSetting: any;

  ngOnInit() {
    console.log('此表数据');
    console.log(this.data);
    this._update();
  }
  _update() {
    debugger;
    const columnDefines = this._getMixedColumnDefines();
    this._updateHeaderSettings(columnDefines);
    this._updateCellSettings(columnDefines);
    this._$tableData = this._setTableFormatData();
    console.log(this._$headerSettings);
    console.log(this._$cellSettings);
    console.log(this._$tableData);
  }
  //
  // 生成混合后的列定义序列
  _getMixedColumnDefines(): Array<any> {
    if (!this.data) {
      return [];
    }
    const columnDefines = [];
    this.data.field.forEach((field, index) => {
      let cd = this._columnDefineGenerator(field, index);
      if (cd) {
        cd = Object.assign({}, cd);
        cd.target = field;
      }
      columnDefines.push(cd ? cd : {target: field});
    });
    return columnDefines;
  }
  // 得到列setting
  private _columnDefineGenerator(field: string, index: number) {
    if (!this.columnSetting) {
      return undefined;
    }
    return this.columnSetting.find(colDef => {
      const targets: (number | string)[] = colDef.target instanceof Array ? colDef.target : [colDef.target];
      const idx = targets.findIndex(target => {
        return (typeof target === 'number' && target === index) || (typeof target === 'string' && target === field);
      });
      return idx !== -1;
    });
  }
  // 更新表头
  _updateHeaderSettings(columnDefines) {
    columnDefines.forEach(columnDefine => {
      if (columnDefine.visible === false) {
        return;
      }

      const field: string = <string>columnDefine.target;
      const settings = this._getHeaderSettings(columnDefine);
      if (settings.cellData === null) {
        settings.cellData = this._getHeaderValueByField(field);
      }
      this._$headerSettings.push(settings);
      this._$headerSettingsMap.set(field, settings);
    });
  }
  // 得到表头setting
  _getHeaderSettings(columnDefine) {
    const settings = {
      cellData: null,
      width: null,
      visible: true,
      renderer: null,
      class: '',
      field: '',
    };
    settings.width = columnDefine.width;
    settings.field = <string>columnDefine.target;
    return settings;
  }

  private _getHeaderValueByField(field): string {
    const index = this._getColumnIndex(field);
    if (index === -1) {
      console.error('no header value found, unknown field: ' + field);
      return '';
    }
    return this.data.header[index];
  }

  private _getColumnIndex(field: string): number {
    const index = this.data.field.indexOf(field);
    if (index !== -1) {
      return index;
    }
  }

  // 单元格处理
  _updateCellSettings(columnDefines) {
    // this._$cellSettings.splice(dataLen, this._$cellSettings.length);
    this.data.data.forEach((row, rowIndex) => {
      let groupSetting: any;
      let precolumnDefine: any;
      columnDefines.forEach(columnDefine => {
        if (columnDefine.visible === false) {
          return;
        }
        const field: string = <string>columnDefine.target;
        const settings = this.createCellSetting(columnDefine); // new TableCellSetting(); // 每个单元格处理逻辑
        if (!this._$cellSettings[rowIndex]) {
          this._$cellSettings.push([]);
        }
        this._$cellSettings[rowIndex].push(settings);
        if (columnDefine.group) {
          settings.cellData = {
            data: this._getCellDataByField(columnDefine.group, rowIndex),
            field: this._columnDefineGenerator(columnDefine.target, 0).target
          };
          // settings.cellField = this._columnDefineGenerator(columnDefine.target, 0).target;
        } else {
          settings.cellData = this._getCellDataByField(field, rowIndex);
        }
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
    console.log('cellData', this.data.data[rowIndex][field]);
    return this.data.data[rowIndex][field];
  }

  createCellSetting(columnDefine) {
    const settings = {
      cellData: null, width: null, visible: true, renderer: null, class: '', colSpan: 1,
      editable: false, editorRenderer: null, group: null, field: null, tooltip: null
    };
    settings.width = columnDefine.width;
    settings.group = columnDefine.group;
    settings.field = <string>columnDefine.target;
    const cellDef = columnDefine.cell;
    if (cellDef) {
      settings.renderer = this.getRenderer(cellDef.renderer);
      settings.class = cellDef.clazz;
      settings.editable = cellDef.editable;
      settings.tooltip = cellDef.tooltip;
    }
    return settings;
  }
  getRenderer(renderer) {
    if (renderer instanceof Function && !(renderer.prototype instanceof TableCellRendererBase)) {
      try {
        return renderer();
      } catch (e) {
        return undefined;
      }
    }
    return renderer;
  }

  _setTableFormatData() {
    const result = [];
    this.data.data.forEach((row, rowIndex) => {
      const obj = {};
      this.data.field.forEach((field, index) => {
        obj[field] = row[index];
      });
      result.push(obj);
    });
    return result;
  }
}
