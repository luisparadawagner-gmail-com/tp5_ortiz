import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearPersonaComponent } from './componentes/crear-persona/crear-persona.component';
import { ConsultarPersonasComponent } from './componentes/consultar-personas/consultar-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearPersonaComponent,
    ConsultarPersonasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
