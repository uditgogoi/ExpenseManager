import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllExpensesComponent } from './components/all-expenses/all-expenses.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'all-expenses', component: AllExpensesComponent},
  {path: 'analytics', component: AnalyticsComponent},
  {path: '**', component: NotFoundComponent},
  
]


@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
