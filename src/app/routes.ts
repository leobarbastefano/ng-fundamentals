import { Routes } from '@angular/router';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  EventResolver
} from './events/index';

import { Error404Component } from './errors/404.component';
import { LoginComponent } from './user/login.component';

// this works like an if statement inside an array
export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canActivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} },
  { path: 'events/session/new', component: CreateSessionComponent},
  { path: 'user', loadChildren:  './user/user.module#UserModule'},
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full' }

];
