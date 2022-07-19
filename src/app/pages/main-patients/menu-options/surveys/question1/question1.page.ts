import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEventPattern, ObjectUnsubscribedError } from 'rxjs';
import { Survey } from 'src/app/interface/survey';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-question1',
  templateUrl: './question1.page.html',
  styleUrls: ['./question1.page.scss'],
})
export class Question1Page implements OnInit {
  
  constructor(
    private router:Router, 
    private userService:UserService
    ) {}

  ngOnInit() { 
  }

  user = JSON.parse(sessionStorage.getItem('user'))
  date = new Date()
  
  survey: Survey = {
    P_id: this.user['P_id'],
    Q1_Result: undefined,
    Q2_Result: undefined,
    date: this.date
  }


  yesBtn = function() {

    this.survey['Q1_Result'] = "yes";
    localStorage.setItem('survey', JSON.stringify(this.survey));
    this.router.navigateByUrl('/main-patients/question2');
  };

  noBtn = function() {

    this.survey['Q1_Result'] = "no";
    localStorage.setItem('survey', JSON.stringify(this.survey));
    this.router.navigateByUrl('/main-patients/question2');
  };


  

}
