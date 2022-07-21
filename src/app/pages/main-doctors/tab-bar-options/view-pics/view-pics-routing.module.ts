import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPicsPage } from './view-pics.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPicsPageRoutingModule {}
