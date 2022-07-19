import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeHealthPage } from './home-health.page';

const routes: Routes = [
  {
    path: '',
    component: HomeHealthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeHealthPageRoutingModule {}
