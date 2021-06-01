import { UsersService } from './../services/users.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  message: any;
  constructor(
    public http: HttpClient,
    public userservice: UsersService,
    private route: Router
  ) {}

  ngOnInit(): void {}
  clickLogin() {
    if (this.username === '') this.message = 'Username is required';
    else if (this.password === '') this.message = 'Password is required';
    else this.login();
  }
  login() {
    this.userservice
      .loginUser({
        username: this.username,
        password: this.password,
      })
      .subscribe((response) => {
        const succes = 'Login Successfully';
        this.message = response;
        console.log(response);

        const ti = timer(1000, 1000);
        this.message === succes &&
          ti.subscribe((t) => {
            this.route.navigateByUrl('/');
          });
      });
  }
}
