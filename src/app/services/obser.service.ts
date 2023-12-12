import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserService {
  constructor() { }

  // createTask : EventEmitter<string> = new EventEmitter<string>();

  createTask = new Subject<string>();

  onCreateTask(val:string){
    this.createTask.next(val);
  }


}
