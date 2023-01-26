import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {
  user:any
  appointments = []
  
  constructor(
    private userservice:UserService
  ){
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'))
    this.userservice.getAppointments().subscribe(
      (response)=>{
        for(var k of response){
          if(k['appointment_patient_username']==this.user['patient_username']){
            this.appointments.push(k)
          }
        }
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
