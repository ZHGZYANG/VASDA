import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-activity',
  templateUrl: './daily-activity.page.html',
  styleUrls: ['./daily-activity.page.scss'],
})
export class DailyActivityPage implements OnInit {
  dailyActivity = {
    changingLower:"",
    bathing:"",
    toileting:"",
    changingUpper:"",
    grooming:"",
    eating:""
  }
  inputs = document.getElementsByTagName('input')
  constructor() { }

  ngOnInit() {
  }

  clear = function(){
    for(var i=0;i<this.inputs.length;i++){
      this.inputs[i].checked=false
    }
  };

  onSubmit(): void{
    this.dailyActivity.changingLower = document.querySelector('input[name=changingLower]:checked')['value']
    this.dailyActivity.bathing = document.querySelector('input[name=bathing]:checked')['value']
    this.dailyActivity.toileting = document.querySelector('input[name=toileting]:checked')['value']
    this.dailyActivity.changingUpper = document.querySelector('input[name=changingUpper]:checked')['value']
    this.dailyActivity.grooming = document.querySelector('input[name=grooming]:checked')['value']
    this.dailyActivity.eating = document.querySelector('input[name=eating]:checked')['value']
    this.clear()
    console.log(this.dailyActivity)
  }
}
