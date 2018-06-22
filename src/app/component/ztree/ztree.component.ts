import { Component, OnInit, ElementRef } from '@angular/core';
import 'ztree';
import * as MENUS from '../mock';
const menu = MENUS.MENUS;
const zNodes =  MENUS.zNodes;
declare var $: any;

class MenuModel {
  name: string;
  url: string;
}

@Component({
  selector: 'app-ztree.component',
  templateUrl: './ztree.component.html',
  styleUrls: ['./ztree.component.scss']
})


export class ZtreeComponent implements OnInit {
  zTree: any;
  // zNodes = zNodes;
   zNodes = menu;
  newCount = 1;
  selectedItem: MenuModel = {
    name:'',
    url:''
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
      key: {
        children: 'subMenu'
      }
      // simpleData: {
      //   enable: true
      // }
    },
    callback: {
      onClick: this.onClick.bind(this)
    }
  };

  constructor(private el: ElementRef) { }

  onClick(e,treeId, treeNode) {
    this.zTree.expandNode(treeNode);
    this.selectedItem = treeNode;
  }

  addHoverDom(treeId, treeNode) {
    var sObj = $("#" + treeNode.tId + "_span");
    if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
    var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
      + "' title='add node' onfocus='this.blur();'></span>";
    sObj.after(addStr);
    var btn = $("#addBtn_"+treeNode.tId);
    if (btn) btn.bind("click", ()=>{
      this.zTree.addNodes(treeNode, {id:(100 + this.newCount), pId:treeNode.id, name:"new node" + (this.newCount++)});
      return false;
    });
  };

  removeHoverDom(treeId, treeNode) {
    $("#addBtn_"+treeNode.tId).unbind().remove();
  };


  ngOnInit() {
    this.zTree = $.fn.zTree.init($("#ztree"),this.setting,this.zNodes);
  }


  updateOriginDate(originData:Array<any> , newData:Array<Object>) {
    if( !originData || !originData.length || !newData){
      return
    }
    //originData.forEach(item => {
    //  if (item['id'] === newItem['id'] ) {
    //    //Object.assign(item, newItem);
    //     this.shallowClone(item,newItem);
    //  }
    //})
    originData = newData.map(menuItem => {
      return this.shallowClone(menuItem)
    });
    return originData
  }

  changeMenu() {
    //this.selectedItem['name'] = 'weboey';
    this.zTree.updateNode(this.selectedItem);
  }
  saveMenuConfig() {
    //console.log(this.zTree.transformToArray(this.zTree.getNodes()));
    debugger;
    const d = this.zTree.transformToArray(this.zTree.getNodes());
    this.zNodes = this.updateOriginDate(this.zNodes, d);
    console.log(this.zNodes);
  }
  shallowClone(o) {
    const obj = {};
    for ( let i in o) {
      if(['id','pId','type','name','url'].indexOf(i)>=0){
        obj[i] = o[i];
      }
    }
    return obj;
  }
}
