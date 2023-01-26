import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainDoctorsPageRoutingModule } from './main-doctors-routing.module';

import { MainDoctorsPage } from './main-doctors.page';
import { ComponentsModule } from 'src/app/components/components.module';

import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'  



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainDoctorsPageRoutingModule,
    ComponentsModule,
    MatNativeDateModule,
    MatIconModule,
    MatTableModule
    
  ],
  declarations: [MainDoctorsPage]
})
export class MainDoctorsPageModule {}
