import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'upvote',
  styleUrls: ['./upvote.component.css'],
  template: `
  <div class="votingWidgetContainer pointable" (click)="onClick()">
    <div class="votingButton">
      <i *ngIf="voted" class="glypicon glyphicon-heart">Votou!</i>
      <i *ngIf="!voted" class="glypicon glyphicon-heart-empty">Não Votou!</i>
    </div>
    <div class="badge badge-inverse votingCount">
      <div>{{count}}</div>
    </div>
    </div>
    `
})

export class UpvotedComponent implements OnInit {
@Input() count: number;
@Input() voted: boolean;
@Output() vote = new EventEmitter();

onClick() {
  this.vote.emit({});
}

  constructor() { }

  ngOnInit() { }
}
