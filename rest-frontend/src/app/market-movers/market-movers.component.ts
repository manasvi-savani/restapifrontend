import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/service/restapi.service';

@Component({
  selector: 'app-market-movers',
  templateUrl: './market-movers.component.html',
  styleUrls: ['./market-movers.component.css']
})
export class MarketMoversComponent implements OnInit {

  reportData = {name:''}
  reportCash = {cash:''}
  reporttgl = {}
  reportgl = {}

  totalNetworth:any = {category: 'users'}
  totalcash:any = {category: 'users'}
  todaygl:any ={category: 'users'}
  totalgl:any = {category: 'users'}
  top5:any = {category: 'users', name:''}
  loser5:any = {category: 'users', name:''}
  errorMessage = 'Result Not Found'
  category:string = 'users'
  name:string = ''

  constructor(private restapiService:RestapiService) { }

  serviceCallTotalNetworth(){
    this.restapiService.getnetworth(this.totalNetworth).subscribe((data:any)=>{this.reportData = data})
  }

  serviceCallTotalCash(){
    this.restapiService.getcash(this.totalcash).subscribe((data:any)=>{this.reportCash = data})
  }

  serviceCallTodayGL(){
    this.restapiService.gettodaygl(this.todaygl).subscribe((data:any)=>{this.reporttgl = data})
  }

  serviceCallTotalGL(){
    this.restapiService.gettotalgl(this.totalgl).subscribe((data:any)=>{this.reportgl = data})
  }

  gettop5gainers(){
    this.restapiService.gettop5gainers({category: this.category}).subscribe((data:any)=>{this.top5 = data})
  }
  
  serviceCall5loser(){
    this.restapiService.get5loser({category: this.category}).subscribe((data:any)=>{this.loser5 = data})
  }

  ngOnInit(){
    this.serviceCallTotalCash()
    this.serviceCallTotalNetworth()
    this.serviceCallTotalGL()
    this.serviceCallTodayGL()
    this.gettop5gainers()
    this.serviceCall5loser()
  }

}
