import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import 'ztree';
declare var $: any;
import * as MENUS from './mock';
const menu = MENUS.MENUS;
const zNodes =  MENUS.MENUS_SIMPLE;  // || MENUS.zNodes;

@Component({
  selector: 'app-ztree-demo',
  templateUrl: './ztree-demo.component.html',
  styleUrls: ['./ztree-demo.component.scss']
})

export class ZtreeDemoComponent implements OnInit {
  zTree: any;
  zNodes: any;
  newCount = 1;

  @ViewChild('inputMenuNameEle') inpMenuNameEleRef: ElementRef;

  selectedItem = {
    name: '',
    isParent: false,
    url: ''
  };
  setting = {
    view: {
      addHoverDom: this.addHoverDom.bind(this),
      removeHoverDom: this.removeHoverDom.bind(this),
      selectedMulti: false,
      showIcon: false,
      dblClickExpand: false,
      showLine: true
    },
    edit: {
      enable: true,
      editNameSelectAll: false,
      showRemoveBtn: true,
      showRenameBtn: false,
    },
    data: {
      // key: {
      //   children: 'subMenu'
      // },
      simpleData: {
        enable: true
      }
    },
    callback: {
      onClick: this.onClick.bind(this)
    }
  };

  constructor(private el: ElementRef) { }

  onClick(e, treeId, treeNode) {
    this.zTree.expandNode(treeNode);
    this.selectedItem = treeNode;
    this.inpMenuNameEleRef.nativeElement.focus();

  }

  addTreeRootNode() {
      // isParent = e.data.isParent,
      // nodes = zTree.getSelectedNodes()
      this.zTree.addNodes(null, {id: (100 + this.newCount), pId: 0, isParent: true, name: 'new node' + (this.newCount++)});
  }

  addHoverDom(treeId, treeNode) {
    const sObj = $('#' + treeNode.tId + '_span');
    if (treeNode.editNameFlag || $('#addBtn_' + treeNode.tId).length > 0) {
      return;
    }
    const addStr = '<span class="button add" id="addBtn_' + treeNode.tId
      + '" title="add node" onfocus="this.blur();"></span>';
    sObj.after(addStr);
    const btn = $('#addBtn_' + treeNode.tId);
    if (btn) {
      btn.bind('click', () => {
        this.zTree.addNodes(treeNode, {id: (100 + this.newCount), pId: treeNode.id, name: 'new node' + (this.newCount++)});
        return false;
      });
    }
  }

  removeHoverDom(treeId, treeNode) {
    $('#addBtn_' + treeNode.tId).unbind().remove();
  }

  ngOnInit() {
    this.zNodes = zNodes;
    this.zTree = $.fn.zTree.init($('#ztree'), this.setting, this.zNodes);
  }

  updateOriginDate( newData:Array<Object>) {
    if (!newData.length || !newData) {
      return;
    }
    // originData.forEach(item => {
    //  if (item['id'] === newItem['id'] ) {
    //    //Object.assign(item, newItem);
    //     this.shallowClone(item,newItem);
    //  }
    // });
    return newData.map(menuItem => {
      return this.shallowClone(menuItem);
    });
  }

  changeMenu() {
    this.zTree.updateNode(this.selectedItem);
  }
  saveMenuConfig() {
    const data = this.updateOriginDate(this.zTree.transformToArray(this.zTree.getNodes()));
    console.log(data);
  }
  shallowClone(o) {
    const obj = {};
    for ( const i in o) {
      if (['id', 'pId', 'type', 'name', 'url'].indexOf(i) >= 0 ) {
        obj[i] = o[i];
      }
    }
    return obj;
  }
}
