import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './seccion1/header/header.component';
import { TextoComponent } from './seccion1/texto/texto.component';
import { ContenidoComponent } from './seccion1/contenido/contenido.component';
import { SnheaderComponent } from './seccion2/snheader/snheader.component';
import { SncontenidoComponent } from './seccion2/sncontenido/sncontenido.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './seccion3/forms/forms.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextoComponent,
    ContenidoComponent,
    SnheaderComponent,
    SncontenidoComponent,
    HomeComponent,
    NavbarComponent,
    Seccion2Component,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
