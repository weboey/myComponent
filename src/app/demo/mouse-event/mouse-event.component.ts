import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent implements OnInit {
  mouseoverCount = 0;
  mouseenterCount = 0;
  constructor() { }

  ngOnInit() {
  }

  mouserEnterHandler() {
    console.log('mouserEnterHandler');
    this.mouseenterCount++;
  }

  mouserOverHandler() {
    console.log('mouserOverHandler');
    this.mouseoverCount++;
  }
  mouserLeaveHandler() {
    console.log('mouser Leave');
  }
  mouseOutHandler() {
    console.log('mouser out');
  }

  mouseupHandler() {
    console.log('mouseupHandler');
  }
}
