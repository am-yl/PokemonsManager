import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Pokemon } from './../../model/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() pokpok?: Pokemon;

  @Output() choisir = new EventEmitter;

  choisirCePokemon() {
    this.choisir.emit(this.pokpok?.nom);
  }
}
