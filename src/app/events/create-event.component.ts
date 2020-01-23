import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';


@Component({
templateUrl: 'create-event.component.html',
styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5; }
  `]
})
export class CreateEventComponent {
  newEvent: any;
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) {

  }

  saveEvent(formValues) {
    // console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['./events']);
  }

  cancel() {
    this.router.navigate(['./events']);
  }
}
