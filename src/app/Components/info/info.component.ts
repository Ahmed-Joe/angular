import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  hide: boolean = true;
  hidelist() {
    this.hide = !this.hide;
  }
}
