import { Component, OnInit } from '@angular/core';

class Hero {
  constructor(
    public id: number,
    public name: string,
    public mobile: string,
    public password: string,
    public alterEgo?: string
  ) {  }
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  myHero =  new Hero(42, 'SkyDog','13112345677',
  'Fetch any object at any distance',
  'Leslie Rollover');

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
  }
}
