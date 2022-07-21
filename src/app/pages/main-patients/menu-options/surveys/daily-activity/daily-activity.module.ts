import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyActivityPageRoutingModule } from './daily-activity-routing.module';

import { DailyActivityPage } from './daily-activity.page';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DailyActivityPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DailyActivityPage]
})
export class DailyActivityPageModule {}
