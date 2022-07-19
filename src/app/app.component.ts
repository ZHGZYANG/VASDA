import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'VASDA';

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

}
