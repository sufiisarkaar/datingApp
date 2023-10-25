import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    SignupForm : FormGroup;
    loginForm :FormGroup
    submitted : boolean
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.SignupForm = new FormGroup({
      'firstName' :new FormControl([]),
      'lastName' :new FormControl([]),
      'email':new FormControl( []),
      'password' :new FormControl([]),
      'confirmPassword' :new FormControl(null,[ Validators.minLength(6), Validators.maxLength(30)])
    })
    this.loginForm = new FormGroup({
     
      'loginEmail':new FormControl( []),
      'loginPassword' :new FormControl([]),
     
    })
  }
signupData(){
  console.log("signupData",this.SignupForm.value);
  
}
loginData(){
  console.log("loginData====>",this.loginForm.value);
  
}
}
