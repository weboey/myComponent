
export const MENUS = [
  {
    id: 1,
    name: '交易管理',
    type: "button",
    expand: false,
    subMenu: [
      {
        id: 11,
        pid: 1,
        name: '交易申请',
        type: 'link',
        subMenu: [
          {
            id: 111,
            pid: 11,
            name: '银行间', type: "link",
            subMenu: [
              { id: 1111, pid: 111, name: '现券交易', type: "link"},
              { id: 1112, pid: 111, name: '+0+1', type: "link"},
              { id: 1113, pid: 111, name: 'Xrepo', type: "link"},
              { id: 1114, pid: 111, name: '质押回购', type: "link"},
              { id: 1115, pid: 111, name: '信用拆借', type: "link", url: "detail/architecture" },
              { id: 1116, pid: 111, name: '借贷', type: "link", url: "detail/architecture" },
              { id: 1117, pid: 111, name: '借贷换券', type: "link", url: "detail/architecture" },
              { id: 1118, pid: 111, name: '一级买入', type: "link", url: "detail/architecture" }
            ]
          },
          { name: '交易所', type: "link",
            subMenu: [
              { name: '现券交易', type: "link", url: "detail/architecture" },
              { name: '质押回购', type: "link", url: "detail/architecture" },
              { name: '质押换券', type: "link", url: "detail/architecture" },
              { name: '协议回购', type: "link", url: "detail/architecture" },
              { name: '协议续作', type: "link", url: "detail/architecture" },
              { name: '协议提前', type: "link", url: "detail/architecture" },
              { name: '协回换券', type: "link", url: "detail/architecture" },
              { name: '拆出', type: "link", url: "detail/architecture" },
              { name: '券出入库', type: "link", url: "detail/architecture" },
              { name: '一级买入', type: "link", url: "detail/architecture" }
            ]
          },
          { name: '其它', type: "link",
            subMenu: [
              { name: '转托管', type: "link", url: "detail/architecture" },
            ]
          },
        ]
      },
      { name: '指令单', type: "link",
        subMenu: [
          { name: '银行间', type: "link",
            subMenu: [
              { name: '现券交易', type: "link", url: "detail/architecture" },
              { name: '+0+1', type: "link", url: "detail/architecture" },
              { name: 'Xrepo', type: "link", url: "detail/architecture" },
              { name: '质押回购', type: "link", url: "detail/architecture" },
              { name: '信用拆借', type: "link", url: "detail/architecture" },
              { name: '借贷', type: "link", url: "detail/architecture" },
              { name: '借贷换券', type: "link", url: "detail/architecture" },
              { name: '一级买入', type: "link", url: "detail/architecture" }
            ]
          },
          { name: '交易所', type: "link",
            subMenu: [
              { name: '现券交易', type: "link", url: "detail/architecture" },
              { name: '质押回购', type: "link", url: "detail/architecture" },
              { name: '质押换券', type: "link", url: "detail/architecture" },
              { name: '协议回购', type: "link", url: "detail/architecture" },
              { name: '协议续作', type: "link", url: "detail/architecture" },
              { name: '协议提前', type: "link", url: "detail/architecture" },
              { name: '协回换券', type: "link", url: "detail/architecture" },
              { name: '拆出', type: "link", url: "detail/architecture" },
              { name: '券出入库', type: "link", url: "detail/architecture" },
              { name: '一级买入', type: "link", url: "detail/architecture" }
            ]
          },
          { name: '其它', type: "link",
            subMenu: [
              { name: '转托管', type: "link", url: "detail/architecture" },
              { name: '指令单查询', type: "link", url: "detail/architecture" },
            ]
          },
        ]
      },
      { name: '交易执行', type: "link",},
      { name: '其他', type: "link",
        subMenu: [
          { name: '上市管理', type: "link", url: "detail/architecture" },
          { name: '成交核对', type: "link", url: "detail/architecture" }
        ]
      },
      { name: '现券管理', type: "link",
        subMenu: [
          { name: '动态库存', type: "link", url: "detail/architecture" },
          { name: '自营概览', type: "link", url: "detail/architecture" },
          { name: 'BOOK', type: "link", url: "detail/architecture" },
          { name: 'BOOK流水', type: "link", url: "detail/architecture" },
          { name: '内部划转', type: "link", url: "detail/architecture" },
          { name: '划转记录', type: "link", url: "detail/architecture" }
        ]
      }
    ]
  },
  {
    name: '资金头寸',
    type: "button",
    expand: false,
    subMenu: [
      { name: '今日到期', type: "link", url: "detail/architecture" },
      { name: '财务拆借', type: "link", url: "detail/architecture" },
      { name: '总头寸表', type: "link", url: "detail/architecture" },
    ]
  },
  {
    name: '投标系统',
    type: "button",
    expand: false,
    subMenu: [
      { name: '新发债券', type: "link", url: "detail/i18n" },
      { name: '投标管理', type: "link", url: "detail/language-service" },
      { name: '资金清单', type: "link", url: "detail/security" },
      { name: '汇总统计', type: "link",
        subMenu: [
          { name: '投标汇总', type: "link", url: "detail/i18n" },
          { name: '中标汇总', type: "link", url: "detail/i18n" },
          { name: '投标详情', type: "link", url: "detail/i18n" }
        ]
      },
    ]
  },
  {
    name: '系统管理',
    type: "button",
    expand: false,
    subMenu: [
      { name: '用户管理', type: "link", url: "detail/i18n" },
      { name: '角色管理', type: "link", url: "detail/language-service" },
      { name: '部门管理', type: "link", url: "detail/security" },
      { name: '消息管理', type: "link", url: "detail/visual-studio-2015" },
      { name: '机构管理', type: "link", url: "detail/styleguide" },
      { name: '接口配置', type: "link", url: "detail/glossary" }
    ]
  }
];
export const MENUS_SIMPLE = [ // id,pId,name,type,url,open
  {id: 1, pId: 0, name: '交易管理', type: 'submenu', open: true},
  {id: 2, pId: 0, name: '资金头寸', type: 'submenu', open: true},
  {id: 3, pId: 0, name: '投标系统', type: 'submenu', open: true},
  {id: 4, pId: 0, name: '系统管理', type: 'submenu', open: true},
  {id: 5, pId: 1, name: '交易申请', type: 'submenu'},
  {id: 6, pId: 1, name: '指令单',   type: 'submenu'},
  {id: 7, pId: 1, name: '交易执行', type: 'submenu'},
  {id: 8, pId: 1, name: '其它',     type: 'submenu'},
  {id: 9, pId: 1, name: '现券管理', type: 'submenu'},
  {id: 10, pId: 2, name: '今日到期', type: 'link', url: 'detail/architecture'},
  {id: 11, pId: 2, name: '财务拆借',   type: 'link', url: 'detail/architecture'},
  {id: 12, pId: 2, name: '总头寸表', type: 'link', url: 'detail/architecture'},
  {id: 13, pId: 3, name: '新发债券', type: 'link', url: 'detail/i18n'},
  {id: 14, pId: 3, name: '投标管理', type: 'link', url: 'detail/language-service'},
  {id: 15, pId: 3, name: '资金清单', type: 'link', url: 'detail/security'},
  {id: 16, pId: 3, name: '汇总统计', type: 'link', url: 'detail/security'},
  {id: 17, pId: 4, name: '用户管理', type: 'link', url: 'detail/i18n'},
  {id: 18, pId: 4, name: '角色管理', type: 'link', url: 'detail/language-service'},
  {id: 19, pId: 4, name: '部门管理', type: 'link', url: 'detail/security'},
  {id: 20, pId: 4, name: '消息管理', type: 'link', url: 'detail/visual-studio-2015'},
  {id: 21, pId: 4, name: '机构管理', type: 'link', url: 'detail/styleguide'},
  {id: 22, pId: 4, name: '接口配置', type: 'link', url: 'detail/glossary'},
  {id: 23, pId: 5, name: '银行间', type: 'link'},
  {id: 24, pId: 5, name: '交易所', type: 'link'},
  {id: 25, pId: 5, name: '其他',   type: 'link'}
];

