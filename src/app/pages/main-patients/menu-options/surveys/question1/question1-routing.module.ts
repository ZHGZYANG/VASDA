import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question1Page } from './question1.page';

const routes: Routes = [
  {
    path: '',
    component: Question1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question1PageRoutingModule {}
