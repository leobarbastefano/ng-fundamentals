import { Component } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
 .container { padding-left:20px; padding-right: 20px;}
 .event-image { height: 100px;}
 a {cursor: pointer;}
 `]
})
export class EventDetailsComponent {
  event: IEvent;
  addMode: boolean;

  filterBy = 'all';
  sortBy = 'votes';

  constructor(private route: ActivatedRoute, private eventService: EventService) {

  }

  // ngOnInit() {
  //   this.event = this.eventService.getEvent(
  //     +this.route.snapshot.params.id
  //   );
  // }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params.id);
      this.addMode = false;
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    // this is going to retun the max session id
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session); // push id to the sessions array
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
