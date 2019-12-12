import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [class.green]="event?.time ==='8:00 am'"
    [ngSwitch]="event?.time">Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>

    <div>Prive: \${{event?.price}}</div>
    <div *ngIf="event?.location">
    <div [hidden]="!event?.location">
    <span>Location: {{event?.location?.address}}</span>
    <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
    Url: {{event?.onlineUrl}}
    </div>
    <!-- <button  class="btn btn-primary" (click)="handleClickMe()">Click me!</button> -->
  </div>
`,
styles: [`
.green { color: #003300 !important;}
.bold { font-weight: bold;}
.thumbnail { min-height: 200px; }
.pad-left { margin-left: 20px; }
.well div {color: #bbb; }
`]
})
export class EventsThumbnailComponent {
  @Input() event: any;


}
