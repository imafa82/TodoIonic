import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Todo } from '../../app/models/todo';
import { AddTaskModalPage } from '../add-task-modal/add-task-modal';
/*
  Generated class for the Todos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})
export class TodosPage {
  private todos:Todo[];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) 
  {
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
  setTodoStyles(item:Todo){
    let styles = {
      'text-decoration': item.isDone ? 'line-through' : 'none',
      'font-weight': item.isImportant ? '600' : 'normal'
    }
    return styles;
  }

  toogleTodo(item:Todo){
      item.isDone = ! item.isDone;
  }
  showAddTodo(){
    let modal = this.modalCtrl.create(AddTaskModalPage);
    modal.present();

    modal.onDidDismiss(data => {
      if(data){
        this.addTodo(data);
      }
    });
  }
  addTodo(todo:Todo){
    this.todos.push(todo);
  }
  ionViewDidLoad() {
    console.log('Hello TodosPage Page');

  }

}
