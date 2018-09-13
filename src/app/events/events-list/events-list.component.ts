import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service'
import { ToastrService } from '../../common/toastr.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:any[];
  constructor(
    private eventsService: EventsService,
    private toastrService: ToastrService
    ){

  }
  ngOnInit( ) {
     this.events = this.eventsService.getEvents();
  }

  handleClickEvent(eventName) {
    this.toastrService.success(eventName);
  }
}
