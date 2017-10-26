import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kombucha } from './kombucha.model';

@Component({
  selector: 'kombucha-list',
  template: `
  <h3>Thirsty? Here's the List:</h3>
  <div class="card-panel">
    <select (change)="onChange($event.target.value)" class="form-control form-control-lg">
      <option value="allKombuchas">All Kombuchas</option>
      <option value="lowKombuchas">Low Kombuchas</option>
      <option value="barginKombuchas">Bargin Kombuchas</option>
      <option value="specialtyKombuchas">Specialty Kombuchas</option>
    </select>
    <table class="striped">
      <thead>
        <tr>
          <th>Brand</th>
          <th>Flavor</th>
          <th>Price</th>
          <th>Pints Left</th>
          <th></th>
          <th>Pints</th>
          <th>Growlers</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let currentKombucha of childKombuchaList | emptiness:filterByEmptiness">
          <td>Brand: {{currentKombucha.brand}}</td>
          <td>Flavor: {{currentKombucha.flavor}}</td>
          <td>Price: $ {{currentKombucha.price}}</td>
          <td>Remaining Pints: {{currentKombucha.pints}}</td>
          <td><button (click)="editButtonHasBeenClicked(currentKombucha)" class="btn waves-effect waves-light" id="edit">✏️</button></td>
          <td><button (click)="sellButtonHasBeenClicked(currentKombucha)" class="btn waves-effect waves-light" id="single-beer">🍺</button></td>
          <td><button (click)="sellGrowlerButtonHasBeenClicked(currentKombucha)" class="btn waves-effect waves-light" id="double-beer">🍻</button></td>
          <td><button (click)="deleteButtonHasBeenClicked(currentKombucha)" class="btn red"><img id="delete" src='resources/images/delete.png'></button></td>
        </tr>
      </tbody>
    </table>
  </div>
  `
})

export class KombuchaListComponent {
  @Input() childKombuchaList: Kombucha[];
  @Output() clickSender = new EventEmitter();
  @Output() sellSender = new EventEmitter();
  @Output() sellGrowlersSender = new EventEmitter();
  @Output() deleteSender = new EventEmitter();

  filterByEmptiness: string = "allKombuchas";

  editButtonHasBeenClicked(kombuchaToEdit: Kombucha) {
    this.clickSender.emit(kombuchaToEdit);
  }

  sellButtonHasBeenClicked(kombuchaToSell: Kombucha) {
    this.sellSender.emit(kombuchaToSell);
  }

  onChange(optionFromMenu) {
    this.filterByEmptiness = optionFromMenu;
  }

  sellGrowlerButtonHasBeenClicked(kombuchaToSell: Kombucha) {
    this.sellGrowlersSender.emit(kombuchaToSell);
  }

  deleteButtonHasBeenClicked(kombuchaToDelete: Kombucha) {
    this.deleteSender.emit(kombuchaToDelete);
  }
}
