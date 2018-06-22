import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-exe-parent',
  template: `<app-exe-child></app-exe-child>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
