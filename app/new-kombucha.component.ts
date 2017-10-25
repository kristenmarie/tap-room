import { Component, Output, EventEmitter } from '@angular/core';
import { Kombucha } from './task.model';

@Component({
  selector: 'new-kombucha',
  template: `
  <h1>Add New Kombucha</h1>
  <div class="form-group">
    <label>Enter Kombucha Brand:</label>
    <input #newBrand>
  </div>
  <div class="form-group">
    <label>Enter Kombucha Price:</label>
    <input #newPrice>
  </div>
  <div class="form-group">
    <label>Enter Kombucha Flavor:</label>
    <input #newFlavor>
  </div>
  <button (click)="submitForm(newBrand.value, newPrice.value, newFlavor.value); newBrand.value=''; newPrice.value=''; newFlavor.value='';">Add</button>
  `
})

export class NewKombuchaComponent {
  @Output() newKombuchaSender = new EventEmitter();
  submitForm(brand: string, price: number, flavor: string) {
    var newKombuchaToAdd: Kombucha = new Kombucha(brand, price, flavor);
    this.newKombuchaSender.emit(newKombuchaToAdd);
  }
}
