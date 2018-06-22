import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import { retry } from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class HeaderNavService {

  private _subject: Subject<string> = new Subject<string>();
  private _menuSubject: Subject<string> = new Subject<string>();
  private _userSubject: Subject<string> = new Subject<string>();
  private _msgSubject: Subject<boolean> = new Subject<boolean>();

  public get headerEmitMsg(): Observable<string> {
    return this._subject.asObservable();
  }

  public get menu$(): Observable<string> {
    return this._menuSubject.asObservable();
  }
  public get user$(): Observable<string> {
    return this._userSubject.asObservable();
  }
  public get msg$(): Observable<boolean> {
    return this._msgSubject.asObservable();
  }
  public sendMessage(hasMes: boolean) {
    this._msgSubject.next(hasMes);
  }
  public sendUserChange() {
    this._userSubject.next();
  }
  public sendMenuChange() {
    this._menuSubject.next();
  }

  constructor(private http: HttpClient) {
  }
  getMenuData(): Observable<any> {
    const userId = localStorage.getItem('userId');
    if (userId == null) {
      throw new Error('系统错误，请先登录!');
    }
    const url = `/api/account/menu_list/?user_id=${userId}`;
    return this.http.get(url)
      .map( rep => this._formatData(rep['result']))
      .map( data => data.filter( item => item['isMenuTree']))
      .map( data => data.sort((a, b) => a['sort_id'] - b['sort_id']));
   }

  _formatData(data) {
    return data.map( item => {
      item.isConfigurable = item.isConfigurable === '1';
      item.isHomeIcon = item.isHomeIcon === '1';
      item.isMenuTree = item.isMenuTree === '1';
      item.homeIconStatus = item.homeIconStatus === '1';
      item.open = item.up_id === 0;
      return item;
    });
  }

  loginOut() {
    this.http.get('/api/account/logout/')
      .subscribe(() => {
        if (window.location.pathname !== '/bidding/login') {
          window.location.href = 'http://' + window.location.host + '/login';
          this._subject.next('loginOut');
        }
      });
  }

  /*获取用户信息*/
  getUserDetail (userId) {
    const url = `/api/account/user/${userId}/`;
    return this.http.get(url).pipe(retry(3));
  }
  /*判断用户是否登录*/
  getUserLocal() {
    if (this.getCookie('token')) {
      const userId = this.getCookie('userId');
      if (userId) {
        return this.getUserDetail(userId);
      }
    }
    return new Subject().asObservable();
  }
  // 获取cookie
  getCookie(name) {
    const reg = RegExp(name + '=([^;]+)');
    const arr = document.cookie.match(reg);
    if (arr) {
      return arr[1];
    } else {
      return '';
    }
  }
}
