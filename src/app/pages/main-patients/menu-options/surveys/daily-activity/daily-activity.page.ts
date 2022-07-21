import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-daily-activity',
  templateUrl: './daily-activity.page.html',
  styleUrls: ['./daily-activity.page.scss'],
})
export class DailyActivityPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dailyActivity = new FormGroup({
    changingLower: new FormControl(''),
    bathing:new FormControl(''),
    toileting:new FormControl(''),
    changingUpper:new FormControl(''),
    grooming:new FormControl(''),
    eating:new FormControl('')
  })

  clear = function(){
    this.dailyActivity.reset()
  };

  onSubmit(): void{
    console.log(this.dailyActivity.value)
    this.clear()
  }
}
