import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant';
@Injectable({
  providedIn: 'root',
})
export class EtudiantsService {
  constructor(public http: HttpClient) {}

  createEtudiant(item: any): Observable<Etudiant> {
    return this.http.post<Etudiant>(
      'http://localhost:8000/api/etudiants/add',
      item
    );
  }
  updateEtudiant(id: any, item: any): Observable<Etudiant> {
    return this.http.put<Etudiant>(
      'http://localhost:8000/api/etudiants/update/' + id,
      item
    );
  }
  getEtudiants(): Observable<Etudiant> {
    return this.http.get<Etudiant>('http://localhost:8000/api/etudiants/index');
  }
  getEtudiant(id: any): Observable<Etudiant> {
    return this.http.get<Etudiant>(
      'http://localhost:8000/api/etudiants/view/' + id
    );
  }
  deleteEtudiant(id: any): Observable<Etudiant> {
    return this.http.delete<Etudiant>(
      'http://localhost:8000/api/etudiants/delete/' + id
    );
  }
}
