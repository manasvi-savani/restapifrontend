import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

  getAllUsers(params={category:'users'}){
    return this.http.get(`http://restapi-restapi.namdevops21.conygre.com/${params.category}` )
    }

  getUserById(params={category:'users', id:2}){
    return this.http.get(`http://restapi-restapi.namdevops21.conygre.com/${params.category}/${params.id}` )
    }


  getUserByName(params={category:'users', name: 'Jane Doe'}){
    return this.http.get(`http://restapi-restapi.namdevops21.conygre.com/${params.category}/name/${params.name}` )
    }
  
}
