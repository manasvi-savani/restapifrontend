import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-value',
  templateUrl: './cash-value.component.html',
  styleUrls: ['./cash-value.component.css']
})
export class CashValueComponent implements OnInit {

  // declare model data for this component
  total = 0

  constructor() { }

  ngOnInit(): void {
  }

  // we can declare methods of this class here
  handleSortie(value:number){
    // here we can handle the CUSTOM event from the child component
    this.total += value
  }
  // handleSellEvent(value:number){
  //   this.total -= value
  // }


}