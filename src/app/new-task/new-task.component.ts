import { Component, inject } from '@angular/core';
import { ObserService } from '../services/obser.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  text:string ='';
  obserService:ObserService = inject(ObserService);

  addInput(){
    this.obserService.onCreateTask(this.text)
    // console.log(this.text);
  }
}
