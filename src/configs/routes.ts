import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { AboutComponent } from '../app/components/about/about.component';

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
      component: AboutComponent
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
