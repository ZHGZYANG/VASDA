import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-main-patients',
  templateUrl: './main-patients.page.html',
  styleUrls: ['./main-patients.page.scss'],
})
export class MainPatientsPage implements OnInit {

  user_fname: any

  constructor(
    private userservice: UserService
  ) { }

  ngOnInit() {
    var User = JSON.parse(sessionStorage.getItem('user'));
    this.user_fname = User["FName"];
  }

}
