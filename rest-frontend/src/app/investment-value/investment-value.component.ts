import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/service/restapi.service';

@Component({
  selector: 'app-investment-value',
  templateUrl: './investment-value.component.html',
  styleUrls: ['./investment-value.component.css']

})
export class InvestmentValueComponent implements OnInit {


  constructor(private restapiService:RestapiService) { }

  stocks:any = {category: 'users',value:''}
  header = ['id','stock_name','quantity','sale_price','close_price','cost','market_value']

  serviceCallAllStocks(){
    this.restapiService.getstocks(this.stocks).subscribe((data:any)=>{this.stocks = data})
  }
  ngOnInit(): void {
    this.serviceCallAllStocks()
  }

}