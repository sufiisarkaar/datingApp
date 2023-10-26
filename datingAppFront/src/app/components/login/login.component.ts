import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup
  showPassword: boolean = false; 
  constructor() { }

  ngOnInit(): void {
     //loginForm
     this.loginForm = new FormGroup({
     
      'loginEmail':new FormControl( '',Validators.compose([Validators.required,Validators.email])),
      'loginPassword' :new FormControl('',Validators.required),
     
    })
  }
  loginData(){
    console.log("loginData====>",this.loginForm.value);
    }
    get loginControls(){
      return this.loginForm.controls
    }
    togglePasswordVisibility(){

  this.showPassword =!this.showPassword
}
}
