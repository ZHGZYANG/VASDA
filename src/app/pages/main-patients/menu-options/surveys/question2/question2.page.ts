import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from 'src/app/interface/survey';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.page.html',
  styleUrls: ['./question2.page.scss'],
})
export class Question2Page implements OnInit {

  survey = JSON.parse(localStorage.getItem('survey'))

  constructor (
    private router:Router, 
    private userService:UserService
    ) { }

  ngOnInit() { }

  onSurveyClick():void{
    this.userService.setSurveyResults(this.survey).subscribe(
      (response) => {
        this.router.navigateByUrl('/main-patients/scale')
      },
      (error:any) => console.log(error),
    );
  }


  yesBtn = function(){
    this.survey['Q2_Result'] = "yes";
    this.onSurveyClick();
  };

  noBtn = function(){
    this.survey['Q2_Result'] = "no";
    this.onSurveyClick();
  };



}
