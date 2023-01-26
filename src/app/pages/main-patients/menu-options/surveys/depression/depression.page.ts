import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-depression',
  templateUrl: './depression.page.html',
  styleUrls: ['./depression.page.scss'],
})
export class DepressionPage implements OnInit {

  constructor(
    private router:Router

  ) { }

  ngOnInit() {
  }

    phq1 = new FormGroup({
    q1: new FormControl('', Validators.required),
    q2: new FormControl('', Validators.required),
    q3: new FormControl('', Validators.required),
    q4: new FormControl('', Validators.required),
    q5: new FormControl('', Validators.required),
    q6: new FormControl('', Validators.required),
    q7: new FormControl('', Validators.required),
    q8: new FormControl('', Validators.required),
    q9: new FormControl('', Validators.required),
    q10: new FormControl('', Validators.required)

  })
  
  @ViewChild(IonContent, {static: false}) content: IonContent
  alert = ''

  clear = function(){
    this.phq1.reset()
  };

  onSubmit(): void{

    if (this.phq1.invalid){
      this.clear()
      this.alert = "Please answer every question before submitting"
      this.content.scrollToTop(1500);
    }else{
      sessionStorage.setItem('phq1',JSON.stringify(this.phq1.value))
      this.clear()
      this.router.navigateByUrl('main-patients/survey-page')
    }
  }
  

}
