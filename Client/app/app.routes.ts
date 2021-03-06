﻿import { Route } from '@angular/router';

// Container (aka: "pages") imports
import {
    HomeComponent,
    RestTestComponent,
    BootstrapComponent,
    LoginComponent
} from 'app-containers';

export const ROUTES: Route[] = [
    // Base route
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    // Other routes
    { path: 'home', component: HomeComponent },
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'rest-test', component: RestTestComponent },
    { path: 'login', component: LoginComponent },

    // All else fails - go home
    { path: '**', redirectTo: 'home' }
];
