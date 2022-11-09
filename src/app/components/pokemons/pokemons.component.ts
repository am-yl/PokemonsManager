import { Component, OnInit, Type } from '@angular/core';
import { Pokemon } from './../../model/pokemon';
import { PokemonsService } from './../../services/pokemons.service';
import { FormRecherche } from './../../model/form-recherche';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[] = [];
  allpokemons: Pokemon[] = [];
  nbrPokemons: number = 0;
  tmp: Pokemon[] = [];
  C3PO: string = "";
  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.tmp = [];
    this.C3PO = "";
    for (let i = 1; i < 21; i++) {
      this.pokemonsService.getPokemons('https://pokeapi.co/api/v2/pokemon/' + i + '/').subscribe(pok => {
        if (this.allpokemons[pok.id] == null || this.allpokemons[pok['id']] == undefined) {
          let types = '';
          if (pok['types'].length > 1) {
            for (let i = 0; i < pok['types'].length; i++) {
              types += pok['types'][i]['type']['name'] + ', ';
            }
            types = types.slice(0, -2);
          } else {
            types = pok['types'][0]['type']['name'];
          }
          this.allpokemons.push({
            pokedex: pok['id'],
            img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + String(pok['id']).padStart(3, '0') + ".png",
            nom: pok['name'],
            cat: "",
            type: types,
            taille: pok['height'] / 10,
            poids: pok['weight'] / 10,
          });
        }
        this.nbrPokemons = this.allpokemons.length;
      });
    }
    this.pokemons = this.allpokemons;
    console.log(this.pokemons);
  }

  pokemonChoisi: string = '';
  receptionChoix(choix: string) {
    this.pokemonChoisi = choix;
  }

  formulaireRecherche = new FormRecherche('', 'ASC');

  checkNom = new RegExp('^[A-Za-zéèëêïô3-]+$');

  affResRech(nom: string) {
    this.allPokPok();
    console.log(this.tmp);
    if (this.checkNom.test(nom)) {
      if (nom === "C3PO") {
        this.pokemons = [];
        this.C3PO = "https://media.tenor.com/OdIHNAXG3hIAAAAC/star-wars-c3po.gif";
        return this.C3PO;
      } else {
        for (let i = 0; i < this.pokemons.length; i++) {
          if (this.pokemons[i].nom.indexOf(nom) != -1) {
            this.tmp.push(this.pokemons[i]);
            console.log(this.pokemons[i].nom + ' ajouté à tmp')
          }
        }
        if (this.tmp.length == 0) {
          console.log('there is no pokpok');
        } else {
          console.log("tmp :");
          console.log(this.tmp);
        }
        this.pokemons = this.tmp;
      }
    }
    this.nbrPokemons = this.pokemons.length;
    return this.pokemons;
  }

  allPokPok() {
    this.pokemons = this.allpokemons;
    this.tmp = [];
    this.C3PO = "";
    this.nbrPokemons = this.pokemons.length;
  }

  cherche = this.formulaireRecherche.nom;
  faMagnifyingGlass = faMagnifyingGlass;

}
