/**
 * Created by Administrator on 2018/4/12.
 */
export const MENUS = [
  { name: '快速上手', type: "link", url: "detail/quickstart" },
  {
    name: '教程',
    type: "button",
    expand: false,
    subMenu: [
      { name: '简介', type: "link", url: "detail/tutorial" },
      { name: '英雄编辑器', type: "link", url: "detail/toh-pt1" },
      { name: '主从结构', type: "link", url: "detail/toh-pt2" },
      { name: '多个组件', type: "link", url: "detail/toh-pt3" },
      { name: '服务', type: "link", url: "detail/toh-pt4" },
      { name: '路由', type: "link", url: "detail/toh-pt5" },
      { name: 'HTTP', type: "link", url: "detail/toh-pt6" },
    ]
  },
  {
    name: '核心知识',
    type: "button",
    expand: false,
    subMenu: [
      { name: '架构', type: "link", url: "detail/architecture" },
      {
        name: '模板与数据绑定',
        type: "button",
        expand: false,
        subMenu: [
          { name: '显示数据', type: "link", url: "detail/displaying-data" },
          { name: '模板语法', type: "link", url: "detail/template-syntax" },
          { name: '生命周期钩子', type: "link", url: "detail/lifecycle-hooks" },
          { name: '组件交互', type: "link", url: "detail/component-interaction" },
          { name: '组件样式', type: "link", url: "detail/component-styles" },
          { name: '动态组件', type: "link", url: "detail/dynamic-component-loader" },
          { name: '属性型指令', type: "link", url: "detail/attribute-directives" },
          { name: '结构型指令', type: "link", url: "detail/structural-directives" },
          { name: '管道', type: "link", url: "detail/pipes" },
          { name: '动画', type: "link", url: "detail/animations",
            subMenu: [
              { name: '用户输入', type: "link", url: "detail/user-input",
                subMenu: [
                  { name: 'NgModule', type: "link", url: "detail/ngmodule",
                    subMenu: [
                      { name: '依赖注入', type: "link", url: "detail/dependency-injection" },
                      { name: '多级注入器', type: "link", url: "detail/hierarchical-dependency-injection" },
                      { name: 'DI 实例技巧', type: "link", url: "detail/dependency-injection-in-action" }
                    ]
                  },
                  { name: 'NgModule 常见问题', type: "link", url: "detail/ngmodule-faq" }
                ]
              },
              { name: '模板驱动表单', type: "link", url: "detail/forms" },
              { name: '表单验证', type: "link", url: "detail/form-validation" },
              { name: '响应式表单', type: "link", url: "detail/reactive-forms" },
              { name: '动态表单', type: "link", url: "detail/dynamic-form" }
            ]
          },
        ]
      },
      {
        name: '表单',
        type: "button",
        expand: false,
        subMenu: [
          { name: '用户输入', type: "link", url: "detail/user-input" },
          { name: '模板驱动表单', type: "link", url: "detail/forms" },
          { name: '表单验证', type: "link", url: "detail/form-validation" },
          { name: '响应式表单', type: "link", url: "detail/reactive-forms" },
          { name: '动态表单', type: "link", url: "detail/dynamic-form" }
        ]
      },
      { name: '引用启动', type: "link", url: "detail/bootstrapping" },
      {
        name: 'NgModules',
        type: "button",
        expand: false,
        subMenu: [
          { name: 'NgModule', type: "link", url: "detail/ngmodule" },
          { name: 'NgModule 常见问题', type: "link", url: "detail/ngmodule-faq" }
        ]
      },
      {
        name: '依赖注入',
        type: "button",
        expand: false,
        subMenu: [
          { name: '依赖注入', type: "link", url: "detail/dependency-injection" },
          { name: '多级注入器', type: "link", url: "detail/hierarchical-dependency-injection" },
          { name: 'DI 实例技巧', type: "link", url: "detail/dependency-injection-in-action" }
        ]
      },
      { name: 'HttpClient', type: "link", url: "detail/http" },
      { name: '路由与导航', type: "link", url: "detail/router" },
      { name: '测试', type: "link", url: "detail/testing" },
      { name: '速查表', type: "link", url: "detail/cheatsheet" },
    ]
  },
  {
    name: '其它技术',
    type: "button",
    expand: false,
    subMenu: [
      { name: '国际化（i18n）', type: "link", url: "detail/i18n" },
      { name: '语言服务', type: "link", url: "detail/language-service" },
      { name: '安全', type: "link", url: "detail/security" },
      {
        name: '环境',
        type: "button",
        expand: false,
        subMenu: [
          { name: '搭建', type: "link", url: "detail/setup" },
          { name: '搭建', type: "link", url: "detail/setup-systemjs-anatomy" },
          { name: '浏览', type: "link", url: "detail/browser-support" },
          { name: 'npm 包', type: "link", url: "detail/npm-packages" },
          { name: 'Typ', type: "link", url: "detail/typescript-configuration" },
          { name: '预', type: "link", url: "detail/aot-compiler" },
          { name: '部署', type: "link", url: "detail/deployment" }
        ]
      }
    ]
  },
  { name: 'API 参考手册', type: "link", url: "detail/api" }
];
export const zNodes = [
  { id: 1, pId: 0, name: "父节点1 - 展开", open: true },
  { id: 11, pId: 1, name: "父节点11 - 折叠" },
  { id: 111, pId: 11, name: "叶子节点111" },
  { id: 112, pId: 11, name: "叶子节点112" },
  { id: 113, pId: 11, name: "叶子节点113" },
  { id: 114, pId: 11, name: "叶子节点114" },
  { id: 12, pId: 1, name: "父节点12 - 折叠" },
  { id: 121, pId: 12, name: "叶子节点121" },
  { id: 122, pId: 12, name: "叶子节点122" },
  { id: 123, pId: 12, name: "叶子节点123" },
  { id: 124, pId: 12, name: "叶子节点124" },
  { id: 13, pId: 1, name: "父节点13 - 没有子节点", isParent: true },
  { id: 2, pId: 0, name: "父节点2 - 折叠" },
  { id: 21, pId: 2, name: "父节点21 - 展开", open: true },
  { id: 211, pId: 21, name: "叶子节点211" },
  { id: 212, pId: 21, name: "叶子节点212" },
  { id: 213, pId: 21, name: "叶子节点213" },
  { id: 214, pId: 21, name: "叶子节点214" },
  { id: 22, pId: 2, name: "父节点22 - 折叠" },
  { id: 221, pId: 22, name: "叶子节点221" },
  { id: 222, pId: 22, name: "叶子节点222" },
  { id: 223, pId: 22, name: "叶子节点223" },
  { id: 224, pId: 22, name: "叶子节点224" },
  { id: 23, pId: 2, name: "父节点23 - 折叠" },
  { id: 231, pId: 23, name: "叶子节点231" },
  { id: 232, pId: 23, name: "叶子节点232" },
  { id: 233, pId: 23, name: "叶子节点233" },
  { id: 234, pId: 23, name: "叶子节点234" },
  { id: 3, pId: 0, name: "父节点3 - 没有子节点", isParent: true }
];