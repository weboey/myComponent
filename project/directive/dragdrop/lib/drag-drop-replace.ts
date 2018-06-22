import {Directive, OnInit, OnDestroy, HostListener} from '@angular/core';

@Directive({
    selector: '[sxzq-drag-drop-replace], [sxzqDragDropReplaceDirective]',
})
export class SxzqDragDropReplaceDirective implements OnInit, OnDestroy {

    @HostListener('doDragStart', ['$event'])
    dragStartHandle(ev) {
      ev.event.dataTransfer.setData('text', JSON.stringify(ev.element.innerHTML));
    }
    @HostListener('doDragEnd', ['$event'])
    dragEndHandle(ev) {
      if (window['_replacedEl']) {
        ev.element.innerHTML = window['_replacedEl'];
      }
      window['_replacedEl'] = null;
      ev.event.dataTransfer.clearData('text');
    }
    @HostListener('doDrop', ['$event'])
    dropHandle(ev) {
      window['_replacedEl'] = ev.element.innerHTML;
      ev.element.innerHTML = JSON.parse(ev.event.dataTransfer.getData('text'));
    }
    ngOnInit() {}
    ngOnDestroy() {}
}


