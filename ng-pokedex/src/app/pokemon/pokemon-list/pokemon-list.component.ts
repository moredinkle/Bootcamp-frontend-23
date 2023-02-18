import { Component } from '@angular/core';
import { toPokemonCard } from 'src/app/utils/converter';
import { PokemonListService } from '../../services/pokemon-list-service.service';
import { PokemonForCard, PokemonUrl } from '../../utils/types';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {
  pokemonUrls: PokemonUrl[] = [];
  displayPokemons: PokemonForCard[] = [];
  limit = 21;
  offset = 0;
  jump = 21;
  selectedOrderClass = "bg-slate-700 text-white";
  otherOrderClass = "bg-transparent text-black";
  defaultButtonClass = "rounded-md px-4 font-semibold py-1 border border-slate-700";
  orderByIdClass = `${this.defaultButtonClass} ${this.selectedOrderClass}`;
  orderByNameClass = `${this.defaultButtonClass} ${this.otherOrderClass}`;
  orderByValue: "id" | "name" = "id";
  constructor(private pokemonService: PokemonListService) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((pokemonListData: any) => {
      this.pokemonUrls = pokemonListData.results;
      this.loadPokemons();
    });
  }

  changeOrderSelectValue(newValue: "id" | "name"){
    if(newValue === "id"){
      this.orderByIdClass = `${this.defaultButtonClass} ${this.selectedOrderClass}`;
      this.orderByNameClass = `${this.defaultButtonClass} ${this.otherOrderClass}`;
    }
    else {
      this.orderByNameClass = `${this.defaultButtonClass} ${this.selectedOrderClass}`;
      this.orderByIdClass = `${this.defaultButtonClass} ${this.otherOrderClass}`;
    }
    this.orderByValue = newValue;
    this.sortPokemons();

  }

  loadPokemons() {
    for (let i = this.offset; i < this.limit; i++) {
      const pokeurl = this.pokemonUrls[i];
      this.getPokemonData(pokeurl.url);
    }
  }

  sortPokemons() {
    let sortedArray = [];
    if(this.orderByValue === "id"){
      sortedArray = this.displayPokemons.sort((a, b) => a.id - b.id);
    }
    else {
      sortedArray = this.displayPokemons.sort((a, b) => a.name.localeCompare(b.name));
    }
    this.displayPokemons = sortedArray;
  }

  getPokemonData(pokemonUrl: string) {
    this.pokemonService.getPokemon(pokemonUrl).subscribe((pokemon: any) => {
      const poke = toPokemonCard(pokemon);
      return this.displayPokemons.push(poke);
    });
  }

  nextPokemons() {
    this.offset += this.jump;
    this.limit += this.jump;
    this.loadPokemons();
  }
}
