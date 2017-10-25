import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kombucha } from './kombucha.model';

@Component({
  selector: 'kombucha-list',
  template: `
  <ul>
    <li *ngFor="let currentKombucha of childKombuchaList">
      <h5>{{currentKombucha.brand}}</h5>
      <p>{{currentKombucha.flavor}}</p>
      <p>Price: $ {{currentKombucha.price}}</p>
      <p>Remaining Pints: {{currentKombucha.pints}}</p>
      <button (click)="editButtonHasBeenClicked(currentKombucha)">Edit!</button>
    </li>
  `
})

export class KombuchaListComponent {
  @Input() childKombuchaList: Kombucha[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kombuchaToEdit: Kombucha) {
    this.clickSender.emit(kombuchaToEdit);
  }
}
