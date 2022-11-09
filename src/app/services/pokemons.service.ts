import { Injectable } from '@angular/core';
import { Pokemon } from './../model/pokemon';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  pokemonsOld: Pokemon[] = [
    {
      "pokedex": 2,
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
      "nom": "Herbizarre",
      "cat": "graine",
      "type": "plante, poison",
      "taille": 1,
    },
    {
      "pokedex": 4,
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
      "nom": "Salamèche",
      "cat": "lézard",
      "type": "feu",
      "taille": 0.6,
      "poids": 8.5,
    },
    {
      "pokedex": 1,
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
      "nom": "Bulbizarre",
      "cat": "graine",
      "type": "plante, poison",
      "taille": 0.7,
      "poids": 6.9,
    },
    {
      "pokedex": 5,
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
      "nom": "Reptincel",
      "cat": "flamme",
      "type": "feu",
      "taille": 1.1,
      "poids": 19,
    },
    {
      "pokedex": 6,
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
      "nom": "Dracaufeu",
      "cat": "flamme",
      "type": "feu, vol",
      "taille": 2,
      "poids": 90.5,
    },
    {
      "pokedex": 3,
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
      "nom": "Florizarre",
      "cat": "graine",
      "type": "plante, poison",
      "taille": 2,
      "poids": 100,
    },
  ];

  private url = 'https://pokeapi.co/api/v2/pokemon/';

  getPokemonsOld() {
    return this.pokemonsOld;
  }

  getPokemons(url: string): Observable<any> {
    return this.http.get(url);
  }

  countPokemons() {
    return this.pokemonsOld.length;
  }
}
