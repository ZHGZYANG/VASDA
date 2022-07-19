import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPatientsPageRoutingModule } from './main-patients-routing.module';

import { MainPatientsPage } from './main-patients.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPatientsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MainPatientsPage]
})
export class MainPatientsPageModule {}
