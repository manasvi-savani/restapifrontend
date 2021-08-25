import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { NetWorthComponent } from './users/net-worth/net-worth.component';
import { CashValueComponent } from './users/cash-value/cash-value.component';
import { InsightsComponent } from './users/insights/insights.component';
import { MarketMoversComponent } from './users/market-movers/market-movers.component';
import { InvestmentValueComponent } from './users/investment-value/investment-value.component';


const routes: Routes = [
  {path:'', redirectTo: '/users', pathMatch:'full'},
  {path:'users', component: UsersComponent},
  {path:'users/net-worth', component: NetWorthComponent},
  {path:'users/cash-value', component: CashValueComponent},
  {path:'users/insights', component: InsightsComponent},
  {path:'users/market-movers', component: MarketMoversComponent},
  {path:'users/investment-value', component: InvestmentValueComponent},
  {path:'**', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
