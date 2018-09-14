import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:any;
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
