import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/service/restapi.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {
  stockInRangeBuy: any = {category: 'users', date1: '', date2: ''}
  stockInRangeSell: any = {category: 'users', date1: '', date2: ''}
  allUsers:any = {category: 'users'}
  date1:string = ''
  date2:string = ''
  category:string = 'users'
  constructor(private restapiService:RestapiService) { }

  ngOnInit(): void {
  }

  serviceBuyStockInRange(){
    // we call to a service method by subscribing to it 
    // remember the api call will be async so subscribing responds when it returns
    this.restapiService.getBuyInRange({category: this.category, date1: this.date1, date2: this.date2}).subscribe( (data) =>{
        this.stockInRangeBuy = data
    } )
  }

  serviceSellStockInRange(){
    // we call to a service method by subscribing to it 
    // remember the api call will be async so subscribing responds when it returns
    this.restapiService.getSellInRange({category: this.category, date1: this.date1, date2: this.date2}).subscribe( (data)=>{
        this.stockInRangeSell = data
    } )
  }


}
