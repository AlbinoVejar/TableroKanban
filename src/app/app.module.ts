import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TareaComponent } from './dialogs/tarea/tarea.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NombreSeccionComponent } from './dialogs/nombre-seccion/nombre-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    TareaComponent,
    SeccionComponent,
    TableroComponent,
    NavbarComponent,
    NombreSeccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
