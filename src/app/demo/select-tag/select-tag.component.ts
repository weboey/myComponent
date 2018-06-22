import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-tag',
  templateUrl: './select-tag.component.html',
  styleUrls: ['./select-tag.component.css']
})
export class SelectTagComponent implements OnInit {

  constructor() { }
  students = [
    {name: 'qq'},
    {name: 'ww'},
    {name: 'ee'},
  ];
  student: any;
  ngOnInit() {
    this.student = {name: 'qq'};
  }

}
