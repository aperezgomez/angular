import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  constructor() {}
  counterValue = 0;
  ngOnInit(): void {

  }

  incrementCounter(): void{
    this.counterValue++;
  }

  decrementCounter(): void{
    if(this.counterValue==0){
      alert("Counter Value has reached its minimum of 0. It cannot be negative.");
      return;
    }
    this.counterValue--;
  }

}
