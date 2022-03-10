import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaisListComponent } from './pais-list/pais-list.component';
import { PaisFormComponent } from './pais-form/pais-form.component';

import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaFormComponent } from './persona-form/persona-form.component';

const routes: Routes = [
  { path: 'paises', component: PaisListComponent},
  { path: 'addpaises', component: PaisFormComponent },
  { path: 'personas', component: PersonaListComponent},
  { path: 'addpersonas', component: PersonaFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
