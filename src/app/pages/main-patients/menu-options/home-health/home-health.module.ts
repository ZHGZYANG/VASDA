import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeHealthPageRoutingModule } from './home-health-routing.module';

import { HomeHealthPage } from './home-health.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeHealthPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HomeHealthPage]
})
export class HomeHealthPageModule {}
