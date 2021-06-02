import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  username: String = '';

  constructor(public route: Router) {}

  ngOnInit(): void {
    if (localStorage.length < 1) this.route.navigateByUrl('/login');
    else {
      this.username = localStorage.getItem('logged') || 'none';
    }
  }
  signout() {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
}
