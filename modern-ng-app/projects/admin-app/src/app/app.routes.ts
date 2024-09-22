import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';

export const routes: Routes = [
    {
        path: 'admin/dashboard/:email',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'admin/dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: '**',
        component:HomeComponent
    },
];
