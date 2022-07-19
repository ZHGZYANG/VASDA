import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonePagePageRoutingModule } from './done-page-routing.module';

import { DonePagePage } from './done-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonePagePageRoutingModule
  ],
  declarations: [DonePagePage]
})
export class DonePagePageModule {}
