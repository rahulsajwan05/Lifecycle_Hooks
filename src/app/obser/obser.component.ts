import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-obser',
  templateUrl: './obser.component.html',
  styleUrls: ['./obser.component.css']
})
export class ObserComponent implements OnInit,AfterViewInit {

  @ViewChild('btnobser')
  btnobser:ElementRef
  data:any[] =[]
  msg:any;
  createBtnmyObservable
  constructor() { }
  

  ngOnInit(): void {
  }

  myArray=[1,2,3,4,5];
  myArray1=['A','B','C','D','E'];


   
  //creating an observable
  // myObservable = new Observable((observer)=>{ 
  //   setTimeout(() => { observer.next(1) }, 1000);
  //   setTimeout(() => { observer.next(2) }, 2000);
  //   setTimeout(() => { observer.next(3) }, 3000);
  //   setTimeout(() => { observer.error(new Error('something is wrong')) }, 3000);
  //   setTimeout(() => { observer.next(4) }, 4000);
  //   setTimeout(() => { observer.next(5) }, 5000);
  //   setTimeout(() => { observer.complete() }, 5000);
  // })

  // myObservable= of(this.myArray,this.myArray1)

  myObservable= from([1,2,4,5,3,6]);

  //transform the data emitted by the source observable in some way 
  filterObs = this.myObservable.pipe(map((val) =>{
    return val*10;
  }),filter((val) =>{
    return val%4 === 0;
  }))

  //filter the data emitted by the source observable in some c 
  // filterObs = this.trasObservable.pipe(filter((val) =>{
  //   return val%4 === 0;
  // }))

  getAsyncData(){
    //  this.myObservable.subscribe((val:any) => {
    //   this.data.push(val);
    //  }, (error) =>{
    //     alert(error.message)
    //  } , ()=>{
    //   alert("Task in completed")
    //  })   

    this.filterObs.subscribe({
      next: (val:any) => {
        this.data.push(val);
      }, error: (err)=>{
        this.msg=err;
        alert(this.msg)
      },
      // complete(){
      //   alert("Task in completed")
      // }
    });
  }

  // buttonClicked(){
  //   this.createBtnmyObservable=fromEvent(this.btnobser.nativeElement,'click').subscribe((res) =>{
  //     console.log(res)
  //     this.showNewItem()
  //   })
  // }

  ngAfterViewInit(): void {
  //  this.buttonClicked();
  }

  // showNewItem(){
  //   let div=document.createElement('div');
  //   div.innerText='item'
  //   document.getElementById('container').appendChild(div)
  // }
}
