import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
})
export class TabBarComponent implements OnInit {

  User = JSON.parse(sessionStorage.getItem('user'));
  constructor(private router:Router,) { }

  ngOnInit() {}

  homebtn = function() {
    if(!this.User['P_id']){
      this.router.navigateByUrl('main-doctors')
    }else{
      this.router.navigateByUrl('main-patients')
    }
  }

  chatbtn = function() {
    if(!this.User['P_id']){
      this.router.navigateByUrl('main-doctors/chat')
    }else{
      this.router.navigateByUrl('main-patients/chat')
    }
  }

  uploadbtn = function() {
    if(!this.User['P_id']){
      this.router.navigateByUrl('main-doctors/view-pics')
    }else{
      this.router.navigateByUrl('main-patients/upload')
    }
  }

}
