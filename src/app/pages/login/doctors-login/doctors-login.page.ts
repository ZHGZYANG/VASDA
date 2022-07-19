import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Doctor } from 'src/app/interface/doctor';


@Component({
  selector: 'app-doctors-login',
  templateUrl: './doctors-login.page.html',
  styleUrls: ['./doctors-login.page.scss'],
})

export class DoctorsLoginPage implements OnInit {

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
    ) {
    }

  
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

    
    var doctor: Doctor = {
      D_id: undefined,
      Username: this.username.value,
      Password: this.password.value,
      FName: undefined,
      LName: undefined,
      Email: undefined,
      Profile_Picture: undefined,
      Patient_Array: undefined
    }
    
    this.userService.verifyUser(doctor).subscribe(
      (response: { [x: string]: number; }) => {
        if(response['HTTP STATUS'] == 201 && response['USER']['D_id']){
  
          this.isAuthenticated = true;
          this.submitted = false;
  
          doctor.D_id = response['USER']['D_id'];
          doctor.FName = response['USER']['FName'];            
          doctor.LName = response['USER']['LName'];
          doctor.Email = response['USER']['Email'];
          doctor.Profile_Picture = response['USER']['Profile_Picture'];
          doctor.Patient_Array = response['USER']['Patient_Array']
  
          sessionStorage.setItem('user', JSON.stringify(doctor));
  
          (<HTMLInputElement>document.getElementById("username")).value = '';
          (<HTMLInputElement>document.getElementById("password")).value = '';
          this.alert = "";
              
          this.router.navigateByUrl('main-doctors');
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
    this.router.navigateByUrl('/login');
  };

  btnForgotPassword = function(){
    this.router.navigateByUrl('/forget-password');
  };

  btnRegister = function(){
    this.router.navigateByUrl('/user-registration');
  }
}
