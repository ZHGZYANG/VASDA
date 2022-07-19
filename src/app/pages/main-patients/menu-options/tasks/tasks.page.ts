import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  survey_taken = false;
  upload_done = false;

  constructor(
    private userService: UserService,
    private router:Router
  ) { }

  ngOnInit() {
    var User = JSON.parse(localStorage.getItem('user'));
    this.userService.verifyUser(User).subscribe(
      (response) => {
        this.survey_taken = response['USER']['survey_taken']
      }
    )
  }

  surveyBtn = function(){
    this.router.navigateByUrl('/main-patients/question1')
  }
  uploadBtn = function(){
    this.router.navigateByUrl('/main-patients/upload')
  }
}
