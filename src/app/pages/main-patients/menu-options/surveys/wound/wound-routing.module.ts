import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoundPage } from './wound.page';

const routes: Routes = [
  {
    path: '',
    component: WoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoundPageRoutingModule {}
