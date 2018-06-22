import { Component, OnInit, OnDestroy } from '@angular/core';
import {ShareService} from '../service/share.service';
import {HeaderNavService} from '../service/header-nav.service';
import {BaseMenuComponent} from '../base-menu/base-menu.component';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd';
import * as moment from 'moment';

@Component({
  selector: 'app-project-share-sevice',
  templateUrl: './project-share-sevice.component.html',
  styleUrls: ['./project-share-sevice.component.scss']
})
export class ProjectShareSeviceComponent extends BaseMenuComponent implements OnInit, OnDestroy {
  // 定时刷新
  public timeRenovate;
  // 最新的消息
  public messageList: any;
  // 未读消息统计参数
  public viewMessage: number;
  public messageCss = [];
  // 获取定时消息
  public regularMessageList = [];
  public currentIdList = [];
  constructor(
    private shareService: ShareService,
    private headerNavService: HeaderNavService,
    public router: Router,
    private _notification: NzNotificationService,
  ) {
    super(router);
  }

  ngOnInit() {
    // this.startUsingTimeRenovate();
    this.getPageMessage();
    this.getNewMessage();
  }
  ngOnDestroy() {
    clearTimeout(this.timeRenovate);
  }
  // 启用定时刷新
  startUsingTimeRenovate() {
    clearTimeout(this.timeRenovate);
    this.timeRenovate = setTimeout(() => {
      this.getPageMessage();
    }, 3000);
  }
  // 获取页面消息通道
  getPageMessage() {
    // 获取当前页面是否需要刷新
    this.shareService.getCurrentPage().subscribe(message => {
      const param = message;
      if (param) {
        this.shareService.getpageMsg(param).subscribe(result => {
          this.startUsingTimeRenovate();
          if (result) {
            if (!result.error_code) {
              this.shareService.emitMessage(result);
              if (result['allocationBid'] || result['notice']) {
                this.getNewMessage();
              } if (result['regular_notice']) {
                this.queryRegularMessage();
              } else {
                if (this.messageList) {
                  this.messageList.forEach(data => {
                    data.showTip = false;
                  });
                  this.getMessageHight();
                }
              }
            } else if (result.error_code === 401) {
              // todo
              // this.loginOut();
              this.headerNavService.loginOut();
            }
          }
        });
      } else {
        this.startUsingTimeRenovate();
      }
    });
  }
  // 定时消息查询
  queryRegularMessage() {
    const param = {
      message_type: 'regular'
    }
    this.shareService.queryRegularMessage(param).subscribe(result => {
      /*console.log(result);*/
      this.regularMessageList = result.result.data;
      if (this.regularMessageList.length > 0) {
        this.regularMessageList.forEach(message => {
          message.create_time = moment( message.create_date).format('YYYY-MM-DD HH:mm:ss');
          if (this.idIsExist(message.id)) {
            this.createBasicNotification(message);
          }
        });
      }

    });
  }
  // 判断id是否存在
  idIsExist(messsageId) {
    for (let i = 0 ; i <  this.currentIdList.length; i++) {
      if (messsageId === this.currentIdList[i]) {
        return false;
      }
    }
    return true;
  }
  // 发通知
  createBasicNotification(data) {
    this.currentIdList.push(data.id);
    const htmlShow = `
    <ul>
      <div>定时通知</div>
    </ul>
    <ul>
      <div class="message-bond-style">` + data.title +`</div>
      <div class="regular_time_style"><i class="anticon anticon-clock-circle-o"></i>` + ' ' +data.create_user.name + ' 发起于 '+ data.create_time + `</div>
      <pre>` + data.content + `</pre>
      <div>请在五点前确认调整情况</div>
    </ul>
    `;
    const id = this._notification.html(htmlShow,{nzDuration: 1800000});
  }
  /*获取是否有新消息*/
  getNewMessage() {
    this.shareService.getNewMessage().subscribe(result => {
      const reqInfo = result;
      if (reqInfo.error_code === '0') {
        this.viewMessage = result.results;
        if (this.viewMessage > 0) {
          this.headerNavService.sendMessage(true);
          this.queryMessage(1, 5);
        } else {
          this.headerNavService.sendMessage(false);
        }
      } else if (reqInfo.error_code === '90001') {
        // todo
        // this.loginOut();
        this.headerNavService.loginOut();
      }
    });
  }
  // 查询消息
  queryMessage(pageNun, pageSize) {
    const param = {
      page_num: pageNun,
      page_size: pageSize,
      is_view: false
    };
    this.shareService.queryMessage(param).subscribe(result => {
      const refInfo = result.result;
      if (refInfo) {
        this.messageList = refInfo.data;
        if (this.messageList.length > 0) {
          this.messageList.forEach(data => {
            if (data.message_type_name !== '通知' && data.message_type_name !== '定时通知') {
              data.content = eval('(' + data.content + ')');
              data.created_date = new Date(data.created_date);
            } else {
              data.created_date =  new Date(data.iterative[0].created_date);
            }
            const d: any = new Date();
            const t: any = d - data.created_date;
            // 只显示最近5秒的消息
            if (t < 5000) {
              data.showTip = true;
            } else {
              data.showTip = false;
            }
          });
          this.getMessageHight();
        }
      }
    });
  }
  // 获取消息接口
  getMessageHight() {
    this.messageCss = [];
    let messageTop = window.screen.height - 100;
    if (this.messageList.length > 0) {
      this.messageList.forEach((data, index) => {
        if (data.showTip) {
          messageTop = messageTop - 110;
          const tempCss = {
            top: messageTop + 'px'
          };
          this.messageCss.push(tempCss);
        } else {
          const tempCss = {
            top: '1500px'
          };
          this.messageCss.push(tempCss);
        }
      });
    }
  }
  // 关闭消息
  closeTip(index) {
    this.messageList[index].showTip = false;
    this.messageCss[index].top = '1500px';
  }
}
