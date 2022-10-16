import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavarComponent } from './componentes/navar/navar.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardysoftComponent } from './componentes/hardysoft/hardysoft.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { Error404Component } from './componentes/pagina404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavarComponent,
    SobreMiComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardysoftComponent,
    ProyectosComponent,
    ModalComponent,
    FooterComponent,
    Pagina404Component,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
