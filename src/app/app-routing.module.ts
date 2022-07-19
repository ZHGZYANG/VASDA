import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'doctors-login',
    loadChildren: () => import('./pages/login/doctors-login/doctors-login.module').then( m => m.DoctorsLoginPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./pages/login/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'main-patients',
    loadChildren: () => import('./pages/main-patients/main-patients.module').then( m => m.MainPatientsPageModule)
  },
  {
    path: 'main-doctors',
    loadChildren: () => import('./pages/main-doctors/main-doctors.module').then( m => m.MainDoctorsPageModule)
  },
  {
    path: 'user-registration',
    loadChildren: () => import('./pages/login/user-registration/user-registration.module').then( m => m.UserRegistrationPageModule)
  },
  {
    path: 'home-health',
    loadChildren: () => import('./pages/main-patients/menu-options/home-health/home-health.module').then( m => m.HomeHealthPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
