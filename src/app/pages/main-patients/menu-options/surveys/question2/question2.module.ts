import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question2PageRoutingModule } from './question2-routing.module';

import { Question2Page } from './question2.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question2PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Question2Page]
})
export class Question2PageModule {}
