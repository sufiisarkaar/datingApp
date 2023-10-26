import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  SignupForm: FormGroup;
  showconPassword: boolean = false
  showPassword: boolean = false;
  submitted: boolean
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //singnupForm
    this.SignupForm = new FormGroup({
      'firstName': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4),]),),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', Validators.required)
    },
      {
        validators: <any>this.mustMatch('password', 'confirmPassword')
      }
    )


  }
  signupData() {
    console.log("signupData", this.SignupForm.value);

  }

  get f() {
    return this.SignupForm.controls
  }


  mustMatch(password: any, conpassword: any) {
    return (FormGroup: FormGroup) => {
      const passwordControl = FormGroup.controls[password]
      const conpasswordControl = FormGroup.controls[conpassword]
      if (conpasswordControl.errors && !conpasswordControl.errors['mustMatch']) {
        return
      }
      if (passwordControl.value !== conpasswordControl.value) {
        conpasswordControl.setErrors({ mustMatch: true })
      }
      else {
        conpasswordControl.setErrors(null)
      }
    }
  }
  togglePasswordVisibility(e): void {
    if (e == "confirmPassword") {

      this.showconPassword = !this.showconPassword
    }
    else {

      this.showPassword = !this.showPassword; //  Toggle the password visibility
    }
  }
}
