import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainDoctorsPage } from './main-doctors.page';

const routes: Routes = [
  {
    path: '',
    component: MainDoctorsPage
  },
  {
    path: 'chat',
    loadChildren: () => import('./tab-bar-options/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'view-pics',
    loadChildren: () => import('./tab-bar-options/view-pics/view-pics.module').then( m => m.ViewPicsPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainDoctorsPageRoutingModule {}
