import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
  .nav.navbar-nav {font-size: 15px}
  #searchFrom {margin-right: 100px;}
  @media (max-width: 992px) {#searchForm {display:none}}
  li > a.active { color: #F97924;}
  `]
})

export class NavBarComponent {
  // add properties to the component
  searchTerm = '';
  foundSessions: ISession[]; // foundSessions is a collections of ISessions

  constructor(public auth: AuthService, private eventService: EventService) {
    // how to open modal in code - "$"" is the jQuery selector
    $('#id').modal();
  }

  // method
  searchSessions(searchTerm) {
    // we want a service to handle that not the component itself
    this.eventService.searchSessions(searchTerm).subscribe
    (sessions => {
      this.foundSessions = sessions;
      // console.log('nav.component.line.33');
      // console.log(this.foundSessions);
    });
  }

}
