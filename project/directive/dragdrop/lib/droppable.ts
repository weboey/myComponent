import {Directive, ElementRef, Output, EventEmitter, NgZone, OnInit, Renderer2, OnDestroy, HostListener} from '@angular/core';

@Directive({
    selector: '[sxzq-drop], [sxzqDroppable]',
})
export class SxzqDropDirective implements OnInit, OnDestroy {

    constructor(private _renderer: Renderer2, private _elementRef: ElementRef, private _zone: NgZone) {}
    private _removeDragOverHandler: Function;
    @Output()
    public doDragEnter: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    public doDragLeave: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    public doDragOver: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    public doDrop: EventEmitter<any> = new EventEmitter<any>();

    @HostListener('dragenter', ['$event']) /*拖拽元素进入目标元素头上的时候*/
    private _dragEnterHandle(event) {
        event.stopPropagation();
        this.doDragEnter.emit({event: event, element: this._elementRef.nativeElement});
        return true;
    }
    @HostListener('dragleave', ['$event']) /*拖拽元素离开目标元素头上的时候*/
    private _dragLeaveHandle(event) {
        event.stopPropagation();
        this.doDragLeave.emit({event: event, element: this._elementRef.nativeElement});
        return false;
    }

    private _dragOverHandle = (event) => { /*拖拽元素在目标元素头上移动的时候*/
        event.preventDefault();
        event.stopPropagation();
        this.doDragOver.emit({event: event, element: this._elementRef.nativeElement});
        return true;
    }

    @HostListener('drop', ['$event']) /*拖拽元素进入目标元素头上，同时鼠标松开的时候*/
    private _dropHandle(event) {
        event.stopPropagation();
        this.doDrop.emit({event: event, element: this._elementRef.nativeElement});
        return false;
    }

    ngOnInit() {
        this._zone.runOutsideAngular(() => {
            this._removeDragOverHandler = this._renderer.listen(
                this._elementRef.nativeElement, 'dragover', this._dragOverHandle);
        });
    }

    ngOnDestroy() {
        if (this._removeDragOverHandler) {
            this._removeDragOverHandler();
        }
    }
}


