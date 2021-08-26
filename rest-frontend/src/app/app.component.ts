import { Component } from '@angular/core';
import { RestapiService} from 'src/service/restapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'rest-frontend';

  reportData = {name:''}
  totalNetworth:any = {category: 'users'}
  constructor(private restapiService:RestapiService) { }

  serviceCallTotalNetworth(){
    this.restapiService.getnetworth(this.totalNetworth).subscribe((data:any)=>{this.reportData = data})
  }


}
