import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyActivityPageRoutingModule } from './daily-activity-routing.module';

import { DailyActivityPage } from './daily-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyActivityPageRoutingModule
  ],
  declarations: [DailyActivityPage]
})
export class DailyActivityPageModule {}
