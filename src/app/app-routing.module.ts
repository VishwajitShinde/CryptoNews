import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainnewsComponent } from './mainnews/mainnews.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'news', component: MainnewsComponent},
  { path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
