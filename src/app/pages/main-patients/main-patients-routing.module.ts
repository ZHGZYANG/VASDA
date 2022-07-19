import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPatientsPage } from './main-patients.page';

const routes: Routes = [
  {
    path: '',
    component: MainPatientsPage
  },
  {
    path: 'question1',
    loadChildren: () => import('./menu-options/surveys/question1/question1.module').then( m => m.Question1PageModule)
  },
  {
    path: 'done-page',
    loadChildren: () => import('./menu-options/done-page/done-page.module').then( m => m.DonePagePageModule)
  },
  {
    path: 'question2',
    loadChildren: () => import('./menu-options/surveys/question2/question2.module').then( m => m.Question2PageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./menu-options/tasks/tasks.module').then( m => m.TasksPageModule)
  },
  {
    path: 'appointments',
    loadChildren: () => import('./menu-options/appointments/appointments.module').then( m => m.AppointmentsPageModule)
  },
  {
    path: 'discharge-instructions',
    loadChildren: () => import('./menu-options/discharge-instructions/discharge-instructions.module').then( m => m.DischargeInstructionsPageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./tab-bar-options/upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./tab-bar-options/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'home-health',
    loadChildren: () => import('./menu-options/home-health/home-health.module').then( m => m.HomeHealthPageModule)
  },
  {
    path: 'scale',
    loadChildren: () => import('./menu-options/surveys/scale/scale.module').then( m => m.ScalePageModule)
  },
  {
    path: 'daily-activity',
    loadChildren: () => import('./menu-options/surveys/daily-activity/daily-activity.module').then( m => m.DailyActivityPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPatientsPageRoutingModule {}
