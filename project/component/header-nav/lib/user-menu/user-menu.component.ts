import { Component, OnInit, Input } from '@angular/core';
import {BaseMenuComponent} from '../base-menu/base-menu.component';
import {Router} from '@angular/router';
import {HeaderNavService} from '../service/header-nav.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent extends  BaseMenuComponent implements OnInit {

  _currentUser = {};
  @Input()
  set currentUser(user: object) {
    if (!user) {
      return;
    }
    this._currentUser = user;
  }
  get currentUser(): object {
      return this._currentUser;
  }

  hasMsg: boolean;

  constructor(public router: Router, private headerNavService: HeaderNavService) {
    super(router);
  }

  ngOnInit() {
    this.headerNavService.msg$.subscribe( (hasMsg: boolean) => {
      this.hasMsg = hasMsg;
    });
  }
  /*退出登录*/
  loginOut() {
    this.headerNavService.loginOut();
  }

}
