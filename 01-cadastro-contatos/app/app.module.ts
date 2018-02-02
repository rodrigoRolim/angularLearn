import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskModule } from './tasks/tasks.module';


@NgModule({
    imports:[
        AppRoutingModule,
        BrowserModule,
        TaskModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}