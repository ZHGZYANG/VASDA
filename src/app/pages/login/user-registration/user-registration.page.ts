import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, FormBuilder, FormArrayName } from '@angular/forms';
import { Validators } from '@angular/forms';

import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.page.html',
  styleUrls: ['./user-registration.page.scss'],
})
export class UserRegistrationPage implements OnInit {

  alert = '';
  formInputs: FormGroup;

  get fname(){
    return this.formInputs.get('fname');
  }
  get lname(){
    return this.formInputs.get('lname');
  }
  get email(){
    return this.formInputs.get('email');
  }
  get username(){
    return this.formInputs.get('username');
  }
  get password(){
    return this.formInputs.get('password');
  }
  get re_password(){
    return this.formInputs.get('re_password');
  }

  constructor(
    private router: Router, 
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    localStorage.clear();
    this.formInputs = this.formBuilder.group(
      {
        fname: new FormControl('', Validators.required),
        lname: new FormControl('', Validators.required),
        email: new FormControl('',
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ]),
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        re_password: new FormControl('', Validators.required)
      }
    )
  };

  btnRegister = function() {

    if(this.password.value != this.re_password.value){
      this.alert = "Passwords do not match."
      return;
    }
    else{
      var user: User = {
        P_id: undefined,
        FName: this.fname.value,
        LName: this.lname.value,
        Username: this.username.value,
        Password: this.username.value,
        Email: this.email.value,
        Profile_Picture: undefined,
        Survey_Status: undefined,
        Wound_Status: undefined
      }

      this.userService.verifyUser(user).subscribe(
        (response: { [x: string]: number; }) => {
          if(response['HTTP STATUS'] == 201 || response['HTTP STATUS'] == 409){
            //we have found a user with the credentials, change alert and try again
            this.alert = "Username already exists";
            (<HTMLInputElement>document.getElementById("password")).value = '';
            (<HTMLInputElement>document.getElementById("re-password")).value = '';

            return;
          } 
          else if(response['HTTP STATUS'] == 410){
            //username does not exist but email is in use
            this.alert = "Email already in use";

            (<HTMLInputElement>document.getElementById("password")).value = '';
            (<HTMLInputElement>document.getElementById("re-password")).value = '';

            return;
          }
          else //there was not a user found with the username and password combo
          {
            this.userService.registerUser(user).subscribe(
              (response: { [x: string]: number; }) => {
                if(response['HTTP STATUS'] == 201){
                  this.alert = '';
                  localStorage.clear();
                  this.router.navigateByUrl('login')
                }
                else{
                  this.alert = 'Server Error';
                  this.router.navigateByUrl('user-registration');
                }
              }
            )
          }
        }) 
      }
    }

  btnPatient = function() {
    this.router.navigateByUrl('login');
  }
  btnDoctor = function() {
    this.router.navigateByUrl('/doctors-login');
  }
}
