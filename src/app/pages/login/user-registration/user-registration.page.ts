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
  get address(){
    return this.formInputs.get('address');
  }
  get birthday(){
    return this.formInputs.get('birthday');
  }
  get surgery_date(){
    return this.formInputs.get('surgery_date');
  }

  constructor(
    private router: Router, 
    private userservice: UserService,
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
        re_password: new FormControl('', Validators.required),
        address: new FormControl('',Validators.required),
        birthday: new FormControl('',Validators.required),
        surgery_date: new FormControl('')
      }
    )
  };

  btnRegister = function() {

    if(this.password.value != this.re_password.value){
      this.alert = "Passwords do not match."
      return;
    }
    console.log(JSON.stringify(this.formInputs.value))
     this.userservice.registerUser(JSON.stringify(this.formInputs.value)).subscribe(
      (response)=>{
        console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )
    
    this.router.navigateByUrl('login')
  }

  btnPatient = function() {
    this.router.navigateByUrl('login');
  }
}
