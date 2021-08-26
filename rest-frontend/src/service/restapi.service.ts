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

  getBuyInRange(params={category:'users', date1: '2020-03-21', date2: '2020-03-27'}){
    return this.http.get(`http://restapi-restapi.namdevops21.conygre.com/${params.category}/buyInRange/${params.date1}/${params.date2}` )
    }

  getSellInRange(params={category:'users', date1: '2020-03-21', date2: '2020-03-27'}){
    return this.http.get(`http://restapi-restapi.namdevops21.conygre.com/${params.category}/sellInRange/${params.date1}/${params.date2}` )
    }
  
  getnetworth(params={category:'users'}){
    return this.http.get(`http://restapi-restapi.namdevops21.conygre.com/${params.category}/net_worth`)
  }

  getcash(params={category:'users'}){
    return this.http.get(`http://restapi-restapi.namdevops21.conygre.com/${params.category}/total_cash`)
  }
  
  gettodaygl(params={category:'users'}){
    return this.http.get(`http://restapi-restapi.namdevops21.conygre.com/${params.category}/todaygl`)
  }

  gettotalgl(params={category:'users'}){
    return this.http.get(`http://restapi-restapi.namdevops21.conygre.com/${params.category}/tgainloss`)
  }

  gettop5gainers(params={category:'users'}){
    return this.http.get(`http://restapi-restapi.namdevops21.conygre.com/${params.category}/top5`)
  }
}
