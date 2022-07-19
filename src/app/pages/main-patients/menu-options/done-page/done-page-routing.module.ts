import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonePagePage } from './done-page.page';

const routes: Routes = [
  {
    path: '',
    component: DonePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonePagePageRoutingModule {}
