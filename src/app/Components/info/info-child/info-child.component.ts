import { Component } from '@angular/core';
import { StoreData } from '../../../viewModels/store-data';

@Component({
  selector: 'app-info-child',
  templateUrl: './info-child.component.html',
  styleUrl: './info-child.component.css',
})
export class InfoChildComponent {
  clientinfo: StoreData;
  constructor() {
    this.clientinfo = new StoreData('1', '2', '3', '4', 5, 6, 7);
  }
}
