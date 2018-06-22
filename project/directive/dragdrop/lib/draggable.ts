import {Directive, ElementRef, EventEmitter, NgZone,
  OnDestroy, OnInit, Output, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[sxzq-drag], [sxzqDraggable]',
})
export class SxzqDragDirective implements OnInit, OnDestroy {

    constructor(private _renderer: Renderer2, private _elementRef: ElementRef, private _zone: NgZone) {}

    private _offsetX = 0;
    private _offsetY = 0;
    private _removeDragHandler: Function;
    @HostBinding('draggable') true;
    @Output()
    public doDragStart: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    public doDragEnd: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    public doDrag: EventEmitter<any> = new EventEmitter<any>();

    @HostListener('selectstart', ['$event']) /*拖拽开始*/
    private _selectStartHandle(event) {
        return false;
    }
    @HostListener('mousedown', ['$event']) /*拖拽开始*/
    private _mouseDownHandle(event) {
        this._offsetX = event.offsetX;
        this._offsetY = event.offsetY;
    }

    @HostListener('dragstart', ['$event']) /*拖拽开始*/
    private _dragStartHandle(event) {
        event.stopPropagation();
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setDragImage(event.target, this._offsetX, this._offsetY);
        this.doDragStart.emit({event: event, element: this._elementRef.nativeElement});
        return true;
    }
    @HostListener('dragend', ['$event']) /*拖拽结束*/
    private _dragEndHandle(event) {
        event.stopPropagation();
        this.doDragEnd.emit({event: event, element: this._elementRef.nativeElement});
        return false;
    }

    private _dragHandle = event => {  /*拖拽元素的时候*/
        event.stopPropagation();
        this.doDrag.emit({event: event, element: this._elementRef.nativeElement});
    }

    ngOnInit() {
        this._zone.runOutsideAngular(() => {
            this._removeDragHandler = this._renderer.listen(
                this._elementRef.nativeElement, 'drag', this._dragHandle);
        });
    }

    ngOnDestroy() {
        if (this._removeDragHandler) {
            this._removeDragHandler();
        }
    }
}

