import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPicsPageRoutingModule } from './view-pics-routing.module';

import { ViewPicsPage } from './view-pics.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPicsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ViewPicsPage]
})
export class ViewPicsPageModule {}
