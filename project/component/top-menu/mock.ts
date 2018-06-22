
export const MENUS = [
  {
    name: '交易管理',
    type: "button",
    expand: false,
    subMenu: [
      { name: '交易申请',
        type: 'link',
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
