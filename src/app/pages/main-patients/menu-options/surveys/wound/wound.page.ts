import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wound',
  templateUrl: './wound.page.html',
  styleUrls: ['./wound.page.scss'],
})
export class WoundPage implements OnInit {


  wound = new FormGroup({
    appearance: new FormControl(''),
    fever: new FormControl(''),
    color: new FormControl(''),
    streaks: new FormControl(''),
    swelling: new FormControl(''),
    smell: new FormControl(''),
    leaking: new FormControl(''),
    pain: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

  clear = function(){
    this.wound.reset()
  };

  onSubmit(): void{
    console.log(this.wound.value)
    this.clear()
  }


}
