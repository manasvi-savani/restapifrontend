import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { CashValueComponent } from './cash-value/cash-value.component';
import { InsightsComponent } from './insights/insights.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { InvestmentValueComponent } from './investment-value/investment-value.component';


const routes: Routes = [
  {path:'', redirectTo: '/users', pathMatch:'full'},
  {path:'users', component: UsersComponent},
  {path:'net-worth', component: NetWorthComponent},
  {path:'cash-value', component: CashValueComponent},
  {path:'insights', component: InsightsComponent},
  {path:'market-movers', component: MarketMoversComponent},
  {path:'investment-value', component: InvestmentValueComponent},
  {path:'**', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
