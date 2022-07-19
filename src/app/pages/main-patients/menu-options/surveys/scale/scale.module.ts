import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScalePageRoutingModule } from './scale-routing.module';

import { ScalePage } from './scale.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScalePageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [ScalePage]
})
export class ScalePageModule {}
