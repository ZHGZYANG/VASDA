import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DischargeInstructionsPageRoutingModule } from './discharge-instructions-routing.module';

import { DischargeInstructionsPage } from './discharge-instructions.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DischargeInstructionsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DischargeInstructionsPage]
})
export class DischargeInstructionsPageModule {}
