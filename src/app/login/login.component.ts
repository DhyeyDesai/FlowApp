import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  model = new User("admin@flowapp.com", "admin");
  submitted = false;
  constructor(private router: Router){}

  onClickSubmit(data:any) {
    console.log(this.model)
    if (data.email===this.model.email && data.password===this.model.password){
      this.router.navigate(['/all-workflows']);
    }
    else{
      alert("Incorrect login details")
    }
    // this.submitted = true;
  }

}
