

// #############################################
// this file does not guard errors when using
// http client - I transfer the guard to
// event-resolver.service.ts
// #############################################




// import { Router, CanActivate, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { EventService } from '../shared/event.service';

// @Injectable()
// export class EventRouteActivator implements CanActivate {

//   constructor(private router: Router, private eventService: EventService) {

//   }

//   canActivate(route: ActivatedRouteSnapshot) {
//     const eventExists = !!this.eventService.getEvent(+route.params.id);

//     if (!eventExists) {
//       this.router.navigate(['/404']);
//     } else {
//       return eventExists;
//     }

//   }
// }
