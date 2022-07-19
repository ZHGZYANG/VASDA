import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorsLoginPage } from './doctors-login.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorsLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsLoginPageRoutingModule {}
