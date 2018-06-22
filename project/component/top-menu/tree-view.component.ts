
import * as MENUS from './mock';

const menu = MENUS.MENUS;

import {Component, Input, Output, EventEmitter, AfterContentInit, ElementRef, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-tree-view',
  template: `
    <ul nz-menu style="width: 240px;" [nzMode]="'inline'">
      <ng-container *ngFor="let itemChild of menu">
        <app-tree-item  (selected)="getSelectedMenu($event)" [item]="itemChild"></app-tree-item>
      </ng-container>
    </ul>
  `,
  styles  : []
})
export class TreeViewComponent {
  menu = menu;

  getSelectedMenu(selectedMenu) {
    console.log(selectedMenu);
  }
}

@Component({
  selector: 'app-tree-item',
  template: `
    <li nz-submenu *ngIf="!isLeaf();else elseBlock" >
    <span title>{{item.name}}<span (click)="addMenu($event)">+++</span></span>
    <ul>
      <app-tree-item *ngFor="let itemChild of item.subMenu" [item]="itemChild"
                     (selected)="selectedItem($event)"
                     (remove)="removeMenu($event)"></app-tree-item>
    </ul>
    </li>
    <ng-template #elseBlock>
      <ng-container *ngIf="item.name!='';else addMenuTemplate">
        <li nz-menu-item (click)="onSelectedItem($event,item)">{{item.name}} <span (click)="delMenu($event,item)">---</span></li>
      </ng-container>
      <ng-template #addMenuTemplate>
        <input nz-menu-item type="text" [value]="item.name">
      </ng-template>
    </ng-template>
    `,
  styles  : []
})
export class TreeViewItemComponent implements AfterContentInit {


  @Input()
  item: any;

  @Output()
  remove: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  selected: EventEmitter<any> = new EventEmitter<any>();

  menu = menu;

  menuObj = {
    name: '',
    type: 'link',
    url: 'detail/architecture'
  };

  constructor(private ele: ElementRef) {

  }

  isLeaf = function() {
    return !this.item.subMenu || !this.item.subMenu.length;
  };

  addMenu(event) {
    event.stopPropagation();
    this.item.subMenu.push(this.menuObj);
  }

  delMenu(event, item) {
    event.stopPropagation();
    this.remove.emit(item);
  }

  onSelectedItem(event, item) {
    event.stopPropagation();
    console.log('this selected');
    console.log(item);
    this.selected.emit(item);
  }
  selectedItem(item) {
    this.selected.emit(item);
  }

  removeMenu(item) {
    debugger;
    const index = this.item.subMenu.indexOf(item);
    this.item.subMenu.splice(index, 1);
  }

  ngAfterContentInit(): void {

  }
}
