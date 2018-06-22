import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-exe-counter',
  template: `<p>当前值: {{ counter }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent  implements OnInit {
  counter = 0;
  @Input() addStream: Observable<any>;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.addStream.subscribe(() => {
      console.log('Observable next');
      this.counter++;
      // this.cd.markForCheck();
    });
  }

}
