import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewKombuchaComponent } from './new-kombucha.component';
import { KombuchaListComponent } from './kombucha-list.component';
import { EditKombuchaComponent } from './edit-kombucha.component';
import { EmptinessPipe } from './emptiness.pipe';

@NgModule({
  imports: [ BrowserModule,
              FormsModule ],
  declarations: [ AppComponent,
                  NewKombuchaComponent,
                  KombuchaListComponent,
                  EditKombuchaComponent,
                  EmptinessPipe],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
