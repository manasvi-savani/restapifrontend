import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { CashValueComponent } from './cash-value/cash-value.component';
import { InvestmentValueComponent } from './investment-value/investment-value.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { InsightsComponent } from './insights/insights.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestapiService } from 'src/service/restapi.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NetWorthComponent,
    CashValueComponent,
    InvestmentValueComponent,
    MarketMoversComponent,
    InsightsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // the FormsModule is needed for forms,
    HttpClientModule, BrowserAnimationsModule,
    FontAwesomeModule


  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
