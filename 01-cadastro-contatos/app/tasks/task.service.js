"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const tasks_mock_1 = require("./tasks-mock");
let TaskService = class TaskService {
    getTasks() {
        return Promise.resolve(tasks_mock_1.TASKS);
    }
    getTask(id) {
        return this.getTasks()
            .then((tasks) => tasks.find(task => task.id === id));
    }
    getTaskSlowly() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        })
            .then(() => {
            console.log("primeiro then");
            return 'angular 2';
        })
            .then((param) => {
            console.log("segundo then");
            console.log(param);
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {
                    console.log('continuado depois de 4 segundos...');
                    resolve2();
                }, 4000);
            });
        })
            .then(() => {
            console.log('terceiro then');
            return this.getTasks();
        });
    }
};
TaskService = __decorate([
    core_1.Injectable()
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map