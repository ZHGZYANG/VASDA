import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildActivationStart, Router } from '@angular/router';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { IonContent } from '@ionic/angular';



@Component({
  selector: 'app-scale',
  templateUrl: './scale.page.html',
  styleUrls: ['./scale.page.scss'],
})
export class ScalePage implements OnInit {



  constructor(
    private router: Router,
  ) { }

  ngOnInit() {​
  }

  peg = new FormGroup({
    q1: new FormControl('', Validators.required),
    q2: new FormControl('', Validators.required),
    q3: new FormControl('', Validators.required)
  })
  alert = ''

  @ViewChild(IonContent, {static: false}) content: IonContent

  clear = function(){
    this.peg.reset()
    
  };

  onSubmit(): void{
  
    if (this.peg.invalid){
      this.clear()
      this.alert = "Please answer every question before submitting"
      this.content.scrollToTop(1500);
    }else{
      sessionStorage.setItem('peg',JSON.stringify(this.peg.value))
      this.clear()
      this.router.navigateByUrl('main-patients/survey-page')
    }
  }
}
