import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPatientsPage } from './main-patients.page';

const routes: Routes = [
  {
    path: '',
    component: MainPatientsPage
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
  {
    path: 'depression',
    loadChildren: () => import('./menu-options/surveys/depression/depression.module').then( m => m.DepressionPageModule)
  },
  {
    path: 'wound',
    loadChildren: () => import('./menu-options/surveys/wound/wound.module').then( m => m.WoundPageModule)
  },
  {
    path: 'follow-up',
    loadChildren: () => import('./menu-options/surveys/follow-up/follow-up.module').then( m => m.FollowUpPageModule)
  },
  {
    path: 'survey-page',
    loadChildren: () => import('./menu-options/surveys/survey-page/survey-page.module').then( m => m.SurveyPagePageModule)
  },
  {
    path: 'woundpic',
    loadChildren: () => import('./menu-options/surveys/woundpic/woundpic/woundpic.module').then( m => m.WoundpicPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./tab-bar-options/profile/profile/profile.module').then( m => m.ProfilePageModule)
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPatientsPageRoutingModule {}
