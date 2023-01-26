import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  alert = '';
  formInputs: FormGroup;

  get username(){
    return this.formInputs.get('username');
  }
  get new_password(){
    return this.formInputs.get('new_password');
  }
  get re_password(){
    return this.formInputs.get('re_password');
  }

  ngOnInit() {
    this.formInputs = this.formBuilder.group(
      {
        username: new FormControl('', Validators.required),
        new_password: new FormControl('', Validators.required),
        re_password: new FormControl('', Validators.required)
      }
    )
  }

  btnResetPassword = function(){
    console.log(this.username.value)
    console.log(this.new_password.value)
    console.log(this.re_password.value)
  };

  btnClickPatient = function(){
    this.router.navigateByUrl('/login');
  };

  btnClickDoctor = function(){
    this.router.navigateByUrl('/doctors-login');
  };

}
