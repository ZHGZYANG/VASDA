import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { IonContent, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  
  currentUser = "Select a Patient"
  user = JSON.parse(localStorage.getItem('user'))
  patients:Object[]
  patient:any
  newMsg = ''


  @ViewChild(IonContent) content: IonContent

  messages = [
  ]
  constructor(
    private router:Router,
    private userService:UserService,
    private menu:MenuController
  ) { }

  ngOnInit() {
    this.getPatients()
  }

  selectUser = function(patient:any){
    this.patient=patient
    this.currentUser=patient['fName'] + " " + patient['lName']
    this.getMessages(this.patient['pID'])
  }
  sendMsg(){
    const message = {
      pID:this.patient['pID'],
      dID:this.patient['dID'],
      createdAt: new Date().getTime(),
      message: this.newMsg
    }

    this.messages.push(message)
    
    this.sendMessage(message)

    this.newMsg =''
    setTimeout(() =>{
      this.content.scrollToBottom(200)
    });
    
  }
  closeAccordions() {
    const stateAccordion = document.querySelector('#state');
    stateAccordion['value'] = undefined;
  }

  getPatients():void{
    this.userService.getPatients(this.user).subscribe(
      (response) => this.patients=response['Patients'],
      (error:any) => console.log(error),
    );
  }

  getMessages(patient:any):void{
    this.userService.getMessages(patient).subscribe(
      (response)=> this.messages=response['Messages'],
      (error:any) => console.log(error),
    );
  }

  sendMessage(message:any):void{
    this.userService.sendMessage(message).subscribe(
      (response)=> console.log("success"),
      (error:any) => console.log(error),
    );
  }

}
