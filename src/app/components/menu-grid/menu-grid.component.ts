import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-grid',
  templateUrl: './menu-grid.component.html',
  styleUrls: ['./menu-grid.component.scss'],
})
export class MenuGridComponent implements OnInit {

  User = JSON.parse(sessionStorage.getItem('user'));
  constructor(
    private router: Router,
  ) {}

  ngOnInit() {

  }

  homehealthbttn = function() {
      this.router.navigateByUrl('main-patients/home-health')
  }

  tasksbttn = function() {
      this.router.navigateByUrl('main-patients/tasks')
  }
  
  apptbttn = function() {
      this.router.navigateByUrl('main-patients/appointments')
  }

  dschargebttn = function() {
      this.router.navigateByUrl('main-patients/discharge-instructions')
  }

  surveybttn = function() {
      this.router.navigateByUrl('main-patients/question1')
  }

  woundbttn = function() {
      this.router.navigateByUrl('main-patients/upload')
  }

  emergencybttn = function() {
    console.log("Emergency")
  }
}
