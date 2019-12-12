import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

declare let toastr;

@Component({
  selector: 'events-list',
  template: `
<div>
  <h1>Upcoming Angular Events</h1>
  <hr>


  <div class="row">
    <div class="col-md-5"  *ngFor="let event of events">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
    </div>
  </div>


  <!-- <event-thumbnail (eventClick)="handleEventClicked($event)"
  [event]="event1"></event-thumbnail> -->
</div>
`
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

}
