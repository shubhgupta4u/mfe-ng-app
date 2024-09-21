import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const appRoutes: Route[] = [
    { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    {
        path: 'admin',
        loadChildren: () =>
            loadRemoteModule({
                type: 'manifest',
                remoteName: 'admin',
                exposedModule: './Module',
            }).then((m) => m.DashboardModule),
    },
    {
        path: 'user',
        loadChildren: () =>
            loadRemoteModule({
                type: 'manifest',
                remoteName: 'user',
                exposedModule: './Module',
            }).then((m) => m.DashboardModule),
    }
];
