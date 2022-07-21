import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.page.html',
  styleUrls: ['./survey-page.page.scss'],
})
export class SurveyPagePage implements OnInit {

  user_fname: any
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    var User = JSON.parse(sessionStorage.getItem('user'));
    this.user_fname = User["FName"];
  }

  woundBtn = function() {
    this.router.navigateByUrl('main-patients/wound')
  }

  activityBtn = function() {
    this.router.navigateByUrl('main-patients/daily-activity')
  }

  followUpBtn = function() {
    this.router.navigateByUrl('main-patients/follow-up')
  }

  painBtn = function() {
    this.router.navigateByUrl('main-patients/scale')
  }
  
  moodBtn = function() {
    this.router.navigateByUrl('main-patients/depression')
  }

  picBtn = function() {
    this.router.navigateByUrl('main-patients/upload')
  }
}
