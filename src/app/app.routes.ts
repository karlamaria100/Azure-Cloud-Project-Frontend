import { Routes } from '@angular/router';

import * as Cmp from './components';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Cmp.LoginComponent
  },
  {
    path: 'signup',
    component: Cmp.SignupComponent
  },
  {
    path: 'home',
    component: Cmp.HomeComponent
  },
  {
    path: 'upload',
    component: Cmp.UploadComponent
  }
];