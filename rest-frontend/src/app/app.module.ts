import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NetWorthComponent } from './users/net-worth/net-worth.component';
import { CashValueComponent } from './users/cash-value/cash-value.component';
import { InvestmentValueComponent } from './users/investment-value/investment-value.component';
import { MarketMoversComponent } from './users/market-movers/market-movers.component';
import { InsightsComponent } from './users/insights/insights.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NetWorthComponent,
    CashValueComponent,
    InvestmentValueComponent,
    //AssetViewComponent,
    MarketMoversComponent,
    InsightsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // the FormsModule is needed for forms,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
