
## Description

投标，资金......等多个系统共同引用此头部导航组件。

## API

```html
  <app-header-nav [currentUser]="myUser"  [data]="menu"></app-header-nav>
```

### app-header-nav

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| currentUser | 当前登陆用户 | string |-
| data | 菜单列表 | Array | -

#### 简单模式

可以不输入任何数据,组件内部会自动获取菜单列表和当前登录用户
```html
  <app-header-nav></app-header-nav>
```

### HeaderNavService

`HeaderNavService` 服务用于外部和`app-header-nav`组件之间进行通信，提供的方法如下表所示：

| 方法 | 说明 | 参数 | 默认值 |
| --- | --- | --- | --- |
| sendMenuChange | 当导航菜单发生变化时调用此方法，通知组件更新菜单 | - |-
| sendUserChange | 当登录用户的信息变化时调用此方法，通知组件更新用户信息 | - |-
| sendMessage | 当有未读信息时调用此方法，通知组件显示有未读信息 | - |-
