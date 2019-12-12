import { Component, Input } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
<div>
  <h1>Upcoming Angular Events</h1>
  <hr>
  <event-thumbnail [event]="event1"></event-thumbnail>

  <!-- <event-thumbnail (eventClick)="handleEventClicked($event)"
  [event]="event1"></event-thumbnail> -->
</div>
`
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Prod 1',
    date: '12/12/2019',
    time: '9:54 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: 'Alexandre Dumas',
      city: 'Sao Paulo',
      country: 'Brasil'
    }
  };

}



  // @Input() event: any;

  // handleClickeMe() {
  //   console.log('clicked');
