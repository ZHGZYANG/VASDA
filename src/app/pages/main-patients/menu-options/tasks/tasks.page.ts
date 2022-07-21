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
  }
}
