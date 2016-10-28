import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListDisplayComponent } from './components/todoListDisplay'
import { TodoItemAddComponent } from './components/todoItemAdd'
import { TodoListDetailComponent } from './components/todoListDetail'
import { TodoStore } from './services/todo/todo.store';
import { TodoService } from './services/todo/todo.service';

import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TodoListDisplayComponent,
    TodoItemAddComponent,
    TodoListDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    TodoStore,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
