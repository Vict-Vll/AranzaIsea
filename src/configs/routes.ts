import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';

export const AppRoutes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'works',
      component: HomeComponent
    },
    {
      path: 'about',
      component: HomeComponent
    },
    {
      path: 'goodies',
      component: HomeComponent
    },
    {
      path: 'contact',
      component: HomeComponent
    }
  ];
