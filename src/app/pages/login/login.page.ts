import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/interface/user';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isAuthenticated = false;
  submitted = false;
  alert = '';
  formInputs: FormGroup;

  get username(){
    return this.formInputs.get('username');
  }
  get password(){
    return this.formInputs.get('password');
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
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      }
    ) 
  };

  btnLogin = function(){

    this.submitted = true;

    
    var user: User = {
      P_id: undefined,
      FName: undefined,
      LName: undefined,
      Username: this.username.value,
      Password: this.password.value,
      Email: undefined,
      Profile_Picture: undefined,
      Survey_Status: undefined,
      Wound_Status: undefined
    }
    
    this.userService.verifyUser(user).subscribe(
      (response: { [x: string]: number; }) => {
        if(response['HTTP STATUS'] == 201 && response['USER']['P_id']){
  
          this.isAuthenticated = true;
          this.submitted = false;

          const chat = response['RECORD']['Chat_Array']
          const appointments = response['RECORD']['Appointment_Array']
          const instructions = response['RECORD']['Discharge_Instructions']
  
          user.P_id = response['USER']['P_id']['$oid'];
          user.FName = response['USER']['FName'];            
          user.LName = response['USER']['LName'];
          user.Email = response['USER']['Email'];
          user.Profile_Picture = response['USER']['Profile_Picture'];
  
          sessionStorage.setItem('user', JSON.stringify(user));
          sessionStorage.setItem('chat',JSON.stringify(chat));
          sessionStorage.setItem('appointments',JSON.stringify(appointments));
          sessionStorage.setItem('instruction',JSON.stringify(instructions));


          (<HTMLInputElement>document.getElementById("username")).value = '';
          (<HTMLInputElement>document.getElementById("password")).value = '';
          this.alert = "";
              
          this.router.navigateByUrl('main-patients');
        } 
        else
        {
          this.isAuthenticated = false;
          this.alert = "Invalid username or password.";
          (<HTMLInputElement>document.getElementById("password")).value = '';
  
          return;
        }
      },
      (error: any) => {
        this.alert = "An unexpected error has occured."
        this.router.navigateByUrl('login');
      }
    )
  }

  btnClick = function(){
    this.router.navigateByUrl('/doctors-login');
  };

  btnForgotPassword = function(){
    this.router.navigateByUrl('/forget-password');
  };

  btnRegister = function(){
    this.router.navigateByUrl('/user-registration');
  }
}
