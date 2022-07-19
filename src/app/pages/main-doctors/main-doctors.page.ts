import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-doctors',
  templateUrl: './main-doctors.page.html',
  styleUrls: ['./main-doctors.page.scss'],
})
export class MainDoctorsPage implements OnInit {

  username: any
  constructor() { }

  ngOnInit() {
    var User = JSON.parse(sessionStorage.getItem('user'))
    if (User['D_id']){
      this.username = User["FName"]
    }
    
  }

}
