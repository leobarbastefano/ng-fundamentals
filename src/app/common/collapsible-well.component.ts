import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
    <h4>
      <ng-content select="[well-title]"></ng-content>
    </h4>
    <!-- select="[well-body]" will match the content to the tag in html"-->
    <!-- [well-body] is an atribute selector-->
    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
`
})
export class CollapsibleWellComponent {
    visible = true;

    toggleContent() {
      this.visible = !this.visible;

  }

}
