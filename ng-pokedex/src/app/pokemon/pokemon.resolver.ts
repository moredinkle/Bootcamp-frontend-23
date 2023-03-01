import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { PokemonListService } from '../services/pokemon-list-service.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver implements Resolve<any> {
  apiUrl = "https://pokeapi.co/api/v2/pokemon";
  constructor(private pokemonService: PokemonListService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any>{
    return this.pokemonService.getPokemon(`${this.apiUrl}/${route.paramMap.get('id') || 1}`);
  }
}
