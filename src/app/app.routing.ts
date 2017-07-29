import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

import {MovieListComponent} from "./modules/movie/components/movie-list/movie-list.component";
import {ActorListComponent} from "./modules/actor/components/actor-list/actor-list.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuardService} from "./auth-guard.service";



const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: '',
        component: HomeComponent
    },
    {
        path: 'actorlist',
        component: ActorListComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'movielist',
        component: MovieListComponent,
        canActivate: [AuthGuardService]
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);