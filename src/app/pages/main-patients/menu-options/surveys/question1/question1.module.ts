import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question1PageRoutingModule } from './question1-routing.module';

import { Question1Page } from './question1.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question1PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Question1Page]
})
export class Question1PageModule {}
