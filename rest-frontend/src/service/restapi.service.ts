import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

    getApiData(params={category:'users'}){
      return this.http.get(`http://restapi-restapi.namdevops21.conygre.com/${params.category}`)
      }
  
}
