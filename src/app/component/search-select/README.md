
## Description

阿里的`ng-zorro`下拉选择组件`nz-select`不适用表格中行数量较多场景，存在界面卡顿，性能问题，用此组件代替；

## API

```html
  <app-search-select
    nzAllowClear
    [(value)]="data.bond_short_name"
    (nzOpenChange)="openHandle($event)"
    (nzSearchChange)="searchHandle($event)"
    (ngModelChange)="changeHandle($event)"
    [nzNotFoundContent]="'无法找到'"
    [nzDisabled]="false"
    [data]="optionLists"
    [nzOptionLabel]="'key or id'">
  </app-search-select>
```

### app-search-select

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值 双向绑定 | string |-
| data | 可选择项列表 | Array | -
| nzOptionLabel | 设置data数组中对象的标识 |  string | -
| ngModelChange | 选中的value发生变化时回调 | (value:string)=>{} | -
| nzOpenChange | 下拉菜单打开状态变化时回调 | (nzOpen:boolean)=>{} | - |
| nzSearchChange | 文本框值变化时回调 | (inputValue:string)=>{} | - |
| nzAllowClear | 支持清除 | boolean | false |
| nzDisabled | 是否禁用 | boolean | false |
| nzNotFoundContent | 当下拉列表为空时显示的内容 | string | - |
| nzPlaceHolder | 选择框默认提示文字 | string | - |


