import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepressionPage } from './depression.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DepressionPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule,],
})
export class DepressionPageRoutingModule {}
