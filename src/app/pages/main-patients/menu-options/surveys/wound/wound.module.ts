import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoundPageRoutingModule } from './wound-routing.module';

import { WoundPage } from './wound.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    WoundPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WoundPage]
})
export class WoundPageModule {}
