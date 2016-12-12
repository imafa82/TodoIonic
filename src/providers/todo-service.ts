import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Todo} from '../app/models/todo';

/*
  Generated class for the TodoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodoService {
private todos:Todo[];
  constructor(public http: Http) {
    this.getTodos();
  }
  addTodo(todo:Todo){
    this.todos.push(todo);
  }
   toogleTodo(item:Todo){
      item.isDone = ! item.isDone;
  }
  removeTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos = [ 
      ...this.todos.slice(0, index),
      ...this.todos.slice(index+1)
    ];
  }

  updateTodo(originalTodo:Todo, modifiedTodo: Todo){
    const index = this.todos.indexOf(originalTodo);
    this.todos = [ 
      ...this.todos.slice(0, index),
      modifiedTodo,
      ...this.todos.slice(index+1)
    ];
  }
  private getTodos(){
    this.todos = [
      new Todo ("Primo Elemento"),
      new Todo ("Primo Elemento"),
      new Todo ("Primo Elemento"),
      new Todo ("Primo Elemento"),
      new Todo ("Primo Elemento", true),
      new Todo ("Primo Elemento"),
      new Todo ("Primo Elemento", false, true),
      new Todo ("Primo Elemento"),
      new Todo ("Primo Elemento"),
        new Todo ("Primo Elemento"),
      new Todo ("Primo Elemento"),
      new Todo ("Primo Elemento"),
      new Todo ("Primo Elemento"),
      new Todo ("Primo Elemento", true),
      new Todo ("Primo Elemento"),
      new Todo ("Primo Elemento", false, true),
      new Todo ("Primo Elemento"),
      new Todo ("Primo Elemento")

    ];
  }
}
