import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit{

  value!: number;

  ngOnInit(): void {
    let mark=580;
    let total=600
    this.value=mark/total * 100;
  }



}
