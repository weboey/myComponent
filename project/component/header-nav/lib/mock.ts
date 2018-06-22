

// id,
// open,pId==0

// pId,
// name,
// url,
// isConfigurable, 可配置系统

// isHomeIcon,boolean:显示在首页配置图标区域
// homeIconStatus,boolean:显示在首页配置图标区域,,显示或隐藏
// isMenuTree:显示在头部导航区域
// icon:string - 菜单图标

// 权限控制???


// user id


export const MENUS_SIMPLE2 = [
  {id: 1, pId: 0, name: '交易管理', type: 'submenu', open: true, visible: true},
  {id: 2, pId: 0, name: '资金头寸', type: 'submenu', open: true, visible: true},
  {id: 3, pId: 0, name: '投标系统', type: 'submenu', open: true, visible: true},
  {id: 4, pId: 0, name: '系统管理', type: 'submenu', open: true, visible: true},

  {id: 5, pId: 1, name: '交易申请', type: 'submenu'},
  {id: 6, pId: 1, name: '指令单',   type: 'submenu'},
  {id: 7, pId: 1, name: '交易执行', type: 'link'},
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

  {id: 23, pId: 5, name: '银行间', type: 'submenu'},
  {id: 24, pId: 5, name: '交易所', type: 'submenu'},
  {id: 25, pId: 5, name: '其他',   type: 'submenu'},
  {id: 26, pId: 6, name: '银行间', type: 'submenu'},
  {id: 27, pId: 6, name: '交易所', type: 'submenu'},
  {id: 28, pId: 6, name: '其他',   type: 'submenu'},

  {id: 29, pId: 8, name: '上市管理', type: 'link', url: 'detail/glossary'},
  {id: 30, pId: 8, name: '成交核对', type: 'link', url: 'detail/glossary'},

  {id: 31, pId: 9, name: '动态库存', type: 'link', url: 'detail/glossary'},
  {id: 32, pId: 9, name: '自营概览', type: 'link', url: 'detail/glossary'},
  {id: 33, pId: 9, name: '投顾概览', type: 'link', url: 'detail/glossary'},
  {id: 34, pId: 9, name: 'BooK',    type: 'link', url: 'detail/glossary'},
  {id: 35, pId: 9, name: 'BooK流水', type: 'link', url: 'detail/glossary'},
  {id: 36, pId: 9, name: '内部划转', type: 'link', url: 'detail/glossary'},
  {id: 37, pId: 9, name: '划转记录', type: 'link', url: 'detail/glossary'},

  {id: 38, pId: 23, name: '现券交易', type: 'link', url: 'detail/glossary'},
  {id: 39, pId: 23, name: '+0+1', type: 'link', url: 'detail/glossary'},
  {id: 40, pId: 23, name: 'Xrepo', type: 'link', url: 'detail/glossary'},
  {id: 41, pId: 23, name: '买断', type: 'link', url: 'detail/glossary'},
  {id: 42, pId: 23, name: '质押回购', type: 'link', url: 'detail/glossary'},
  {id: 43, pId: 23, name: '信用拆借', type: 'link', url: 'detail/glossary'},
  {id: 44, pId: 23, name: '借贷', type: 'link', url: 'detail/glossary'},
  {id: 45, pId: 23, name: '借贷换券', type: 'link', url: 'detail/glossary'},
  {id: 46, pId: 23, name: '一级买入', type: 'link', url: 'detail/glossary'},

  {id: 47, pId: 24, name: '现券交易', type: 'link', url: 'detail/glossary'},
  {id: 48, pId: 24, name: '质押回购', type: 'link', url: 'detail/glossary'},
  {id: 49, pId: 24, name: '质押换券', type: 'link', url: 'detail/glossary'},
  {id: 50, pId: 24, name: '协议回购', type: 'link', url: 'detail/glossary'},
  {id: 51, pId: 24, name: '协议续作', type: 'link', url: 'detail/glossary'},
  {id: 52, pId: 24, name: '协议提前', type: 'link', url: 'detail/glossary'},
  {id: 53, pId: 24, name: '协议换券', type: 'link', url: 'detail/glossary'},
  {id: 54, pId: 24, name: '拆出', type: 'link', url: 'detail/glossary'},
  {id: 55, pId: 24, name: '券出入库', type: 'link', url: 'detail/glossary'},
  {id: 56, pId: 24, name: '一级买入', type: 'link', url: 'detail/glossary'},

  {id: 57, pId: 25, name: '转托管', type: 'link', url: 'detail/glossary'},

  {id: 58, pId: 26, name: '现券交易', type: 'link', url: 'detail/glossary'},
  {id: 59, pId: 26, name: '+0+1', type: 'link', url: 'detail/glossary'},
  {id: 60, pId: 26, name: 'Xrepo', type: 'link', url: 'detail/glossary'},
  {id: 61, pId: 26, name: '买断', type: 'link', url: 'detail/glossary'},
  {id: 62, pId: 26, name: '质押回购', type: 'link', url: 'detail/glossary'},
  {id: 63, pId: 26, name: '信用拆借', type: 'link', url: 'detail/glossary'},
  {id: 64, pId: 26, name: '借贷', type: 'link', url: 'detail/glossary'},
  {id: 65, pId: 26, name: '借贷换券', type: 'link', url: 'detail/glossary'},
  {id: 66, pId: 26, name: '一级买入', type: 'link', url: 'detail/glossary'},

  {id: 67, pId: 27, name: '现券交易', type: 'link', url: 'detail/glossary'},
  {id: 68, pId: 27, name: '质押回购', type: 'link', url: 'detail/glossary'},
  {id: 69, pId: 27, name: '质押换券', type: 'link', url: 'detail/glossary'},
  {id: 70, pId: 27, name: '协议回购', type: 'link', url: 'detail/glossary'},
  {id: 71, pId: 27, name: '协议续作', type: 'link', url: 'detail/glossary'},
  {id: 72, pId: 27, name: '协议提前', type: 'link', url: 'detail/glossary'},
  {id: 73, pId: 27, name: '协议换券', type: 'link', url: 'detail/glossary'},
  {id: 74, pId: 27, name: '拆出', type: 'link',     url: 'detail/glossary'},
  {id: 75, pId: 27, name: '券出入库', type: 'link', url: 'detail/glossary'},
  {id: 76, pId: 27, name: '一级买入', type: 'link', url: 'detail/glossary'},

  {id: 77, pId: 28, name: '转托管', type: 'link', url: 'detail/glossary'},
  {id: 78, pId: 28, name: '指令单查询', type: 'link', url: 'detail/glossary'},

  {id: 79, pId: 14, name: '总进总出', type: 'link', url: 'detail/glossary'},
  {id: 80, pId: 14, name: '对应进出', type: 'link', url: 'detail/glossary'},
  {id: 81, pId: 14, name: '中标汇总', type: 'link', url: 'detail/glossary'},

  {id: 82, pId: 16, name: '投标汇总', type: 'link', url: 'detail/glossary'},
  {id: 83, pId: 16, name: '中标汇总', type: 'link', url: 'detail/glossary'},
  {id: 84, pId: 16, name: '投标详情', type: 'link', url: 'detail/glossary'}
];
