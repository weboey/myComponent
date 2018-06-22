import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {HttpHeaderService} from './http-header.service';

@Injectable()
export class ShareService {
  public currentJson: any;
  constructor(
  public httpHeaderService: HttpHeaderService,
  ) {
    // 创建一个全局广播源，因为测试发现rxjs 的作用域不能跨越module
    // 用于全局消息通道广播
    window['messageSubject'] = new Subject();
    this.queryMessageJson();
  }
  // 当消息有新消息时出发
  emitMessage(title: string) {
    window['messageSubject'].next(title);
  }
  /*消息获取json配置start*/
  getCurrentPage() {
    if (this.currentJson) {
      return Observable.create(observer => {
        const currentPageHref = window.location.href;
        const currentList = currentPageHref.split('/');
        const currentPage = currentList[currentList.length - 1].split('?')[0];
        observer.next(this.currentJson[currentPage] ? this.currentJson[currentPage] : {allocationBid: 1, notice: 1, regular_notice: 1});
      });
    } else {
      return Observable.create(observer => {
        observer.next({allocationBid: 1, notice: 1});
      });
    }
  }
  queryMessageJson() {
    this.getMessageJson().subscribe(result => {
      this.currentJson = result;
    });
  }
  getMessageJson() {
    const system = window.location.pathname.split('/')[1];
    return Observable.create(observer => {
      this.httpHeaderService.get('assets/mock-data/' + system + '_message.json', null, observer);
    });
  }
  // 获取页面消息通道
  getpageMsg(param) {
    return Observable.create(observer => {
      this.httpHeaderService.get('/api/message/msg/' , param , observer);
    });
  }
  /*获取是否有新消息*/
  getNewMessage() {
    return Observable.create(observer => {
      this.httpHeaderService.get('/api/message/view/' , {} , observer);
    });
  }
  /*查询消息*/
  queryMessage(param) {
    return Observable.create(observer => {
      this.httpHeaderService.get('/api/message/message/' , param , observer);
    });
  }
  /*查询定时消息*/
  queryRegularMessage(param) {
    return Observable.create(observer => {
      this.httpHeaderService.get('/api/message/msg_search/' , param , observer);
    });
  }
  /*消息获取json配置end*/
}
