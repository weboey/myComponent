
import * as MENUS from './mock';

const menu = MENUS.MENUS;

import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-dropdown',
  template: `
    <div class="header-menu">
      <nz-dropdown *ngFor="let item of menu">
        <a class="ant-dropdown-link menu-font-style" nz-dropdown>
          {{item.name}} <i class="anticon anticon-caret-down"  style="margin-left: 10px;font-size: 12px;"></i>
        </a>
        <ul nz-menu class="menu-child-body">
          <ng-container *ngFor="let itemChild of item?.subMenu" >
            <ng-container *ngIf="itemChild?.subMenu?.length;else elseBlock">
              <li nz-submenu class="menu-child-style">
                <span title>{{itemChild.name}}</span>
                <ul class="menu-child-body">
                  <ng-container *ngFor="let itemChildLast of itemChild?.subMenu">
                    <li nz-submenu *ngIf="itemChildLast?.subMenu?.length;else elseBlock2" class="menu-child-style">
                      <span title>{{itemChildLast.name}}</span>
                      <ul class="menu-child-body">
                        <li nz-menu-item  *ngFor="let itemChildLast2 of itemChildLast?.subMenu"
                            (click)="hrefHandle(itemChildLast2.url)" class="menu-child-style">
                          {{itemChildLast2.name}}
                        </li>
                      </ul>
                    </li>
                    <ng-template #elseBlock2>
                      <li nz-menu-item (click)="hrefHandle(itemChildLast.url)" class="menu-child-style">{{itemChildLast.name}}</li>
                    </ng-template>
                  </ng-container>
                </ul>
              </li>
            </ng-container>
            <ng-template #elseBlock>
              <li nz-menu-item (click)="hrefHandle(itemChild.url)" class="menu-child-style">{{itemChild.name}}</li>
            </ng-template>
          </ng-container>
        </ul>
      </nz-dropdown>
    </div>
    `,
  styleUrls: ['./dropdown.component.scss']
})
export class DropDownComponent {
  menu = menu;


  hrefHandle(url: string) {
    console.log(url);
  }
}
