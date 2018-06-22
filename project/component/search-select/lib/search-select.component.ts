import { Component, OnInit, Input, Output, EventEmitter,
  Renderer2, OnDestroy, AfterViewInit, HostListener, ViewChild, ElementRef, NgZone} from '@angular/core';
import { CdkConnectedOverlay, CdkOverlayOrigin} from '@angular/cdk/overlay';
import { coerceBooleanProperty} from '@angular/cdk/coercion';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/filter';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
@Component({
  selector: 'app-search-select, sxzq-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss'],
  animations         : [
    trigger('dropDownAnimation', [
      state('hidden', style({
        opacity: 0,
        display: 'none'
      })),
      state('bottom', style({
        opacity        : 1,
        transform      : 'scaleY(1)',
        transformOrigin: '0% 0%'
      })),
      transition('hidden => bottom', [
        style({
          opacity        : 0,
          transform      : 'scaleY(0.8)',
          transformOrigin: '0% 0%'
        }),
        animate('130ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
      ]),
      transition('bottom => hidden', [
        animate('130ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
          opacity        : 0,
          transform      : 'scaleY(0.8)',
          transformOrigin: '0% 0%'
        }))
      ])
    ])
  ]
})
export class SearchSelectComponent implements OnInit, OnDestroy, AfterViewInit {

  public selectedIndex = 0; // 已选择项option索引
  public keyDownIndex = 0; // 键盘上下选择索引
  public _optionListShow = false; // option list 下拉框是否展开
  public _isDestroy = true; // 控制下拉框覆盖层初始化标志
  public _overlayWidth: number; // 下拉宽宽度
  public _initialized = false; // OnInit`钩子是否已经执行过
  public _sub$: any; // 搜索时发出的数据流
  public _searchVal: string; // 输入的搜索value
  public _value: any; // select value 双向绑定
  public _selectedValue: any; // 绑定
  @Output() valueChange = new EventEmitter();
  @Input()
  public get value(): any {
    return this._value;
  }
  public set value(newValue: any) {
    if (newValue !== this._value) {
      this.writeValue(newValue);
    }
  }
  _displayValue: string;
  public get displayValue(): string {
    return this._displayValue;
  }
  public set displayValue(inputValue: string) {
    if (inputValue !== this._displayValue) {
      this._displayValue = inputValue;
    }
  }

  private _data: Array<object> = [];
  @Input()
  public get data(): Array<object> | object[] {
    return this._data;
  }
  public set data(value: Array<object> | object[]) {
    this._data = value instanceof Array ? value : new Array(value);
    this._initSelectOption();
  }

  public _allowClear = false;
  public _disabled = false;
  public _clearIcon = false;
  @Input()
  set nzAllowClear(value: boolean) {
    this._allowClear = coerceBooleanProperty(value);
  }
  get nzAllowClear(): boolean {
    return this._allowClear;
  }
  @Input()
  set nzDisabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  get nzDisabled(): boolean {
    return this._disabled;
  }
  @ViewChild('inputElement') inpElementRef: ElementRef;
  @ViewChild(CdkOverlayOrigin) cdkOverlayOrigin: CdkOverlayOrigin;
  @ViewChild(CdkConnectedOverlay) cdkConnectedOverlay: CdkConnectedOverlay;
  @Output()
  nzSearchChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  nzOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  ngModelChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  ngModelChangeObj: EventEmitter<any> = new EventEmitter<any>();
  @Input() nzNotFoundContent: any;
  @Input() nzPlaceHolder: string;
  @Input() nzOptionLabel: string;
  @Input() nzOptionValue: string;
  @Input() nzInitSearchValue: string;
  isValueBindObject = false;
  valueBindField: string;
  constructor(public _renderer: Renderer2, public _ngZone: NgZone) { }

