import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailComponent } from './task-detail.component'
import { TaskListaComponent } from './tasks-lista.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
    imports:[
        CommonModule,
        TaskRoutingModule
    ],
    declarations: [
        TaskDetailComponent,
        TaskListaComponent
    ],
    exports:[
        TaskListaComponent
    ]
})
export class TaskModule {}