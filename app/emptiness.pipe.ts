import { Pipe, PipeTransform } from '@angular/core';
import { Kombucha } from './kombucha.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Kombucha[], desiredEmptiness) {
    var output: Kombucha[] = [];
    if (desiredEmptiness ===  'lowKombuchas') {
      for (let i = 0; i < input.length; i ++) {
        if (input[i].pints < 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmptiness === 'barginKombuchas') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].price < 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmptiness === "specialtyKombuchas") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].price >= 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
