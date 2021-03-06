import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/service/restapi.service';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userById:any = {category: 'users', id:5}
  userByName:any = {category: 'users', name: ''}
  stockInRangeBuy: any = {category: 'users', date1: '', date2: ''}
  stockInRangeSell: any = {category: 'users', date1: '', date2: ''}
  allUsers:any = {category: 'users'}
  date1:string = ''
  date2:string = ''
  category:string = 'users'
  name:string = ''
  id:number = 1
  paramObj = {category:'', id: 2}
  errorMessage = 'Result Not Found'

  

  constructor(private restapiService:RestapiService) { }


  serviceCallAllUsers(){
    // we call to a service method by subscribing to it 
    // remember the api call will be async so subscribing responds when it returns
    this.restapiService.getAllUsers({category: this.category}).subscribe( (data)=>{
        this.allUsers = data  
    } )}

  serviceCallUserById(){
    // we call to a service method by subscribing to it 
    // remember the api call will be async so subscribing responds when it returns
    this.restapiService.getUserById({category: this.category, id: this.id}).subscribe( (data)=>{
        this.userById = data
    } )
  }

  serviceCallUserByName(){
    // we call to a service method by subscribing to it 
    // remember the api call will be async so subscribing responds when it returns
    this.restapiService.getUserByName({category: this.category, name: this.name}).subscribe( (data)=>{
        this.userByName = data
    } )
  }

  

  ngOnInit(){
  
  
  }


}
