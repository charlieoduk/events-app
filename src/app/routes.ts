import { Routes } from '@angular/router';

import {
    EventsListComponent,
    CreateEventComponent,
    EventDetailsComponent
   } from './events/index';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/shared/event-list-resolver.service';


export const appRoutes: Routes = [
    { 
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    { 
        path: 'events',
        component: EventsListComponent,
        resolve: {
            events: EventListResolverService 
        }
    },
    { 
        path: 'events/:id',
        component: EventDetailsComponent,
        canActivate: [EventRouteActivatorService]
    },
    { 
        path: '404',
        component: NotFoundComponent
    },
    { 
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
    }
];
