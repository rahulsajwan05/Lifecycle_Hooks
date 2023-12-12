import { Component, OnInit, inject } from '@angular/core';
import { ObserService } from '../services/obser.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {
  
  myArray: string[]=['A','B','C'];
  obserService:ObserService = inject(ObserService);
  
  ngOnInit(): void {
    this.obserService.createTask.subscribe((value)=>{
      this.myArray.push(value)
    })
  }


}
