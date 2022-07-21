import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepressionPageRoutingModule } from './depression-routing.module';

import { DepressionPage } from './depression.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DepressionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DepressionPage]
})
export class DepressionPageModule {}
