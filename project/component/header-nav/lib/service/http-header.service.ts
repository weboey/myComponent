import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class HttpHeaderService {
  /**
   * 处理请求错误
   * @param error
   * @returns {void|Promise<string>|Promise<T>|any}
   */
  static handleError(error) {
    console.log(error);
    const msg = '请求失败';
    if (error.status === 400) {
      console.log('请求参数正确');
    }
    if (error.status === 404) {

      console.error('请检查路径是否正确');
    }
    if (error.status === 500) {
      console.error('请求的服务器错误');
    }
    console.log(error);
    return {success: false, msg: msg};

  }

  constructor(private http: HttpClient) {
  }

  /*get请求*/
  public get(url: string, params: any , observer: any): any {
    return this.http.get(url, {params})
      .toPromise()
      .then(req => {
        observer.next(req);
      })
      .catch(res => HttpHeaderService.handleError(res));
  }
  /*post请求*/
  public post (url: string, params: any , observer: any): any {
    return this.http.post(url, params)
      .toPromise()
      .then(req => {
        observer.next(req);
      })
      .catch(res => HttpHeaderService.handleError(res));
  }
  /*put请求*/
  public put (url: string, params: any , observer: any): any {
    return this.http.put(url, params)
      .toPromise()
      .then(req => {
        observer.next(req);
      })
      .catch(res => HttpHeaderService.handleError(res));
  }
  /*patch请求*/
  public patch (url: string, params: any , observer: any): any {
    return this.http.patch(url, params)
      .toPromise()
      .then(req => {
        observer.next(req);
      })
      .catch(res => HttpHeaderService.handleError(res));
  }
  public delete (url: string, params: any , observer: any): any {
    return this.http.delete(url, {params})
      .toPromise()
      .then(req => {
        observer.next(req);
      })
      .catch(res => HttpHeaderService.handleError(res));
  }
}
