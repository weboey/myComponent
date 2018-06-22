import {Component, OnInit} from '@angular/core';
import {BaseMenuComponent} from '../base-menu/base-menu.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-site-log',
 template: `<div class="header-title">
    <a class="project-title" (click)="hrefNavigate('/home')">
      固收业务系统<span style="color:red" *ngIf="systemIp != '192.168.1.233'">-测试环境</span>
    </a>
  </div>`,
  styles: [`
    .header-title .project-title{
      color: #ff900d;;
      font-size: 18px;
      letter-spacing: 0px;
      line-height: 46px;
      cursor: pointer;
      }
  `]
})
export class SiteLogComponent extends BaseMenuComponent implements OnInit{
  // 当前服务器ip
  public systemIp: string;
  constructor(public router: Router) {
    super(router);
  }
  ngOnInit(): void {
    this.systemIp = window.location.host;
  }
}
