import {Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef, DoCheck, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-data-change',
  templateUrl: './data-change.component.html',
  styleUrls: ['./data-change.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataChangeComponent implements OnInit, OnChanges, DoCheck {


  public checkModel: any;
  _checkArr: any;
  @Input()
  set checkArr(value) {
    console.log('>>>>>>>>>>>>>>>> checkArr');
    this._checkArr = value;
    // this.checkModel = this.checkArr;
    // this.isAllSelect = this.checkModel.checkNames.every(item => item.flag);
  }
  get checkArr() {
    return this._checkArr;
  }
  _dataOfObj: any;
  // @Input() dataOfObj: any;
  @Input()
  set dataOfObj(value: any) {
    console.log('>>>>>>>>>>>>>>>> dataOfObj');
    this._dataOfObj = value;
  }
  get dataOfObj(): any {
      return this._dataOfObj;
  }

  _dataOfStr: any;
  // @Input() dataOfStr: any;
  @Input()
  set dataOfStr(value: any) {
    console.log('>>>>>>>>>>>>>>>> dataOfStr');
    this._dataOfStr = value;
  }
  get dataOfStr(): any {
    return this._dataOfStr;
  }

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.checkModel = this.checkArr;
  }

  ngDoCheck(): void {
    console.log('DataChangeComponent ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }
}
