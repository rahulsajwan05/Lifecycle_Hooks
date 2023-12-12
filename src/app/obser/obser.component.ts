import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obser',
  templateUrl: './obser.component.html',
  styleUrls: ['./obser.component.css']
})
export class ObserComponent implements OnInit {

  data:any[] =[]
  msg:any;
  constructor() { }

  ngOnInit(): void {
  }

  //creating an observable
  myObservable = new Observable((observer)=>{ 
    // observer.next([1,2,3,4,5]);
    setTimeout(() => { observer.next(1) }, 1000);
    setTimeout(() => { observer.next(2) }, 2000);
    setTimeout(() => { observer.next(3) }, 3000);
    setTimeout(() => { observer.error(new Error('something is wrong')) }, 3000);
    setTimeout(() => { observer.next(4) }, 4000);
    setTimeout(() => { observer.next(5) }, 5000);
    setTimeout(() => { observer.complete() }, 5000);
    

  })

  getAsyncData(){

    //  this.myObservable.subscribe((val:any) => {
    //   this.data.push(val);
    //  }, (error) =>{
    //     alert(error.message)
    //  } , ()=>{
    //   alert("Task in completed")
    //  })   

    this.myObservable.subscribe({
  
      next: (val:any) => {
        this.data.push(val);
      }, error: (err)=>{
        this.msg(err);
        // alert(err.message)
      },
      complete(){
        alert("Task in completed")
      }
    })
  }

  

}
