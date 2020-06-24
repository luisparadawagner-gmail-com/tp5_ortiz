import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarPersonasComponent } from './componentes/consultar-personas/consultar-personas.component';
import { CrearPersonaComponent } from './componentes/crear-persona/crear-persona.component';

const routes: Routes = [
  { path: 'consultar-personas', component: ConsultarPersonasComponent },
  { path: 'crear-persona', component: CrearPersonaComponent },
  { path: '', redirectTo: 'consultar-personas', pathMatch: 'full' },
  { path: '**', component: ConsultarPersonasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