  @HostListener('click', ['$event'])
  _toggleClick(event: Event) {
    event.stopPropagation();
    if (this._disabled) {
      return;
    }
    this._clearIcon = false;
    this._optionListShow = !this._optionListShow;
    this.updateCdkConnectedOverlayStatus();
    if (this._optionListShow) {
      this.nzPlaceHolder = this.displayValue;
      this.keyDownIndex = this.selectedIndex;
      setTimeout(() => {
        this.inpElementRef.nativeElement.value = '';
        this.inpElementRef.nativeElement.focus();
      }, 0);
    }
    this.nzOpenChange.emit(this._optionListShow);
  }
  closeDropDown(): void {
    if (this._optionListShow) {
      this._optionListShow = false;
      this.updateCdkConnectedOverlayStatus();
      this.nzOpenChange.emit(this._optionListShow);
    }
  }
  updateCdkConnectedOverlayStatus(): void {
    if (this._initialized && this._optionListShow && this.cdkOverlayOrigin && this.cdkConnectedOverlay.overlayRef) {
      this._overlayWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
      this.cdkConnectedOverlay.overlayRef.updateSize({ width: this._overlayWidth });
    }
    if (!this._isDestroy) {
      this.updateCdkConnectedOverlayPositions();
    }
    if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef && this.cdkConnectedOverlay.overlayRef.backdropElement) {
      if (this._optionListShow) {
        this._renderer.removeStyle(this.cdkConnectedOverlay.overlayRef.backdropElement, 'display');
      } else {
        this._renderer.setStyle(this.cdkConnectedOverlay.overlayRef.backdropElement, 'display', 'none');
      }
    }
  }
  updateCdkConnectedOverlayPositions(): void {
    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.cdkConnectedOverlay.overlayRef.updatePosition();
      }, 80);
    });
  }

  _showClear(event: Event) {
    event.stopPropagation();
    if (this._value == null || this._value === '' || this._disabled || this._optionListShow) {
      return;
    }
    this._clearIcon = true;
  }
  _hiddenClear(event: Event) {
    event.stopPropagation();
    this._clearIcon = false;
  }

  clearPlaceholder(searchVal: string) {
    this._searchVal = searchVal;
    if (searchVal.length) {
      this.nzPlaceHolder = '';
    } else {
      this.nzPlaceHolder = this.value;
    }
  }

  ngAfterViewInit() {
    this._initSelectOption();
    this._initSearchInputValue();
    Promise.resolve().then(() => this.updateCdkConnectedOverlayStatus());
  }

  onClearSelected(event) {
    event.stopPropagation();
    this.value = null;
    this.displayValue = null;
  }
  // 当data为空时，value有值时处理逻辑
  _initSearchInputValue() {
    if (this.data.length === 0 && (this.value != null || typeof this.value !== 'undefined')) {
      Promise.resolve().then(() => { // 显示初始value
        if (this.isValueBindObject) {
          this.displayValue = this.value[this.nzOptionLabel];
        } else if (this.nzOptionLabel == this.valueBindField) {
          this.displayValue = this.value;
        } else {
          this.displayValue = this.nzInitSearchValue;
        }
      });
    }
  }
  // 初始化高亮已选择项
  _initSelectOption() {
    if (this.value == null || typeof this.value === 'undefined') {
      return;
    }
    const selectedItem = this.data.find(item => {
      if (this.isValueBindObject) {
        return item === this.value;
      } else {
        return item[this.valueBindField] === this.value;
      }
    });
    Promise.resolve().then(() => { // 显示初始value
      if (selectedItem) {
        this.displayValue = selectedItem[this.nzOptionLabel];
      }
    });
    this.selectedIndex = this.data.indexOf(selectedItem);
  }
  // 更改option选中状态
  _updateSelectedOption(selected) {
    if (!this.data.length) {
      this.closeDropDown();
      return;
    }
    this._updateInputVal(selected);
    this.selectedIndex = this.data.indexOf(selected);
    this.closeDropDown();
  }
  // 更新input值
  _updateInputVal(newVal) {
    if (!newVal) {
      return;
    }
    if (this.isValueBindObject) {
      this.value = newVal;
    } else {
      if (!(this.valueBindField in newVal)) {
        throw new Error('object 不存在' + this.valueBindField + '属性');
      }
      this.value = newVal[this.valueBindField];
    }
    this._selectedValue = newVal;
    this.ngModelChangeObj.emit(this._selectedValue);
    this.displayValue = newVal[this.nzOptionLabel];
  }

  public writeValue (value: any): void {
    this._value = value;
    if (this._initialized) {
      this._initSelectOption();
      this.valueChange.emit(this.value);
      this.ngModelChange.emit(this.value);
    }
  }

  ngOnInit() {
    this._initialized = true;
    this._isDestroy = false;

    this.nzOptionValue = !!this.nzOptionValue ? this.nzOptionValue : 'item.' + this.nzOptionLabel;
    const returnFormat = this.nzOptionValue.match(/\.(.*)/);
    if (returnFormat) {
      this.valueBindField = returnFormat[1];
      this.isValueBindObject = false;
    } else {
      this.isValueBindObject = true;
    }

    this._sub$ = Observable.fromEvent<KeyboardEvent>(this.inpElementRef.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      // .filter((text: string) => text!='')
      .debounceTime(100)
      .distinctUntilChanged()
      .subscribe(
        inputVal => {
          this.nzSearchChange.next(inputVal);
        }
      );
  }

  get isNotFoundDisplay(): boolean {
    return !this.data.length && !!this._searchVal;
  }

  // 键盘上下选择
  onKeyDownChangeSelected(event: KeyboardEvent) {
    if ([ 38, 40, 13 ].indexOf(event.keyCode) > -1) {
      event.preventDefault();
      event.stopPropagation();
      if (this._optionListShow && event.keyCode === 38) {
        this.keyDownIndex = this.keyDownIndex ? this.keyDownIndex - 1 : this.data.length - 1;
        if (this.keyDownIndex < 0) {
          this.keyDownIndex = this.data.length - 1;
        }
        this._scrollIntoView();
      } else if (this._optionListShow && event.keyCode === 40) {
        this.keyDownIndex = this.keyDownIndex || this.keyDownIndex === 0 ? this.keyDownIndex + 1 : 0;
        if (this.keyDownIndex > this.data.length - 1) {
          this.keyDownIndex = 0;
        }
        this._scrollIntoView();
      } else if (event.keyCode === 13) {
        if (this._optionListShow) {
          this._updateSelectedOption(this.data[this.keyDownIndex]);
        } else {
          this._toggleClick(event);
        }
      }
    }
  }

  _scrollIntoView(): void {
    if (this.data && this.data.length) {
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          const targetLi = this.cdkConnectedOverlay.overlayRef.overlayElement.querySelector('.item-keydown-selected');
          if (!!targetLi && targetLi['scrollIntoViewIfNeeded']) {
            targetLi['scrollIntoViewIfNeeded'](false);
          }
        }, 0);
      });
    }
  }

  ngOnDestroy(): void {
    this._isDestroy = true;
    this._sub$.unsubscribe();
  }
}
