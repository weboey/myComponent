
## Description

通过封装H5的拖拽API，提供专门的拖拽与拖放的指令，使用简单灵活;

## API

### 基础功能指令

`sxzq-drag` :此指令增加到任意元素上可赋予元素拖动功能

```html
  <any-tag sxzq-drag></any-tag>
```

`sxzq-drop` :此指令增加到任意元素上可赋予元素拖放功能

```html
  <any-tag sxzq-drop></any-tag>
```

### sxzq-drag

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| doDragStart | 当拖拽元素开始被拖拽的时候触发的事件 | (dragInfo:{element:目标元素,event:事件负载})=>{} | -
| doDragEnd | 当拖拽完成后触发的事件，此事件作用在被拖曳元素上 | (dragInfo:{element,event})=>{} | - |
| doDrag | 拖拽元素进行拖拽时触发的事件 | (dragInfo:{element,event})=>{} | - |

### sxzq-drop

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| doDragEnter | 拖拽元素进入目标元素的时候触发的事件 | (dragInfo:{element,event})=>{} | -
| doDragLeave | 拖拽元素离开目标元素的时候触发的事件 | (nzOpen:boolean)=>{} | - |
| doDragOver  | 拖拽元素在目标元素上移动的时候触发的事件 | (inputValue:string)=>{} | - |
| doDrop | 拖拽元素进入目标元素上，同时鼠标松开的时候触发的事件 | (inputValue:string)=>{} | - |


### 在`sxzq-drag`,`sxzq-drop`指令基础上封装的其它拖拽功能指令

`sxzq-drag-drop-replace`: 此指令增加到任意元素即可赋予这些任意元素之间可拖动互换位置，列如拖动排序，拖动布局

```html
  <any-tag
    sxzq-drag sxzq-drop sxzq-drag-drop-replace>
  </any-tag>
```
