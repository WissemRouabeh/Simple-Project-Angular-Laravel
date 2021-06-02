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
  searchinput: String = '';
  username: String = '';
  constructor(public etudiantservice: EtudiantsService, public route: Router) {}

  ngOnInit(): void {
    if (localStorage.length < 1) this.route.navigateByUrl('/login');
    else {
      this.getAllEtudiants();
      this.username = localStorage.getItem('logged') || 'none';
    }
  }
  search() {
    if (this.searchinput !== '') {
      this.etuds = this.etuds.filter((val: any) =>
        val.firstname.startsWith(this.searchinput)
      );

      if (this.etuds.length == 0) {
        alert('No result found');
      }

      this.searchinput = '';
    } else {
      this.getAllEtudiants();
    }
  }
  all() {
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
  signout() {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
}
