import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoundpicPage } from './woundpic.page';

const routes: Routes = [
  {
    path: '',
    component: WoundpicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoundpicPageRoutingModule {}
