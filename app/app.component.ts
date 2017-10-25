import { Component } from '@angular/core';
import { Kombucha } from './Kombucha.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Blue Mountain Kombucha</h1>
    <new-kombucha (newKombuchaSender)="addKombucha($event)"></new-kombucha>
  </div>
  `
})

export class AppComponent {
  masterKombuchaList: Kombucha[]; 

  addKumbucha(newKombuchaFromChild: Kombucha) {
    this.masterKombuchaList.push(newKombuchaFromChild);
  }
}
