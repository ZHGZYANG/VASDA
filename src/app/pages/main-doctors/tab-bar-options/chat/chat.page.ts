import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { IonContent, MenuController } from '@ionic/angular';
import { DoctorServiceService } from 'src/app/service/doctor-service.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  
  selectedPatient = "Select a Patient"
  patients:Object[]

  currentUser:String

  allMessages:Object[]
  selectedMessages:Object[]
  patient:any
  newMsg = ''

  username:String

  @ViewChild(IonContent) content: IonContent

  messages = []
  constructor(
    private router:Router,
    private userService:UserService,
    private menu:MenuController,
    private doctorService:DoctorServiceService
  ) { }

  ngOnInit() {
    var User = JSON.parse(sessionStorage.getItem('user'))
    this.username = User["doctor_name"]

    this.currentUser = "Dr. Vogel"

    this.doctorService.getPatients(User['d_id']).subscribe(
      (response) => {
        this.patients = response
        console.log(this.patients)
    
      },
      (error: any) => {
        console.log(error)
      }
    )

    this.doctorService.getMessages().subscribe(
      (response)=>{
        this.allMessages = response
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  selectUser = function(patient:any){
    console.log(this.allMessages)
    this.patient=patient
    console.log(this.patient)
    this.selectedPatient=patient['patient_name']

    this.selectedMessages = []
    for (let i = 0; i<this.allMessages.length;i++){
      
      if((this.allMessages[i]['chat_receiver']=="Dr. Vogel" && this.allMessages[i]['chat_sender']==patient['patient_username']) || (this.allMessages[i]['chat_receiver']==patient['patient_username'] && this.allMessages[i]['chat_sender']=="Dr. Vogel") ){
        this.selectedMessages.push(this.allMessages[i])
      }
    }
    console.log(this.selectedMessages)
  }
  sendMsg():void{
    const time = new Date()
    const message = {
      chat_sender: "Dr. Vogel",
      chat_receiver: this.patient['patient_username'],
      chat_message: this.newMsg,
      chat_sent_date: time.toLocaleString()
    }
    
    this.selectedMessages.push(message)
    this.newMsg=''

    setTimeout(() =>{
      this.content.scrollToBottom(200)
    });

    this.doctorService.sendMessages(message).subscribe(
      (response)=>{
        console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )

  }
  closeAccordions() {
    const stateAccordion = document.querySelector('#state');
    stateAccordion['value'] = undefined;
  }




}
