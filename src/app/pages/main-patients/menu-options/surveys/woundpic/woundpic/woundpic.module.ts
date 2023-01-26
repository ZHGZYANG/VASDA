import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoundpicPageRoutingModule } from './woundpic-routing.module';

import { WoundpicPage } from './woundpic.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WoundpicPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WoundpicPage]
})
export class WoundpicPageModule {}
