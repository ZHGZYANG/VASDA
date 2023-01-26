import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-daily-activity',
  templateUrl: './daily-activity.page.html',
  styleUrls: ['./daily-activity.page.scss'],
})
export class DailyActivityPage implements OnInit {


  arm:any
  valid:boolean
  alert = ''
  @ViewChild(IonContent, {static: false}) content: IonContent

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { 
    this.arm=JSON.parse(sessionStorage.getItem('arm'))
  }

  ampac = new FormGroup({
    q1:new FormControl('', Validators.required),
    q2:new FormControl('', Validators.required),
    q3:new FormControl('', Validators.required),
    q4:new FormControl('', Validators.required),
    q5:new FormControl('', Validators.required),
    q6:new FormControl('', Validators.required)
  })

  clear = function(){
    this.ampac.reset()
  };

  onSubmit(): void{
    if (this.ampac.invalid){
      this.clear()
      this.alert = "Please answer every question before submitting"
      this.content.scrollToTop(1500);
    }else{

      sessionStorage.setItem('ampac',JSON.stringify(this.ampac.value))
      this.clear()
      this.router.navigateByUrl('main-patients/survey-page')
    }
  }
}
