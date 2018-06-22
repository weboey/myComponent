import {Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseMenuComponent} from '../base-menu/base-menu.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-menu',
  template: `
    <div class="top-menu-container">
      <nz-dropdown *ngFor="let item of data">
        <a class="ant-dropdown-link head-menu" nz-dropdown (click)="hrefHandler(item)">
          <i class="img-icon img-{{item.iconUrl}}"></i>
          {{item.name}} <i class="anticon anticon-caret-down"  style="margin-left: 10px;font-size: 12px;"></i>
        </a>
        <ul nz-menu class="menu-child-body">
          <app-tree-item *ngFor="let itemChild of item[children]" [item]="itemChild" (leafClick)="hrefNavigate($event)"></app-tree-item>
        </ul>
      </nz-dropdown>
    </div>`,
  styleUrls: ['./top-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopMenuComponent extends BaseMenuComponent {
  // @Input()
  children = 'children';

  _data: Array<any>;
  @Input()
  get data(): Array<any> {
    return this._data;
  }
  set data(value: Array<any>) {
    this._data = this.transformToTreeFormat(value);
    this._data.unshift({name:'首页', iconUrl:'home', url:'/home', menu_id:'0', up_id:'0'});
  }

  constructor(public router: Router) {
    super(router);
  }

  transformToTreeFormat(sNodes: Array<any>) {
    const  key = 'menu_id';
    const  parentKey = 'up_id';
    const childKey = this.children;
    if (!key || !sNodes || !sNodes.length) {
      return [];
    }
    const result = [];
    const tmpMap = [];
    sNodes.forEach(node => {
      tmpMap[node[key]] = node;
    });
    sNodes.forEach(node => {
      if (tmpMap[node[parentKey]] && node[key] !== node[parentKey]) {
        if (!tmpMap[node[parentKey]][childKey]) {
          tmpMap[node[parentKey]][childKey] = [];
        }
        tmpMap[node[parentKey]][childKey].push(node);
      } else {
        result.push(node);
      }
    });
    return result;
  }

  hrefHandler(nav) {
    if (nav.name === '首页') {
      this.hrefNavigate(nav);
    }
  }
}
