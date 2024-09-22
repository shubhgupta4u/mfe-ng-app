import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';

export const routes: Routes = [
    {
        path: 'user/dashboard/:email',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'user/dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },    
    {
        path: '**',
        component:HomeComponent
    },
];
