import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';
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
    private doctorService:DoctorServiceService,
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
    
    this.doctorService.verifyUser(this.username.value, this.password.value).subscribe(
      (response) => {
        for(var k of response){
          console.log(k)
           if(this.username.value==k['doctor_username'] && this.password.value==k['doctor_password']){

            this.isAuthenticated = true;
            this.submitted = false;


             //storing recordid_pss and recap_event_name to make changes to the user on Redcap simply by passing in the entire object
            k['redcap_event_name'] = 'patients_arm_2'

            sessionStorage.setItem('user', JSON.stringify(k));  
  
            (<HTMLInputElement>document.getElementById("username")).value = '';
            (<HTMLInputElement>document.getElementById("password")).value = '';
            this.alert = "";
                
            this.router.navigateByUrl('main-doctors');
          } 
        }

        
        this.isAuthenticated = false;
        this.alert = "Invalid username or password.";
        (<HTMLInputElement>document.getElementById("password")).value = '';
  
        
      },
      (error: any) => {
        this.alert = "An unexpected error has occured."
        this.router.navigateByUrl('doctors-login');
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
