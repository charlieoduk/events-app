import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventsService } from '../shared/events.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(
    private eventsService:EventsService,
    private router:Router
    ) { }

  canActivate(route:ActivatedRouteSnapshot) {
    const eventExists = !!this.eventsService.getEvent(+route.params['id']);

    if (!eventExists) 
      this.router.navigate(['/404']);
    return eventExists;
  }
}
