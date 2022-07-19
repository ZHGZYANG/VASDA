import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DischargeInstructionsPage } from './discharge-instructions.page';

const routes: Routes = [
  {
    path: '',
    component: DischargeInstructionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DischargeInstructionsPageRoutingModule {}
