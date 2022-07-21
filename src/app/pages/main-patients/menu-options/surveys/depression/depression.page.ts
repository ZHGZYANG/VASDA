import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-depression',
  templateUrl: './depression.page.html',
  styleUrls: ['./depression.page.scss'],
})
export class DepressionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  moodForm = new FormGroup({
    interest: new FormControl(''),
    depressed: new FormControl('')
  })

  clear = function(){
    this.moodForm.reset()
  };

  onSubmit(): void{
    console.log(this.moodForm.value)
    this.moodForm.reset()
  }

}
