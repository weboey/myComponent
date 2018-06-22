import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-exe-child',
  template: ` <p>当前值: {{ counter }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class  ChildComponent implements OnInit {
  @Input() counter = 0;
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    setInterval(() => {
      this.counter++;
      // this.cd.markForCheck();
      this.cd.detectChanges();
    }, 1000);
  }

}
