import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
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
  constructor(public viewCtrl: ViewController) {}
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
