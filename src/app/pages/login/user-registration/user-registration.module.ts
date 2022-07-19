import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserRegistrationPageRoutingModule } from './user-registration-routing.module';
import { UserRegistrationPage } from './user-registration.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRegistrationPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [UserRegistrationPage]
})
export class UserRegistrationPageModule {}
