import { Component, OnInit } from '@angular/core';
import { ChildActivationStart, Router } from '@angular/router';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-scale',
  templateUrl: './scale.page.html',
  styleUrls: ['./scale.page.scss'],
})
export class ScalePage implements OnInit {



  constructor(
    private router: Router,
  ) { }

  ngOnInit() {​
  }

  peg = new FormGroup({
    pain: new FormControl(''),
    enjoyment: new FormControl(''),
    general: new FormControl('')
  })

  clear = function(){
    this.peg.reset()
  };

  onSubmit(): void{
    console.log(this.peg.value)
    this.clear()
  }
}
