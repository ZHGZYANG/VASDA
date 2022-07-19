import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home-health',
  templateUrl: './home-health.page.html',
  styleUrls: ['./home-health.page.scss'],
})
export class HomeHealthPage implements OnInit {

  user = JSON.parse(localStorage.getItem('user'))
  user_health = JSON.parse(localStorage.getItem('user_health'))
  appointments:Object[]

  constructor(
    private userService:UserService
  ) {}

  ngOnInit() {
    console.log(this.user)
    this.getAppointments()
  }

  getAppointments():void{
    this.userService.getAppointments(this.user).subscribe(
      (response) => this.appointments = response['Visits'],
      (error:any) => console.log(error),
    );
  }
}
