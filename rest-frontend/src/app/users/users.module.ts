import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsersComponent } from './users.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { CashValueComponent } from './cash-value/cash-value.component';
import { InvestmentValueComponent } from './investment-value/investment-value.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { InsightsComponent } from './insights/insights.component';

@NgModule({
  declarations: [
    UsersComponent,
    NetWorthComponent,
    CashValueComponent,
    InvestmentValueComponent,
    MarketMoversComponent,
    InsightsComponent
  ],
  imports: [
    BrowserModule,
    UsersComponent
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class AppModule { }