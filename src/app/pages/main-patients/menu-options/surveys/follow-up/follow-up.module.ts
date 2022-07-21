import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowUpPageRoutingModule } from './follow-up-routing.module';

import { FollowUpPage } from './follow-up.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FollowUpPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FollowUpPage]
})
export class FollowUpPageModule {}
