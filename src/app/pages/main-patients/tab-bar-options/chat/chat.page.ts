import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages = JSON.parse(sessionStorage.getItem('chat'));
  
  constructor(private userService:UserService) { }

  ngOnInit() {

  }

}
