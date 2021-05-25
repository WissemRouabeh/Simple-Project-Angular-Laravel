import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EtudiantUpdateComponent } from './etudiant-update/etudiant-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'add',
    component: AddComponent,
  },
  { path: '', component: EtudiantsComponent },
  { path: 'update/:id', component: EtudiantUpdateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EtudiantsComponent,
    EtudiantUpdateComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
