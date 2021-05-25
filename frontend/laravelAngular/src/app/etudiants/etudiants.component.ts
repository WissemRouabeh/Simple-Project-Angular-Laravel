import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css'],
})
export class EtudiantsComponent implements OnInit {
  etuds: any;
  etudiant = [];
  constructor(public etudiantservice: EtudiantsService, public route: Router) {}

  ngOnInit(): void {
    this.getAllEtudiants();
  }
  show() {
    this.route.navigateByUrl('/add');
  }
  getAllEtudiants() {
    this.etudiantservice.getEtudiants().subscribe((list) => {
      this.etuds = list;
      console.log(list);
    });
  }
  delete(etudiant: any) {
    this.etudiantservice.deleteEtudiant(etudiant.id).subscribe((response) => {
      this.getAllEtudiants();
    });
  }
}
