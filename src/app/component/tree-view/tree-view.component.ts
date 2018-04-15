import { Component, OnInit, Input } from '@angular/core';

import * as MENUS from "../mock"
const menu=MENUS.MENUS;

@Component({
  selector: 'app-tree-view',
  template: `
      <ul nz-menu style="width: 240px;" [nzMode]="'inline'">
        <app-tree-item *ngFor="let itemChild of menu" [item]="itemChild"></app-tree-item>
      </ul>
    `,
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {
  menu = menu;

}

@Component({
  selector: 'app-tree-item',
  template: `
    <ng-container *ngIf="!isLeaf();else elseBlock">
      <li nz-submenu >
      <span title>{{item.name}}</span>
      <ul>
        <app-tree-item *ngFor="let itemChild of item.subMenu" [item]="itemChild"></app-tree-item>
      </ul>
    </li>
    </ng-container>
    <ng-template #elseBlock>
      <li nz-menu-item>{{item.name}}</li>
    </ng-template>
    `,
  styles  : []
})
export class TreeViewItemComponent{

  @Input()
  item : any;

  menu = menu;

  isLeaf = function(){
    return !this.item.subMenu || !this.item.subMenu.length;
  };
}
