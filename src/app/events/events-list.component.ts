import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

declare let toastr;

@Component({
  template: `
<div>
  <h1>Upcoming Angular Events</h1>
  <hr>
  <div class="row">
    <div class="col-md-5"  *ngFor="let event of events">
        <event-thumbnail [event]="event"></event-thumbnail>
    </div>
  </div>


  <!-- <event-thumbnail (eventClick)="handleEventClicked($event)"
  [event]="event1"></event-thumbnail> -->
</div>
`
})
export class EventsListComponent implements OnInit {
  // events: any[];
  events: IEvent[];

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // this.events = this.eventService.getEvents();
    // load data only when received (delay 100ms)
    // this.eventService.getEvents().subscribe(events => {this.events = events});
    this.events = this.route.snapshot.data.events;
  }

}
