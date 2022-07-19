import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { IonIcon } from '@ionic/angular';


@Component({
  selector: 'app-show-hide',
  templateUrl: './show-hide.component.html',
  styleUrls: ['./show-hide.component.scss'],
})
export class ShowHideComponent implements OnInit{

  showPassword = true;
  @ContentChild(IonInput) input: IonInput;

  constructor() { }
  ngOnInit(): void {}

  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'password' : 'text'
  }

}
