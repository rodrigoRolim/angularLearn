import { Component } from '@angular/core';
import { Task } from './task.model';
import { TASKS } from './tasks-mock';
@Component({
    moduleId: module.id,
    selector: 'tasks-lista',
    templateUrl: 'tasks-lista.component.html'
})
export class TaskListaComponent{
    tasks: Task[] = TASKS; 
}