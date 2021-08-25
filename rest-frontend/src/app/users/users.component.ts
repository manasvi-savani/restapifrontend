import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/restapi.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  apiData:any = {category: ''}
  category:string = 'users'
  paramObj = {category:'users'}

  constructor(private restapiService:RestapiService) { }

  ngOnInit(): void {
  }

  makeServiceCall(){
    // we call to a service method by subscribing to it 
    // remember the api call will be async so subscribing responds when it returns
    this.restapiService.getApiData({category: this.category}).subscribe( (data)=>{
        this.apiData = data
    } )
  }

}
