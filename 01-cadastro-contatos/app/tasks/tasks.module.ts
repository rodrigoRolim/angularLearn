import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailComponent } from './task-detail.component'
import { TaskListaComponent } from './tasks-lista.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        TaskRoutingModule,
        FormsModule
    ],
    declarations: [
        TaskDetailComponent,
        TaskListaComponent
    ],
    exports:[
        TaskListaComponent
    ],
    providers:[
        TaskService
    ]
})
export class TaskModule {}