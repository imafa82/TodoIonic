import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Todo } from '../../app/models/todo';
import { AddTaskModalPage } from '../add-task-modal/add-task-modal';
import {TodoService} from '../../providers/todo-service';

/*
  Generated class for the Todos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
  providers: [TodoService]
})
export class TodosPage {
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private todoService:TodoService) 
  {}
  setTodoStyles(item:Todo){
    let styles = {
      'text-decoration': item.isDone ? 'line-through' : 'none',
      'font-weight': item.isImportant ? '600' : 'normal'
    }
    return styles;
  }

  toogleTodo(item:Todo){
      this.todoService.toogleTodo(item);
  }

  removeTodo(todo:Todo){
    this.todoService.removeTodo(todo);
  }

  showEditTodo(todo:Todo){
    // Invece di todo:todo dentro le parentesi graffe in typescript visto che hanno lo stesso nome posso passare solo todo
    let modal = this.modalCtrl.create(AddTaskModalPage, {todo});
    modal.present();

     modal.onDidDismiss(data => {
      if(data){
        this.todoService.updateTodo(todo, data);
      }
    });
  }

  showAddTodo(){
    let modal = this.modalCtrl.create(AddTaskModalPage);
    modal.present();

    modal.onDidDismiss(data => {
      if(data){
        this.todoService.addTodo(data);
      }
    });
  }
  
  ionViewDidLoad() {
    console.log('Hello TodosPage Page');

  }

}
