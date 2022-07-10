import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  handleLogin() {
    console.log('Clicked');
  }
  
  model = new User("admin@flowapp.com", "admin");
  submitted = false;
  constructor(private router: Router){}

  onSubmit() {
    this.submitted = true;
    this.router.navigate(['/all-workflows']);
  }

}
