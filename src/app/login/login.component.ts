import { Component, OnInit } from '@angular/core';
import { User } from './User';
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
  onSubmit() {
    console.log(this.model)
    this.submitted = true;
  }

}
