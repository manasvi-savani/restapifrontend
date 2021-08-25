import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-value',
  templateUrl: './investment-value.component.html',
  styleUrls: ['./investment-value.component.css']
})
export class InvestmentValueComponent implements OnInit {

  // declare model data for this component
  total = 0
  codes = [
    {code:'AMZN', price:42}, // member zero
    {code:'NFLX', price:12}, // member 1
    {code:'GOOGL', price:142},
    {code:'FB', price:82},
    {code:'AAPL', price:11},
  ]

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


  handleCodeChangeEvent(whichCode:any){
    this.codes[whichCode['index']].code = whichCode['code']
  }

}