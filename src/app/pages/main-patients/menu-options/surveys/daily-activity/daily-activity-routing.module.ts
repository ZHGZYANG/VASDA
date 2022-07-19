import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyActivityPage } from './daily-activity.page';

const routes: Routes = [
  {
    path: '',
    component: DailyActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyActivityPageRoutingModule {}
