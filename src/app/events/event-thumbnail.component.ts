import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'event-thumbnail',
  template: `
  <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name | uppercase }}</h2>
    <div>Date: {{event?.date | date:'yyyy-M-dd'}}</div>
    <div
    [ngClass]="getStartTimeClass()"
    [ngSwitch]="event?.time">Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>

    <div>Prive: {{event?.price | currency:'USD'}}</div>
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
export class EventThumbnailComponent {
  @Input() event: IEvent;

  // to call [ngClass]="getStartTimeClass()"
  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
    return 'green bold';
    }
    return '';
    // const isEarlyStart = this.event.time === '8:00 am';
    // return {green: isEarlyStart, bold: isEarlyStart}
  }

  // to call [ngStyle]="getStartTimeStyle()"
  getStartTimeStyle(): any {
      if (this.event && this.event.time === '8:00 am') {
      return {color: '#003300', 'font-weight': 'bold'};
      }
      return {};
  }
}
