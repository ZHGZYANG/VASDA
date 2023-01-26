import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.page.html',
  styleUrls: ['./follow-up.page.scss'],
})
export class FollowUpPage implements OnInit {


  followUp= new FormGroup({
    q1: new FormControl('', Validators.required),
    q2: new FormControl('', Validators.required)
  })
  alert = ''

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  clear = function(){
    this.followUp.reset()
};

onSubmit(): void{
  if (this.followUp.invalid){
    this.alert = "Please answer every question before submitting"
    this.followUp.reset()

  
  }else{
    sessionStorage.setItem('followUp',JSON.stringify(this.followUp.value))
    this.clear()
    this.router.navigateByUrl('main-patients/survey-page')
  }
}

}
