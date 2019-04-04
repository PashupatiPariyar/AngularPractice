import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;

  constructor( private formBuilder: FormBuilder,
               private router: Router ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      'name':[this.user.name,[
        Validators.required
      ]],

      'password':[this.user.password,[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]]
    });

  }

  onLogin(){
      
    

    }   
}
