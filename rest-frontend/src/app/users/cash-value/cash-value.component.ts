import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/service/restapi.service';

@Component({
  selector: 'app-cash-value',
  templateUrl: './cash-value.component.html',
  styleUrls: ['./cash-value.component.css']
})
export class CashValueComponent implements OnInit {


  constructor(private restapiService:RestapiService) { }

  cash:any = {category: 'users',value:''}
  header = ['id','account','value']
 
  serviceCallAllCash(){
    this.restapiService.getcash_t(this.cash).subscribe((data:any)=>{this.cash = data})
  }

  ngOnInit(): void {
    this.serviceCallAllCash()
  }
}
