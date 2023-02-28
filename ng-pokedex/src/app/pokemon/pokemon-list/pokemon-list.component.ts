import { Component } from '@angular/core';
import { toGeneration, toPokemonCard } from 'src/app/utils/converter';
import { PokemonListService } from '../../services/pokemon-list-service.service';
import {
  GenerationInfo,
  PokemonForCard,
  PokemonUrl,
  GenerationUrl,
} from '../../utils/types';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {
  apiurl = `https://pokeapi.co/api/v2/`;
  pokemonUrls: PokemonUrl[] = [];
  pokemons: PokemonForCard[] = [];
  generationPokemons: PokemonForCard[] = [];
  displayPokemons: PokemonForCard[] = [];
  generations: GenerationInfo[] = [];
  generationUrls: GenerationUrl[] = [];
  selectGenerationOptions: { name: string; value: string }[] = [];
  selectedGeneration = '';
  limit = 21;
  offset = 0;
  jump = 21;
  selectedOrderClass = 'bg-slate-700 text-white';
  otherOrderClass = 'bg-transparent text-black';
  defaultButtonClass =
    'rounded-md px-4 font-semibold py-1 border border-slate-700';
  orderByIdClass = `${this.defaultButtonClass} ${this.selectedOrderClass}`;
  orderByNameClass = `${this.defaultButtonClass} ${this.otherOrderClass}`;
  orderByValue: 'id' | 'name' = 'id';
  filtering = false;

  constructor(private pokemonService: PokemonListService) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((pokemonListData: any) => {
      this.pokemonUrls = pokemonListData.results;
      this.loadPokemons();
    });
    this.getGenerations();
  }

  changeOrderSelectValue(newValue: 'id' | 'name') {
    this.filtering = false;
    if (newValue === 'id') {
      this.orderByIdClass = `${this.defaultButtonClass} ${this.selectedOrderClass}`;
      this.orderByNameClass = `${this.defaultButtonClass} ${this.otherOrderClass}`;
    } else {
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
    this.sortPokemons();
  }

  sortPokemons() {
    let sortedArray = [];
    if (this.orderByValue === 'id') {
      sortedArray = this.pokemons.sort((a, b) => a.id - b.id);
    } else {
      sortedArray = this.pokemons.sort((a, b) => a.name.localeCompare(b.name));
    }
    this.pokemons = sortedArray;
    this.displayPokemons = this.pokemons;
  }

  getPokemonData(pokemonUrl: string) {
    this.pokemonService.getPokemon(pokemonUrl).subscribe((pokemon: any) => {
      const poke = toPokemonCard(pokemon);
      return this.pokemons.push(poke);
    });
  }

  nextPokemons() {
    this.offset += this.jump;
    this.limit += this.jump;
    this.loadPokemons();
  }

  searchPokemon(searchTerm: string) {
    let aux = [];
    if (this.filtering) {
      aux = this.generationPokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm));
      if (aux.length === 0) {
        aux = this.generationPokemons.filter((pokemon) => pokemon.displayId.includes(searchTerm));
      }
    } else {
      aux = this.pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm));
      if (aux.length === 0) {
        aux = this.pokemons.filter((pokemon) => pokemon.displayId.includes(searchTerm));
      }
    }
    this.displayPokemons = aux;
  }

  getGenerations() {
    this.pokemonService
      .getGenerations()
      .subscribe((generationListData: any) => {
        this.generationUrls = generationListData.results;
        this.generationUrls.map((gen) => {
          this.selectGenerationOptions.push({
            name: gen.name,
            value: gen.name,
          });
          this.getGenerationData(gen.url);
        });
      });
  }

  getGenerationData(url: string) {
    this.pokemonService.getGenerationData(url).subscribe((generationData) => {
      const gen = toGeneration(generationData);
      this.generations.push(gen);
    });
  }

  generationSpeciesToCards(gen: GenerationInfo) {
    gen.pokemon_species.map((specie: { name: string; url: string }) => {
      const id = specie.url.split('/')[6];
      this.pokemonService
        .getPokemon(`${this.apiurl}pokemon/${id}`)
        .subscribe((poke) => {
          const pokemon = toPokemonCard(poke);
          this.generationPokemons.push(pokemon);
        });
    });
  }

  selectGeneration(generationName: string) {
    this.generationPokemons = [];
    this.selectedGeneration = generationName;
    const gen = this.generations.find((gen) => {
      return gen.name === generationName;
    });
    if (gen) {
      this.generationSpeciesToCards(gen);
      this.filtering = true;
      this.displayPokemons = this.generationPokemons;
    }
  }
}
