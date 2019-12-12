import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
  <nav-bar></nav-bar>
  <events-list></events-list>
  `

})
export class EventsAppComponent {
  title = 'app';
}


// template: `
// <h2>Hello</h2>
// <img src ="/assets/images/basic-shield.png"/>
// `
