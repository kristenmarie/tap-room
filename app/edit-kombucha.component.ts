import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kombucha } from './kombucha.model';

@Component({
  selector: 'edit-kombucha',
  template: `
  <div>
    <div *ngIf="childSelectedKombucha">
      <h3>Edit Kombucha</h3>
      <label>Enter Brand:</label>
      <input [(ngModel)]="childSelectedKombucha.brand">
      <label>Enter Flavor:</label>
      <input [(ngModel)]="childSelectedKombucha.flavor">
      <label>Enter Price:</label>
      <input [(ngModel)]="childSelectedKombucha.price">
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditKombuchaComponent {
  @Input() childSelectedKombucha: Kombucha;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
