import { Component, OnInit} from '@angular/core';
import { RestapiService} from 'src/service/restapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'rest-frontend';

  constructor() { }

  ngOnInit(){
  
  }
}
