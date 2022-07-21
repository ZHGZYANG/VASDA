import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.page.html',
  styleUrls: ['./follow-up.page.scss'],
})
export class FollowUpPage implements OnInit {


  followUpSurvey = new FormGroup({
    scheduled: new FormControl(''),
    date: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

  clear = function(){
    this.followUpSurvey.reset()
};

onSubmit(): void{
  console.log(this.followUpSurvey.value)
  this.clear()
}

}
