import { NgModule } from '@angular/core';
import { SxzqDragDirective } from './lib/draggable';
import { SxzqDropDirective } from './lib/droppable';
import { SxzqDragDropReplaceDirective } from './lib/drag-drop-replace';

@NgModule({
    declarations: [SxzqDragDirective, SxzqDropDirective, SxzqDragDropReplaceDirective],
    exports: [SxzqDragDirective, SxzqDropDirective, SxzqDragDropReplaceDirective]
})
export class SxzqDragModule {}

