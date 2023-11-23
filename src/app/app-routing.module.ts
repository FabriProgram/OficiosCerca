import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTES IMPORTADOS
import { ListPersonasComponent } from './components/list-personas/list-personas.component';
import { AddEditPersonasComponent } from './components/add-edit-personas/add-edit-personas.component';

//RUTAS
const routes: Routes = [
  { path: '', component: ListPersonasComponent },
  { path: 'add', component: AddEditPersonasComponent },
  { path: 'edit/:id', component: AddEditPersonasComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
