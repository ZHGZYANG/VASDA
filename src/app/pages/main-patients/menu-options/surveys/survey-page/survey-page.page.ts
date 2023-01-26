import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRefDirective } from '@ng-bootstrap/ng-bootstrap/accordion/accordion';

import { Presurgery } from 'src/app/interface/survey';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.page.html',
  styleUrls: ['./survey-page.page.scss'],
})
export class SurveyPagePage implements OnInit {

  user:any
  arm:any
  survey_data:Presurgery
  name:any

  peg:boolean
  ampac:boolean
  phq1:boolean
  wound_survey:boolean
  wound_picture:boolean
  appointment_survey:boolean

  alert = ''
 
  constructor(
    private router: Router,
    private userservice: UserService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.name = this.user['patient_name']

    if(this.user["patient_days_after_surgery"]<="-1"){//based on the arm, the app will use ngif to display certain surveys

      this.ampac = true
      this.peg = true
      this.phq1 = true
    }else if(this.user["patient_days_after_surgery"]=="0"){

      this.ampac=true
      this.peg=true
      this.phq1=true
      this.wound_picture=true
      this.wound_survey=true
      this.appointment_survey=true
    }else if(this.user["patient_days_after_surgery"]=="1"){

      this.ampac=true
      this.peg=true
      this.phq1=true
    }else if(this.user["patient_days_after_surgery"]=="2"){

      this.wound_picture=true
      this.wound_survey=true
    }else if(this.user["patient_days_after_surgery"]=="3"){

      this.appointment_survey=true
    }else if(this.user["patient_days_after_surgery"]=="4"){

      this.wound_picture=true
      this.wound_survey=true
    }else if(this.user["patient_days_after_surgery"]=="7"){

      this.ampac=true
      this.phq1=true
      this.wound_picture=true
      this.wound_survey=true
    }else if(this.user["patient_days_after_surgery"]=="14"){

      this.ampac=true
      this.peg=true
      this.phq1=true
      this.wound_picture=true
      this.wound_survey=true
    }else if(this.user["patient_days_after_surgery"]=="30"){

      this.ampac=true
      this.peg=true
      this.phq1=true
    }

  }

  alert_function = function()
  {
    this.alert = 'Please complete all the surveys before submitting'
  }
  alert_clear = function()
  {
    this.alert = ''
  }
  redirect = function()
  {
    this.router.navigateByUrl('main-patients')
  }

  submitSurveyResults = function(){

    let phq1_result = sessionStorage.getItem('phq1')
    let ampac_result = sessionStorage.getItem('ampac')
    let peg_result = sessionStorage.getItem('peg')
    let wp_result = sessionStorage.getItem('woundPic')
    let ws_result = sessionStorage.getItem('wound')
    let follow_result = sessionStorage.getItem('followUp')

    switch(this.user["patient_days_after_surgery"])
    {
      case "0":
        if (ampac_result === null || peg_result === null || phq1_result === null || wp_result === null || ws_result === null
          || follow_result === null)
        {
          this.alert_function()
        }
        else
        {
          this.alert_clear()
          this.redirect()
        }
        break;
      case "1":
        if(ampac_result === null || peg_result === null || phq1_result === null)
        {
          this.alert_function()
        }
        else
        {
          this.alert_clear()
          this.redirect()
        }
        break;
      case "2":
        if(ws_result === null || wp_result === null)
        {
          this.alert_function()
        }
        else
        {
          this.alert_clear()
          this.redirect()
        }
        break;
      case "3":
        if(follow_result === null)
        {
          this.alert_function()
        }
        else
        {
          this.alert_clear()
          this.redirect()
        }
        break
      case "4":
        if(ws_result === null || wp_result === null)
        {
          this.alert_function()
        }
        else
        {
          this.alert_clear()
          this.redirect()
        }
        break
      case "7":
        if(ampac_result === null || phq1_result === null || ws_result === null || wp_result === null)
        {
          this.alert_function()
        }
        else
        {
          this.alert_clear()
          this.redirect()
        }
        break
      case "14":
        if (ampac_result === null || peg_result === null || phq1_result === null || wp_result === null || ws_result === null)
        {
          this.alert_function()
        }
        else
        {
          this.alert_clear()
          this.redirect()
        }
        break
      case "30":
        if(ampac_result === null || phq1_result === null || peg_result === null)
        {
          this.alert_function()
        }
        else
        {
          this.alert_clear()
          this.redirect()
        }
        break
      default: //prior to surgery or after survey period
        if(ampac_result === null || phq1_result === null || peg_result === null)
        {
          this.alert_function()
        }
        else
        {
          this.alert_clear()
          this.redirect()
        }
        break
    }
    this.user['patient_survey_taken'] = '1'

    sessionStorage.setItem('user',JSON.stringify(this.user))
    this.userservice.sendSurveyResults().subscribe(
      (response)=>{
        console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    ) 
  }

  

  woundBtn = function() {
    this.router.navigateByUrl('main-patients/wound')
    this.alert_clear()
  }
  
  backBtn = function() {
    this.router.navigateByUrl('main-patients')
  }

  activityBtn = function() {
    this.router.navigateByUrl('main-patients/daily-activity')
    this.alert_clear()
  }

  followUpBtn = function() {
    this.router.navigateByUrl('main-patients/follow-up')
    this.alert_clear()
  }

  painBtn = function() {
    this.router.navigateByUrl('main-patients/scale')
    this.alert_clear()
  }
  
  moodBtn = function() {
    this.router.navigateByUrl('main-patients/depression')
    this.alert_clear()
  }

  picBtn = function() {
    this.router.navigateByUrl('main-patients/woundpic')
    this.alert_clear()
  }
}
