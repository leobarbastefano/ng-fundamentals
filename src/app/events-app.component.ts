import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-events',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  // title = 'app';

  constructor(private auth: AuthService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
