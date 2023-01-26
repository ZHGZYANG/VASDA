import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private router:Router
  ) { }

  full_name = ''
  dob = ''
  address = ''
  email = ''
  surgery_date = ''
  
  user:any
  ngOnInit() {
    this.user=JSON.parse(sessionStorage.getItem('user'))
    console.log(this.user)
    this.full_name = this.user['patient_name']
    this.dob = this.user['patient_bitrhday']
    this.address = this.user['patient_address']
    this.email = this.user['patient_email']
    var temp = formatDate(new Date(this.user['patient_surgery_date']), 'MM/dd/YYYY', 'en_US').toString()
    this.surgery_date = temp
  }

  logoutBtn(){
    sessionStorage.clear()
    this.router.navigateByUrl('/')
  }

  settingBtn(){
    console.log('settings clicked')
    //this.router.navigateByUrl('/account-settings')
  }

}
