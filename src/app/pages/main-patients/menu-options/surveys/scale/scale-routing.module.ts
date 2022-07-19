import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScalePage } from './scale.page';

const routes: Routes = [
  {
    path: '',
    component: ScalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScalePageRoutingModule {}
