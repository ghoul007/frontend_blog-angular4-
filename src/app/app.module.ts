import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule}    from '@angular/forms';
import {MoviesService} from "./modules/movie/services/movie.service";
import {MovieComponent} from "./modules/movie/components/movie/movie.component";
import {MovieListComponent} from "./modules/movie/components/movie-list/movie-list.component";
import {ActorComponent} from "./modules/actor/components/actor/actor.component";
import {ActorListComponent} from "./modules/actor/components/actor-list/actor-list.component";
import {ActorService} from "./modules/actor/services/actor.service";
import {HttpModule} from "@angular/http";
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from "./authentication.service";
import {AuthGuardService} from "./auth-guard.service";


@NgModule({
    declarations: [
        AppComponent,
        MovieComponent,
        ActorComponent,
        ActorListComponent,
        MovieListComponent,
        HomeComponent,
        NavbarComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        FormsModule
    ],
    providers: [MoviesService, ActorService, AuthenticationService , AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
