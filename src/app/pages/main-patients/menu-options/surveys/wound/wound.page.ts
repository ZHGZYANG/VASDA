import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-wound',
  templateUrl: './wound.page.html',
  styleUrls: ['./wound.page.scss'],
})
export class WoundPage implements OnInit {

  @ViewChild(IonContent, {static: false}) content: IonContent
  wound = new FormGroup({
    q1: new FormControl('', Validators.required),
    q2: new FormControl('', Validators.required),
    q3: new FormControl('', Validators.required),
    q4: new FormControl('', Validators.required),
    q5: new FormControl('', Validators.required),
    q6: new FormControl('', Validators.required),
    q7: new FormControl('', Validators.required),
    q7pt1: new FormControl(''),
    q7pt2: new FormControl(''),
    q7pt3: new FormControl(''),
    q8: new FormControl('', Validators.required)
  })
  alert = ''

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  clear = function(){
    this.wound.reset()
    this.alert = "Please answer every question before submitting"
    this.content.scrollToTop(1500)
  };

  onSubmit(): void{
    if (this.wound.invalid){
      this.clear()
    }else{
      sessionStorage.setItem('wound',JSON.stringify(this.wound.value))
      console.log(this.wound.value)
      this.clear()
      this.router.navigateByUrl('main-patients/survey-page')
    }
  }

}
