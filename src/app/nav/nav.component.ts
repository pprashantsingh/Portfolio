import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  activeNav: string = '#';

  setActiveNav(nav: string): void {
    this.activeNav = nav;
  }
}
