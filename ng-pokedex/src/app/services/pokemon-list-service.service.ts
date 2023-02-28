import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {  GenerationInfo, GenerationUrl, PokemonUrl } from '../utils/types';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {
  apiUrl = "https://pokeapi.co/api/v2/";
  constructor(private http: HttpClient) { }

  getPokemonList(limit = 10000, offset = 0) {
    return this.http.get(`${this.apiUrl}pokemon?limit=${limit}&offset=${offset}`) as Observable<{results: PokemonUrl[]}>;
  }

  getPokemon(pokemonUrl: string){
    return this.http.get(pokemonUrl);
  }

  getGenerations(){
    return this.http.get(`${this.apiUrl}generation`) as Observable<{results: GenerationUrl[]}>;
  }

  getGenerationData(generationUrl: string) {
    return this.http.get(generationUrl);
  }
}//TODO continuar con generations
