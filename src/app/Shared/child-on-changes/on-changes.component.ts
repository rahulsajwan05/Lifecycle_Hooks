import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnChanges{

  @Input() userName:String | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log(changes['userName'].isFirstChange());

    if (!changes['userName'].isFirstChange()){
      if (changes['userName'].currentValue === "Chris") {
         this.userName = 'Hello ' + this.userName
      } else {
         this.userName = changes['userName'].previousValue
      }
   }
  }

}
