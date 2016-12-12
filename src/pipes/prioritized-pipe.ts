import { Injectable, Pipe } from '@angular/core';
import {Todo} from '../app/models/todo';
/*
  Generated class for the PrioritizedPipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'prioritized-pipe'
})
@Injectable()
export class PrioritizedPipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(todos:Todo[]) {
    
    return todos.filter(todo=> !todo.isDone).sort((a,b)=>(b.isImportant && !a.isImportant) ? 1 : -1);
  }
}
