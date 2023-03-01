import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  generationUrls: GenerationUrl[] = [];
  generations: GenerationInfo[] = [];
  pokemons: PokemonForCard[] = [];
  generationPokemons: PokemonForCard[] = [];
  displayPokemons: PokemonForCard[] = [];
  selectGenerationOptions = [{ name: 'all', value: 'all' }];
  selectedGeneration: GenerationInfo = {id: 0, name: '', pokemon_species: []};
  limit = 21;
  offset = 0;
  jump = 21;
  selectedOrderClass = 'bg-slate-700 text-white';
  otherOrderClass = 'bg-transparent text-black';
  defaultButtonClass = 'rounded-md px-4 font-semibold py-1 border border-slate-700';
  orderByIdClass = `${this.defaultButtonClass} ${this.selectedOrderClass}`;
  orderByNameClass = `${this.defaultButtonClass} ${this.otherOrderClass}`;
  orderByValue: 'id' | 'name' = 'id';
  filtering = false;

  constructor(private pokemonService: PokemonListService, private router: Router) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((pokemonListData: any) => {
      this.pokemonUrls = pokemonListData.results;
      this.loadPokemons(this.pokemonUrls);
    });
    this.displayPokemons = this.pokemons;
    this.getGenerations();
  }

  goToProfile(id: number) {
    this.router.navigate(['/pokemons',id]);
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

  loadPokemons(selectedPokemons: PokemonUrl[]) {
    for (let i = this.offset; i < this.limit; i++) {
      const pokeurl = selectedPokemons[i];
      this.getPokemonData(pokeurl.url);
    }
    this.sortPokemons();
  }

  sortPokemons() {
    if (this.orderByValue === 'id') {
      this.displayPokemons = this.displayPokemons.sort((a, b) => a.id - b.id);
    } else {
      this.displayPokemons = this.displayPokemons.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  getPokemonData(pokemonUrl: string) {
    this.pokemonService.getPokemon(pokemonUrl).subscribe((pokemon: any) => {
      const poke = toPokemonCard(pokemon);
      if(this.filtering) {
        this.generationPokemons.push(poke);
      }
      else {
        this.pokemons.push(poke);
      }
    });
  }

  nextPokemons() {
    this.offset += this.jump;
    this.limit += this.jump;
    if(this.filtering) {
      this.loadPokemons(this.selectedGeneration.pokemon_species);
    } else {
      this.loadPokemons(this.pokemonUrls);
    }
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

  selectGeneration(generationName: string) {
    if(generationName === this.selectedGeneration.name) {
      return;
    }
    else if(generationName === 'all') {
      this.filtering = false;
      this.offset = this.pokemons.length;
      this.limit = this.offset + this.jump;
      this.displayPokemons = this.pokemons;
      return;
    }
    const gen = this.generations.find((gen) => {
      return gen.name === generationName;
    });
    if (gen) {
      this.generationPokemons = [];
      this.offset = 0;
      this.limit = this.jump;
      this.selectedGeneration = gen;
      this.filtering = true;
      this.loadPokemons(this.selectedGeneration.pokemon_species);
      this.displayPokemons = this.generationPokemons;
    }
  }


  changeOrderSelectValue(newValue: 'id' | 'name') {
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
}
