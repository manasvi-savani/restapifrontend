import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashValueComponent } from './cash-value/cash-value.component';
import { InsightsComponent } from './insights/insights.component';
import { InvestmentValueComponent } from './investment-value/investment-value.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { NetWorthComponent } from './net-worth/net-worth.component';

const routes: Routes = [
  {path:'', redirectTo: '/cash-value', pathMatch:'full'},
  {path:'cash-value', component: CashValueComponent},
  {path:'insights', component: InsightsComponent},
  {path:'investment-value', component: InvestmentValueComponent},
  {path:'market-movers', component: MarketMoversComponent},
  {path:'net-worth', component: NetWorthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
