import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(private router:Router, private user:UserService) { }
  title = 'Login Page';
  ngOnInit() {}

  loginUser(e){
    e.preventDefault();
     var username = e.target.elements[0].value;
     var password = e.target.elements[1].value;
     
    if(username =='admin' && password =='password'){
     this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }
    else if(username =='Rahul' && password =='password'){
      this.user.setUserLoggedIn();
      this.router.navigate(['employee-list']);
    }
  }
}
