import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartComponent} from './start/start.component';
import {AuthGuardService} from './login/auth-guard.service';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {
        path: 'start',
        component: StartComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                loadChildren: './start/start.module#StartModule'
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/start'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
