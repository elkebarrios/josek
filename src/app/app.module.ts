import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavarComponent } from './componentes/navar/navar.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardysoftComponent } from './componentes/hardysoft/hardysoft.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Error404Component } from './componentes/error404/error404.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { IndexComponent } from './componentes/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalRedesComponent } from './componentes/modal/modal-redes/modal-redes.component';
import { ModalDatospersonalesComponent } from './componentes/modal/modal-datospersonales/modal-datospersonales.component';
import { ModalExperienciaComponent } from './componentes/modal/modal-experiencia/modal-experiencia.component';
import { ModalEstudiosComponent } from './componentes/modal/modal-estudios/modal-estudios.component';
import { ModalHabilidadesComponent } from './componentes/modal/modal-habilidades/modal-habilidades.component';
import { ModalProyectoComponent } from './componentes/modal/modal-proyecto/modal-proyecto.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginpaginaComponent } from './componentes/loginpagina/loginpagina.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavarComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardysoftComponent,
    ProyectosComponent,
    ModalComponent,
    FooterComponent,
    Error404Component,
    DashboardComponent,
    IndexComponent,
    ModalRedesComponent,
    ModalDatospersonalesComponent,
    ModalExperienciaComponent,
    ModalEstudiosComponent,
    ModalHabilidadesComponent,
    ModalProyectoComponent,
    LogoutComponent,
    LoginComponent,
    LoginpaginaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
