import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent-on-change',
  templateUrl: './parent-on-change.component.html',
  styleUrls: ['./parent-on-change.component.css']
})
export class ParentOnChangeComponent implements OnInit{

  @Output() userName='Maria';
  

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  update(){
   this.userName='Chris';
   
  }

}
