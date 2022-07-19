import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorsLoginPageRoutingModule } from './doctors-login-routing.module';

import { DoctorsLoginPage } from './doctors-login.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorsLoginPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [DoctorsLoginPage]
})
export class DoctorsLoginPageModule {}
