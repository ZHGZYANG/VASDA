import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question2Page } from './question2.page';

const routes: Routes = [
  {
    path: '',
    component: Question2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question2PageRoutingModule {}
