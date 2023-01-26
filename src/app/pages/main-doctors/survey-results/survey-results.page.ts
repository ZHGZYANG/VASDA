import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.page.html',
  styleUrls: ['./survey-results.page.scss'],
})
export class SurveyResultsPage implements OnInit {

  patientName:string
  patient:any
  constructor() {

   }

  ngOnInit() {
    this.patient = JSON.parse(sessionStorage.getItem('patient'));
    this.patientName= this.patient["name"];
    console.log(this.patient)
  }

}
