import { Component } from '@angular/core';
import { Kombucha } from './Kombucha.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Blue Mountain Kombucha</h1>
    <kombucha-list [childKombuchaList]="masterKombuchaList" (clickSender)="editKombucha($event)"></kombucha-list>
    <edit-kombucha [childSelectedKombucha]="selectedKombucha" (doneButtonClickedSender)="finishedEditing()"></edit-kombucha>
    <new-kombucha (newKombuchaSender)="addKombucha($event)"></new-kombucha>
  </div>
  `
})

export class AppComponent {
  masterKombuchaList: Kombucha[] = [];
  selectedKombucha = null;

  addKombucha(newKombuchaFromChild: Kombucha) {
    this.masterKombuchaList.push(newKombuchaFromChild);
  }

  editKombucha(clickedKombucha) {
    this.selectedKombucha = clickedKombucha;
  }

  finishedEditing() {
    this.selectedKombucha = null;
  }
}
