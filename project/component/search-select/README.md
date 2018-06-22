
## Description

阿里的`ng-zorro`下拉选择组件`nz-select`不适用表格中行数量较多场景，存在界面卡顿，性能问题，用此组件代替；

## API

```html
  <sxzq-search-select
    nzAllowClear
    [(value)]="data.bond_short_name"
    (nzOpenChange)="openHandle($event)"
    (nzSearchChange)="searchHandle($event)"
    (ngModelChange)="changeHandle($event)"
    [nzNotFoundContent]="'无法找到'"
    [nzDisabled]="false"
    [data]="optionLists"
    [nzOptionLabel]="'key or name'"
    [nzOptionValue]="item or item.id">
  </sxzq-search-select>
```

### sxzq-search-select

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值 双向绑定 | string or Object |-
| data | 可选择项列表 | Array | -
| nzOptionLabel | 设置data数组对象中需要显示的字段 |  string | -
| nzOptionValue | 设置value的值是选中对象的某个字段或整个对象 |  string | -
| nzInitSearchValue | 设置初始搜索时的输入值，当data为空时用于显示初始value |  string | -
| ngModelChange | 选中的value发生变化时回调 | (value:string)=>{} | -
| ngModelChangeObj | 选中的value发生变化时回调 | (value:Object)=>{} | -
| nzOpenChange | 下拉菜单打开状态变化时回调 | (nzOpen:boolean)=>{} | - |
| nzSearchChange | 文本框值变化时回调 | (inputValue:string)=>{} | - |
| nzAllowClear | 支持清除 | boolean | false |
| nzDisabled | 是否禁用 | boolean | false |
| nzNotFoundContent | 当下拉列表为空时显示的内容 | string | - |
| nzPlaceHolder | 选择框默认提示文字 | string | - |


