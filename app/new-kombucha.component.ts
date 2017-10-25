import { Component, Output, EventEmitter } from '@angular/core';
import { Kombucha } from './kombucha.model';

@Component({
  selector: 'new-kombucha',
  template: `
  <h3>Add New Kombucha</h3>
  <div class="form-group">
    <label>Enter Kombucha Brand:</label>
    <input #newBrand class="form-control">
  </div>
  <div class="form-group">
    <label>Enter Kombucha Price:</label>
    <input #newPrice class="form-control">
  </div>
  <div class="form-group">
    <label>Enter Kombucha Flavor:</label>
    <input #newFlavor class="form-control">
  </div>
  <button class="btn-large waves-effect waves-light" (click)="submitForm(newBrand.value, newPrice.value, newFlavor.value); newBrand.value=''; newPrice.value=''; newFlavor.value='';">Add</button>
  `
})

export class NewKombuchaComponent {
  @Output() newKombuchaSender = new EventEmitter();
  submitForm(brand: string, price: number, flavor: string) {
    var newKombuchaToAdd: Kombucha = new Kombucha(brand, flavor, price);
    this.newKombuchaSender.emit(newKombuchaToAdd);
  }
}
