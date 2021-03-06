import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
  selector: '[modal-trigger]' // [] indicates that this is an attribute not an element
})
export class ModalTriggerDirective implements OnInit {
  // create new property
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string;

  // constructor is to inject in this class
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }

}
