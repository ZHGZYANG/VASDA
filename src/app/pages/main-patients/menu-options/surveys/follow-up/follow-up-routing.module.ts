import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowUpPage } from './follow-up.page';

const routes: Routes = [
  {
    path: '',
    component: FollowUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowUpPageRoutingModule {}
