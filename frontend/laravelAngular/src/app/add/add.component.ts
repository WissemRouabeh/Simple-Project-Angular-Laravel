import { EtudiantsService } from './../services/etudiants.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  etudiants: any;
  username: String = '';

  public add: FormGroup;
  constructor(
    public formbuilder: FormBuilder,
    public http: HttpClient,
    public etudiantservice: EtudiantsService,
    private route: Router
  ) {
    this.add = formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (localStorage.length < 1) this.route.navigateByUrl('/login');
    else {
      this.username = localStorage.getItem('logged') || 'none';
      this.etudiantservice.getEtudiants().subscribe((list) => {
        this.etudiants = list;
        console.log(list);
      });
    }
  }
  onadd() {
    const data = this.add.value;
    this.etudiantservice.createEtudiant(data).subscribe((response) => {
      console.log('yes', response);
      this.route.navigateByUrl('/');
    });
  }
  signout() {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
}
