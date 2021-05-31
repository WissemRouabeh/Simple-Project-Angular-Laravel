import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(public http: HttpClient) {}

  createUser(item: any): Observable<User> {
    return this.http.post<User>('http://localhost:8000/api/users/add', item);
  }

  checkUser(username: any): Observable<User> {
    return this.http.get<User>(
      'http://localhost:8000/api/users/check/' + username
    );
  }

  loginUser(item: any): Observable<User> {
    return this.http.post<User>('http://localhost:8000/api/users/login', item);
  }
  getUser(id: any): Observable<User> {
    return this.http.get<User>('http://localhost:8000/api/Users/view/' + id);
  }
  deleteUser(id: any): Observable<User> {
    return this.http.delete<User>(
      'http://localhost:8000/api/Users/delete/' + id
    );
  }
}
