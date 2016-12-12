import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Todo } from '../../app/models/todo';
/*
  Generated class for the AddTaskModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-task-modal',
  templateUrl: 'add-task-modal.html'
})
export class AddTaskModalPage {
  private model = new Todo('');
  private title:string ="Add new task";
  private buttonText:string = "ADD";
  constructor(public viewCtrl: ViewController, private navParams:NavParams) {
    if(this.navParams.get('todo')){
      this.model = Todo.clone(this.navParams.get('todo'));
      this.title = "Edit task";
      this.buttonText = "Modifica"
    }
  }
  dismiss(){
    this.viewCtrl.dismiss()
  }
  ionViewDidLoad() {
    console.log('Hello AddTaskModalPage Page');
  }

  submit(){
    this.viewCtrl.dismiss(this.model)
    
  }

}
