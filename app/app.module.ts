import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewKombuchaComponent } from './new-kombucha.component';
import { KombuchaListComponent } from './kombucha-list.component';
import { EditKombuchaComponent } from './edit-kombucha.component';

@NgModule({
  imports: [ BrowserModule,
              FormsModule ],
  declarations: [ AppComponent,
                  NewKombuchaComponent,
                  KombuchaListComponent,
                  EditKombuchaComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
