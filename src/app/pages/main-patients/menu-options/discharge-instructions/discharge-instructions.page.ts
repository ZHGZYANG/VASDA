import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-discharge-instructions',
  templateUrl: './discharge-instructions.page.html',
  styleUrls: ['./discharge-instructions.page.scss'],
})
export class DischargeInstructionsPage implements OnInit {

  constructor() { }

  instruction = JSON.parse(sessionStorage.getItem('instruction'))

  ngOnInit() {
  }
}
