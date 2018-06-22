import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tree-item',
  template: `
    <ng-container *ngIf="!isLeaf();else leafNode">
      <li nz-submenu class="menu-child-style">
      <span title>{{item.name}}</span>
      <ul class="menu-child-body">
        <app-tree-item *ngFor="let itemChild of item.children" (leafClick)="doLeafClick($event)" [item]="itemChild"></app-tree-item>
      </ul>
    </li>
    </ng-container>
    <ng-template #leafNode>
      <li nz-menu-item class="menu-child-style" (click)="onClickHandle($event, item)">{{item.name}}</li>
    </ng-template>
    `
})
export class TreeViewItemComponent {
  @Input()
  item: any;
  @Output()
  leafClick: EventEmitter<any> = new EventEmitter<any>();

  isLeaf() {
    return !this.item.children || !this.item.children.length;
  }

  onClickHandle(event, leafNode) {
    event.stopPropagation();
    this.leafClick.emit(leafNode);
  }
  doLeafClick(event) {
    this.leafClick.emit(event);
  }
}
