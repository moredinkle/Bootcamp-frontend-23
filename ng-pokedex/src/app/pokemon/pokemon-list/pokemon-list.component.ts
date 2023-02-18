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
  constructor(private pokemonService: PokemonListService) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((pokemonListData: any) => {
      this.pokemonUrls = pokemonListData.results;
      this.loadPokemons();
    });
  }

  loadPokemons() {
    for (let i = this.offset; i < this.limit; i++) {
      const pokeurl = this.pokemonUrls[i];
      this.getPokemonData(pokeurl.url);
    }
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
