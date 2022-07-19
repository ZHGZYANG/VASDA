import { Component, OnInit } from '@angular/core';
import { ChildActivationStart, Router } from '@angular/router';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-scale',
  templateUrl: './scale.page.html',
  styleUrls: ['./scale.page.scss'],
})
export class ScalePage implements OnInit {

  peg={  
    pain:"",
    enjoyment:"",
    generalActivity:""
  }

  inputs = document.getElementsByTagName('input')


  
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {​
  }

  clear = function(){
    for(var i=0;i<this.inputs.length;i++){
      this.inputs[i].checked=false
    }
  };

  onSubmit(): void{
    this.peg.pain = document.querySelector('input[name=pain]:checked')['value']
    this.peg.enjoyment = document.querySelector('input[name=enjoyment]:checked')['value']
    this.peg.generalActivity = document.querySelector('input[name=general]:checked')['value']
    this.clear()
    console.log(this.peg)
  }
  
  
  



}
