import { Component, OnInit } from '@angular/core';
import { GenerationsService } from './../../services/generations.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  constructor(private generationsService: GenerationsService) { }

  countGen = 'Vide';
  generations = [];

  ngOnInit(): void {
    this.generationsService.generationGET().subscribe(gen => {
      this.countGen = gen.count;
      this.generations = gen.results;
      console.log(this.generations[0]['name']);
    })
  }

  pokemons: any = [];

  showGen(url: string) {
    this.pokemons = [];
    this.generationsService.pokemonsFromGenGET(url).subscribe(pokemons => {
      this.pokemons = pokemons;
      console.log(this.pokemons['pokemon_species']);
    });
  }

}
