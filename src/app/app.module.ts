import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import {
  EventsListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventDetailsComponent
 } from './events/index';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import { EventsService } from './events/shared/events.service';

import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    NotFoundComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventsService,
    { 
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState 
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you want to cancel?')
  return true;
}
