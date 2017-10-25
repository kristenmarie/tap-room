import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewKombuchaComponent } from './new-kombucha.component';

@NgModule({
  imports: [ BrowserModule,
              FormsModule ],
  declarations: [ AppComponent,
                  NewKombuchaComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
