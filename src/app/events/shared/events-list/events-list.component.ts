import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../index';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:IEvent[];
  constructor(
    private toastrService: ToastrService,
    private route:ActivatedRoute
    ){

  }
  ngOnInit( ) {
     this.events = this.route.snapshot.data['events'];
  }

  handleClickEvent(eventName) {
    this.toastrService.success(eventName);
  }
}
