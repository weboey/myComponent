import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-example',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements OnInit {

  myContext: any;
  allPersons = [];
  constructor() { }
  ngOnInit() {
    this.myContext = {$implicit: 'World', localSk: 'Svet', name: 'world name',
      test: {
        age: 18
      }
    };

    this.allPersons = [
      {name: 'Mahesh', age: '25'},
      {name: 'Shakti', age: '23'},
      {name: 'Krishna', age: '23'},
      {name: 'Radha', age: '21'},
    ];
  }

}
