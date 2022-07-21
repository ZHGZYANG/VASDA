import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { alertController } from '@ionic/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-patients',
  templateUrl: './main-patients.page.html',
  styleUrls: ['./main-patients.page.scss'],
})
export class MainPatientsPage implements OnInit {

  user_fname: any

  constructor(
    private userservice: UserService,
    private router:Router
  ) { }

  ngOnInit() {
    var User = JSON.parse(sessionStorage.getItem('user'));
    this.user_fname = User["FName"];
    console.log(User)
    this.surveyAlert();
  }

  surveyAlert = async function() {
    const alert = await alertController.create({
      header:'Tell us about your health today!',
      message:'',
      buttons: [
        {
          text: "Ok",
          handler: () => {
            this.router.navigateByUrl('/main-patients/survey-page');
          },
        },
      ],
  
    });

    await alert.present();
  }

}
