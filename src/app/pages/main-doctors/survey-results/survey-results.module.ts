import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyResultsPageRoutingModule } from './survey-results-routing.module';

import { SurveyResultsPage } from './survey-results.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyResultsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SurveyResultsPage]
})
export class SurveyResultsPageModule {}