export class MenuData {
  data = [ // id,pId,name,type,url,open
    {id: 1, pId: 0, name: '交易管理', type: 'submenu', open: true},
    {id: 2, pId: 0, name: '资金头寸', type: 'submenu', open: true},
    {id: 3, pId: 0, name: '投标系统', type: 'submenu', open: true},
    {id: 4, pId: 0, name: '系统管理', type: 'submenu', open: true},
    {id: 5, pId: 1, name: '交易申请', type: 'submenu'},
    {id: 6, pId: 1, name: '指令单',   type: 'submenu'},
    {id: 7, pId: 1, name: '交易执行', type: 'submenu'},
    {id: 8, pId: 1, name: '其它',     type: 'submenu'},
    {id: 9, pId: 1, name: '现券管理', type: 'submenu'},
    {id: 10, pId: 2, name: '今日到期', type: 'link', url: 'detail/architecture'},
    {id: 11, pId: 2, name: '财务拆借',   type: 'link', url: 'detail/architecture'},
    {id: 12, pId: 2, name: '总头寸表', type: 'link', url: 'detail/architecture'},
    {id: 13, pId: 3, name: '新发债券', type: 'link', url: 'detail/i18n'},
    {id: 14, pId: 3, name: '投标管理', type: 'link', url: 'detail/language-service'},
    {id: 15, pId: 3, name: '资金清单', type: 'link', url: 'detail/security'},
    {id: 16, pId: 3, name: '汇总统计', type: 'link', url: 'detail/security'},
    {id: 17, pId: 4, name: '用户管理', type: 'link', url: 'detail/i18n'},
    {id: 18, pId: 4, name: '角色管理', type: 'link', url: 'detail/language-service'},
    {id: 19, pId: 4, name: '部门管理', type: 'link', url: 'detail/security'},
    {id: 20, pId: 4, name: '消息管理', type: 'link', url: 'detail/visual-studio-2015'},
    {id: 21, pId: 4, name: '机构管理', type: 'link', url: 'detail/styleguide'},
    {id: 22, pId: 4, name: '接口配置', type: 'link', url: 'detail/glossary'},
    {id: 23, pId: 5, name: '银行间', type: 'link'},
    {id: 24, pId: 5, name: '交易所', type: 'link'},
    {id: 25, pId: 5, name: '其他',   type: 'link'}
  ];
}


export const zNodes = [
  { id: 1, pId: 0, name: "父节点1 - 展开", open: true},
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
