import {Router} from '@angular/router';

const baseHref = document.head.querySelector('base').getAttribute('href');

export abstract class BaseMenuComponent {

  constructor(public router: Router) {}
  // 地址跳转处理
  public hrefNavigate(nav: object | string) {
    if (!nav) {
      return;
    }
    let url = '';
    if ( typeof nav === 'string') {
      url = nav;
    } else {
      url = nav['url'].toString();
    }
    if (nav['name'] && nav['name'].toLowerCase() === 'book') {
      this.newBook(url);
    } else if ((baseHref === '/' && !url.match(/(capital\/)|(bidding\/)/gi))) {
      this.routerNavigate(url);
    } else if (baseHref !== '/' && url.match(new RegExp(baseHref, 'i'))){
      const reg = '(' + baseHref + ')' + '(.*)';
      const realUrl = url.match(new RegExp(reg, 'i'))[2];
      this.routerNavigate(realUrl);
    } else {
      window.location.href = 'http://' + window.location.host + url;
    }
  }

  routerNavigate(url) {
    const urlParse = this.getQueryString(url,'key');
    if (urlParse != null) {
      this.router.navigate([urlParse.href], {queryParams: {key: urlParse.param}});
    } else {
      this.router.navigate([url]);
    }
  }

  getQueryString(url, name) {
    const urlReg = url.match(/^(.*(?=\?))(\?)(.*)/i);
    if(urlReg != null){
      const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      const params = urlReg[3];
      const r = params.match(reg);
      if (r != null) return {
        href:urlReg[1],
        param:window['unescape'](r[2])
      };
    }
    return null;
  }

  newBook(url) {
    const ip = window.location.host;
    window['windowObject'] =  window.open('http://' + ip + url, 'BOOK', 'width=630,height=330,location=no,toolbar=no,menubar=no');
  }
}
