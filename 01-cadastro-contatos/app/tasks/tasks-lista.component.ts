import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from './task.service';
@Component({
    moduleId: module.id,
    selector: 'tasks-lista',
    templateUrl: 'tasks-lista.component.html'
})
export class TaskListaComponent implements OnInit{
    tasks: Task[]; 
    constructor(private taskService: TaskService) {}

    ngOnInit(): void{
       this.taskService.getTasks()
                .then((tasks: Task[]) => {
                    this.tasks = tasks;
                }).catch(err => console.log(err));
    }
}