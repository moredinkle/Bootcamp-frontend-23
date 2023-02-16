import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class PokemonListService {
  apiUrl = "https://pokeapi.co/api/v2/";
  constructor(private http: HttpClient) { }

  getPokemonList(limit: number, offset: number) {
    return this.http.get(`${this.apiUrl}pokemon?limit=${limit}&offset=${offset}`);
  }
}
