import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Prive: \${{event.price}}</div>
    <div>
    <span>Location: {{event.location.address}}</span>
    <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
    </div>
    <!-- <button  class="btn btn-primary" (click)="handleClickMe()">Click me!</button> -->
  </div>
`,
styles: [`
.pad-left { margin-left: 20px; }
.well div {color: #bbb; }
`]
})
export class EventsThumbnailComponent {
  @Input() event: any;


}
