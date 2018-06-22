import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
// 过滤打选项类
class FillterCheck {
  constructor(public checkTitle: string,
              public title: string,
              public checkNames: Array<CheckName>) {
  }
}

// 过滤字段类
class CheckName {
  constructor(public checkName: string, public flag: boolean, public name: string | boolean) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit{
  person = {
    name: 'weboey'
  };
  address = {
    city: '南山',
    street: '西丽'
  };
  counterStream: Observable<any>;
  title = 'app';
  optionLists = [
    {name: 1},
    {name: 2},
    {name: 3},
    {name: 4},
  ];

  classFilter = new FillterCheck('产品', 'bond_category', [
    new CheckName('国债', true, '国债'),
    new CheckName('金融债', true, '金融债'),
    new CheckName('地方债', true, '地方债'),
    new CheckName('(超)短融', true, '(超)短融'),
    new CheckName('中票', true, '中票'),
    new CheckName('企业债', true, '企业债'),
    new CheckName('公司债', true, '公司债'),
    new CheckName('NCD', true, 'NCD'),
    new CheckName('PPN', true, 'PPN'),
    new CheckName('ABS', true, 'ABS'),
    new CheckName('其他', true, '其他')
  ]);
  user = {
    name: 'weboey',
    age: [1, 2]
  };
  qq = '583287168';
  i = 0;
  change() {
    setTimeout(() => {
      // this.classFilter.checkNames.forEach(item => {item.flag = false; });
      // this.user = Object.assign({}, this.user, {name: 'xiaoming' + this.i});
      // this.user.name = 'xiaoming';
       this.user.age.push(this.i);
      // this.qq = '6396005843' + this.i++;
    }, 0);

    this.address = Object.assign({}, this.address, {street: '宝安'});
  }

  ngOnInit() {
    setTimeout(() => {
      this.user.name = 'test11111';
    }, 2000);
    this.counterStream = Observable.timer(0, 1000);
  }

}
