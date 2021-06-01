import { UsersService } from './../services/users.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username: any;
  password: any;
  confirmpassword: any;
  message: any;
  constructor(
    public http: HttpClient,
    public userservice: UsersService,
    private route: Router
  ) {}

  ngOnInit(): void {}
  clickRegister() {
    if (this.username === '') this.message = 'Username is required';
    else if (this.password === '') this.message = 'Password is required';
    else if (this.password !== this.confirmpassword)
      this.message = 'Comfirm the password!';
    else this.register();
  }
  register() {
    this.userservice.checkUser(this.username).subscribe((response) => {
      if (Object.keys(response).length === 0) {
        if (this.password == this.confirmpassword)
          this.userservice
            .createUser({ username: this.username, password: this.password })
            .subscribe((response) => {
              console.log(response);
              this.route.navigateByUrl('/');
            });
      } else {
        this.message = 'Username already exist';
      }
    });
  }
}
