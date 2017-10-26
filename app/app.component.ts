import { Component } from '@angular/core';
import { Kombucha } from './Kombucha.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="page-header">
      <h1>{{header}}</h1>
    </div>
    <div class="row">
      <div class="col s3">
        <button class="btn-large">Add New</button>
      </div>
      <div class="col s9">
        <kombucha-list [childKombuchaList]="masterKombuchaList" (clickSender)="editKombucha($event)" (sellSender)="sellKombucha($event)"></kombucha-list>
        <edit-kombucha [childSelectedKombucha]="selectedKombucha" (doneButtonClickedSender)="finishedEditing()"></edit-kombucha>
        <new-kombucha (newKombuchaSender)="addKombucha($event)"></new-kombucha>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  header = '《《 Blue Mountain Kombucha 》》';
  masterKombuchaList: Kombucha[] = [
    new Kombucha('Synergy', 'Mango', 5),
    new Kombucha('Pugent Sound Kombucha', 'Earl Grey', 4),
    new Kombucha('Health-Ade', 'Cayenne Cleanse', 5)
  ];
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

  sellKombucha(clickedKombucha) {
    clickedKombucha.pints -= 1;
  }
}
