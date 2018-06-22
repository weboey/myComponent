import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-display-person',
  template: `{{person.name}} lives at {{address.street}}, {{address.city}} ({{zipCode}})`,
  styleUrls: ['./display-person.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayPersonComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() person: {name: string};
  @Input() address: {city: string, street: string};

  // this is not an input,this is local state of this component
  zipCode: string;
  ngOnInit() {
  }

  ngOnChanges(inputChanges) {
    // this means that the address object was replaced
    if (inputChanges.address) {
      this.zipCode = this.address.street + 'code';
    }
  }
}
