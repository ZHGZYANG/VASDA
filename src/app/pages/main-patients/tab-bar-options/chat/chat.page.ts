import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AutosizeModule } from 'ngx-autosize';
import { IonContent } from '@ionic/angular';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  newMsg = ''
  currentUser:any
  messages= []
  user:any

  
  @ViewChild(IonContent) content: IonContent
  constructor(
    private userservice:UserService
    ) { }

  ngOnInit() {

    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user)
    this.currentUser = this.user['patient_username']

    this.userservice.getMessages().subscribe(
      (response)=>{
        console.log(response)
        for(var k of response){
          if(k['chat_receiver']==this.user['patient_username'] || k['chat_sender']==this.user['patient_username'] ){
            this.messages.push(k)
          }

        }
      },
      (error)=>{
        console.log(error)
      }
    )

    setTimeout(() =>{
      this.content.scrollToBottom(200)
    });
  }

  sendMsg():void{
    const time = new Date()
    const message = {
      chat_sender: this.user['patient_username'],
      chat_receiver: 'Dr. Vogel',
      chat_message: this.newMsg,
      chat_sent_date: time.toLocaleString()
    }
    
    this.messages.push(message)
    this.newMsg=''

    setTimeout(() =>{
      this.content.scrollToBottom(200)
    });

    this.userservice.sendMessages(message).subscribe(
      (response)=>{
        console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )

  }

}
