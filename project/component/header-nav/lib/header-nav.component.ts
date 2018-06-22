import {Component, Input, OnInit} from '@angular/core';
import {HeaderNavService} from './service/header-nav.service';

declare let $: any;

@Component({
  selector: 'sxzq-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  @Input()
  currentUser: object;
  @Input()
  data: Array<any>;

  constructor(private headerNavService: HeaderNavService) {}

  ngOnInit() {
    // 如果没有传入数据则主动获取
    if (!this.data) {
      this._initMenuData();
    }
    if (!this.currentUser) {
      this._initUserData();
    }

    this.headerNavService.menu$.subscribe(() => {
        this._initMenuData();
    });
    this.headerNavService.user$.subscribe(() => {
        this._initUserData();
    });

    // 当页面关闭时关闭book子页面
    window.onunload = function () {
      if (window['windowObject']) {
        window['windowObject'].close();
      }
    };
  }

  _initMenuData() {
    this.headerNavService.getMenuData().subscribe(data => {
       this.data = data;
    });
  }

  _initUserData() {
    this.headerNavService.getUserLocal().subscribe(userInfo => {
      this.currentUser = userInfo;
    });
  }
}
