import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { Error404Component } from './componentes/error404/error404.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginpaginaComponent } from './componentes/loginpagina/loginpagina.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', component: IndexComponent, },
  { path: 'login', component: LoginpaginaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'dashboard', component: DashboardComponent, },
  { path: '**', component: Error404Component },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
