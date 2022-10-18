import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { Error404Component } from './componentes/error404/error404.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: '**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
