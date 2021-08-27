import { Component, OnInit} from '@angular/core';
import { RestapiService} from 'src/service/restapi.service';
import { faUser, faArrowUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'rest-frontend';
  faUser = faUser;
  faArrowUp = faArrowUp;
  constructor() { }

  ngOnInit(){
  
  }
}
