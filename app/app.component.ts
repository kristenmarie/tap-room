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
        <button class="btn-large" (click)="newButtonClicked()">Add New</button>
        <button class="btn-large" (click)="happyHourClicked()">Happy</button>
      </div>
      <div class="col s9">
        <kombucha-list [childKombuchaList]="masterKombuchaList" (clickSender)="editKombucha($event)" (sellSender)="sellKombucha($event)" (sellGrowlersSender)="sellKombuchaGrowlers($event)" (deleteSender)="deleteKombucha($event)"></kombucha-list>
        <edit-kombucha [childSelectedKombucha]="selectedKombucha" (doneButtonClickedSender)="finishedEditing()"></edit-kombucha>
        <div *ngIf='addNewKombucha'>
          <new-kombucha (newKombuchaSender)="addKombucha($event)" (newButtonClickedSender)="finishedAdding()"></new-kombucha>
        </div>
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
  addNewKombucha = false;

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

  newButtonClicked() {
    this.addNewKombucha = true;
  }

  finishedAdding() {
    this.addNewKombucha = false;
  }

  sellKombuchaGrowlers(clickedKombucha) {
    clickedKombucha.pints -= 2;
  }

  happyHourClicked() {
    for(let i = 0; i < this.masterKombuchaList.length; i++) {
      this.masterKombuchaList[i].price -= 2;
    }
  }

  deleteKombucha(clickedKombucha) {
    let index = this.masterKombuchaList.indexOf(clickedKombucha);
    this.masterKombuchaList.splice(index, 1);
  }
}
