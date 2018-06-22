import { Component, OnInit, Directive, ViewContainerRef, ViewChild, AfterViewInit, Output, EventEmitter,
  TemplateRef, ComponentRef, EmbeddedViewRef,
  Renderer2, ComponentFactoryResolver, ChangeDetectorRef, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[renderer-host]'
})
export class RendererHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

export class TableCellRendererBase implements OnInit {

  @Input() public cellData: any;
  @Input() public row: number;

  _tableData: any;
  @Input()
  set tableData(value: any) {
    this._tableData = value;
  }
  get tableData(): any {
    return this._tableData;
  }

  @Output() public cellDataChange = new EventEmitter<any>();

  protected targetData: any; // TableData
  private _removeTableDataRefresh: Function;
  private _removeAdditionalDataRefresh: Function;

  private _column = -1;

  public get column(): number {return this._column;}

  protected onDataRefresh(): void {}

  public dispatchChangeEvent(value: any): void {
    this.cellDataChange.emit(value);
  }

  ngOnInit(): void {
  }
}


export class TableInternalCellBase implements AfterViewInit {
  constructor(protected componentFactoryResolver: ComponentFactoryResolver,
              protected changeDetector: ChangeDetectorRef) {}

  @ViewChild(RendererHostDirective)
  protected rendererHost: RendererHostDirective;

  protected targetData: any;
  protected rendererRef: any;

  @Input()
  public cellData: any;
  @Input()
  public row: number;
  @Input()
  public field: string;
  @Input()
  public renderer: any;

  @Output()
  public cellDataChange = new EventEmitter<any>();

  private _column = -1;

  public get column(): number {
    return this._column;
  }

  _tableData: any;
  @Input()
  public get tableData(): any {
    return this._tableData;
  }
  public set tableData(value: any) {
    this._tableData = value;
    this._initTargetData();
  }

  private _initTargetData(): void {
    if (!this.tableData) {
      return;
    }
    // [this._column, this.targetData] = _getColumnIndex(this._tableData, this._additionalData, this.field);
  }

  /*
   * 渲染器制造工厂
   * */
  protected rendererFactory(renderer: any): ComponentRef<any> | EmbeddedViewRef<any> {
    if (renderer instanceof TemplateRef) {
      return this.rendererHost.viewContainerRef.createEmbeddedView(renderer, {
        context: {
          tableData: this.tableData,
          cellData: this.cellData, row: this.row, field: this.field
        }
      });
    } else {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(renderer);
      const componentRef = this.rendererHost.viewContainerRef.createComponent(componentFactory);
      (<any>componentRef.instance).row = this.row;
      (<any>componentRef.instance).field = this.field;
      (<any>componentRef.instance).tableData = this.tableData;
      // (<any>componentRef.instance).additionalData = this.additionalData;
      (<any>componentRef.instance).cellData = this.cellData;
      // (<any>componentRef.instance).this = this;
      return componentRef;
    }
  }

  /*
   * 插入渲染器
   * */
  protected insertRenderer() {
    this.rendererRef = this.rendererFactory(this.renderer);
    this.changeDetector.detectChanges();
  }

  ngAfterViewInit(): void {
    this.insertRenderer();
  }
}



@Component({
  selector: 'sxzq-table-cell',
  template: `<ng-template renderer-host></ng-template>`
})
export class SxzqTableCellComponent extends TableInternalCellBase implements OnInit {

  @Input()
  public group: string;
  @Input()
  public colSpan: number;
  constructor(private cfr: ComponentFactoryResolver, private cd: ChangeDetectorRef,
              private _renderer: Renderer2, private _elementRef: ElementRef) {
    super(cfr, cd);
  }

  ngOnInit() {}

}


