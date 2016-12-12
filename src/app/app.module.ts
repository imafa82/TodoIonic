import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TodosPage } from '../pages/todos/todos';
import { AddTaskModalPage } from '../pages/add-task-modal/add-task-modal';
import {PrioritizedPipe} from '../pipes/prioritized-pipe';

@NgModule({
  declarations: [
    MyApp,
    TodosPage,
    AddTaskModalPage,
    PrioritizedPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodosPage,
    AddTaskModalPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
