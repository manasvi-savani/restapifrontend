import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsersComponent } from './users.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { CashValueComponent } from './cash-value/cash-value.component';
import { InvestmentValueComponent } from './investment-value/investment-value.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { InsightsComponent } from './insights/insights.component';
import { AssetViewComponent } from './net-worth/asset-view/asset-view.component';

@NgModule({
  declarations: [
    UsersComponent,
    NetWorthComponent,
    CashValueComponent,
    InvestmentValueComponent,
    MarketMoversComponent,
    InsightsComponent,
<<<<<<< HEAD
    PortfolioViewComponent
=======
    AssetViewComponent
>>>>>>> bbdcce593fe46619a4bda0f6892ae1a1bb89bc28
  ],
  imports: [
    BrowserModule,
    UsersComponent
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class AppModule { }