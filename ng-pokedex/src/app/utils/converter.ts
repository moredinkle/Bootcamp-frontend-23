import { pokemonTypeColorMap } from './colors';
import { PokemonForCard } from './types';

export function toPokemonCard(pokemon: any): PokemonForCard{
  let poke: PokemonForCard = {
    id: pokemon.id,
    displayId: formatId(pokemon.id),
    name: capitalizeFirstLetter(pokemon.name),
    imageUri: pokemon.sprites.other["official-artwork"].front_default,
    types: pokemon.types.map((type: any) => {return {name: capitalizeFirstLetter(type.type.name), color: pokemonTypeColorMap[`${type.type.name}`] }})
  }
  return poke;
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatId(id: number) {
  let newId = '';
  newId += id < 100 ? '0': '';
  newId += id < 10 ? '0': '';
  newId += id;
  return newId;
}
