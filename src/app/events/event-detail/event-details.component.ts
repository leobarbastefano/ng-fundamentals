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

  ngOnInit() {
    // this.route.params.forEach((params: Params) => {
      this.route.data.forEach((data) => {
      // this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
      // this.event = event;
      // this.event = this.route.snapshot.data['event'];
      this.event = data.event;
      this.addMode = false;
    });
  // });
}

addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    // this is going to retun the max session id
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session); // push id to the sessions array
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
