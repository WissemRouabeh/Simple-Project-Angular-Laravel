import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EtudiantUpdateComponent } from './etudiant-update/etudiant-update.component';
const routes: Routes = [
  {
    path: 'add',
    component: AddComponent,
  },
  { path: '', component: EtudiantsComponent },
  { path: 'update/:id', component: EtudiantUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
