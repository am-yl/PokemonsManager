import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './../model/pokemon';

@Pipe({
  name: 'sortByPokedex'
})
export class PokedexPipe implements PipeTransform {

  transform(values: Pokemon[], order: string): Pokemon[] {
    if (order === 'DESC') {
      return values.sort((a: Pokemon, b: Pokemon) => b.pokedex - a.pokedex);
    } else {
      return values.sort((a: Pokemon, b: Pokemon) => a.pokedex - b.pokedex);
    }
  }

}
