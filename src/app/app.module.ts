import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalculadoraComponent,
    PermisosComponent,
    OperacionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
