import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-woundpic',
  templateUrl: './woundpic.page.html',
  styleUrls: ['./woundpic.page.scss'],
})
export class WoundpicPage implements OnInit {

  constructor(
	private userservice:UserService
  ) { }

  ngOnInit() {
  }

  url: any
  msg = ""
  uploadStatus = ''

	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}


		this.userservice.sendWoundPic(event.target.files[0]).subscribe(
			(response)=>{
			  this.uploadStatus='Successful upload!'
			},
			(error)=>{
			  this.uploadStatus='Failed to upload, please try again'
			}
		  ) 
	}

}
