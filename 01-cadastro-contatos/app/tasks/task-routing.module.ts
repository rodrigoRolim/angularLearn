import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TaskListaComponent } from './tasks-lista.component';
import { TaskDetailComponent } from './task-detail.component';

const taskRoutes: Routes = [
    {
        path: 'tarefa',
        component: TaskListaComponent
    },
    {
        path: 'tarefa/save',
        component: TaskDetailComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(taskRoutes)
    ]
})
export class TaskRoutingModule {}