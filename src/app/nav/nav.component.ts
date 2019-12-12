import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
  .nav.navbar-nav {font-size: 15px}
  #searchFrom {margin-right: 100px;}
  @media (max-width: 992px) {#searchForm {display:none}}
  `]
})

export class NavBarComponent {
  constructor() { }

}
