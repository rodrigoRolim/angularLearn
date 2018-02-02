import {Injectable } from '@angular/core';
import { TASKS } from './tasks-mock';
import { Task } from './task.model';



@Injectable()
export class TaskService {
    getTasks(): Promise<Task[]> {
        return Promise.resolve(TASKS);
    }
    getTask(id: number): Promise<Task>{
        return this.getTasks()
                .then((tasks: Task[]) => tasks.find(task => task.id === id));
    }
    getTaskSlowly(): Promise<Task[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve,3000);
        })
        .then(() => {
            console.log("primeiro then");
            return 'angular 2';
        })
        .then((param: string) => {
            console.log("segundo then");
            console.log(param);
            
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {
                    console.log('continuado depois de 4 segundos...');
                    resolve2();
                }, 4000);
            })
        })
        .then(() => {
            console.log('terceiro then');
            return this.getTasks()
        });
    }
}