import { EtudiantsService } from './../services/etudiants.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-update',
  templateUrl: './etudiant-update.component.html',
  styleUrls: ['./etudiant-update.component.css'],
})
export class EtudiantUpdateComponent implements OnInit {
  etudiants: any;
  public edit: FormGroup;
  id: any;
  constructor(
    public formbuilder: FormBuilder,
    public http: HttpClient,
    public etudiantservice: EtudiantsService,
    private route: Router,
    public router: ActivatedRoute
  ) {
    this.edit = formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.etudiantservice.getEtudiants().subscribe((list) => {
      this.etudiants = list;
      console.log(list);
      this.edit.patchValue(this.etudiants);
    });
  }
  update() {
    const data = this.edit.value;
    this.etudiantservice.updateEtudiant(this.id, data).subscribe((response) => {
      this.edit.reset();
      console.log('yes', response);
      this.route.navigateByUrl('/');
    });
  }
}
