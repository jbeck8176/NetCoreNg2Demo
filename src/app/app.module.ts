import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListDisplayComponent } from './components/todoListDisplay'
import { TodoItemAddComponent } from './components/todoItemAdd'

@NgModule({
  declarations: [
    AppComponent,
    TodoListDisplayComponent,
    TodoItemAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
