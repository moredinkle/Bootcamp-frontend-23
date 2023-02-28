import { pokemonTypeColorMap } from './colors';
import { PokemonForCard, GenerationInfo, PokemonUrl } from './types';

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

export function toGeneration(gen: any): GenerationInfo {
  const generation: GenerationInfo = {
    id: gen.id,
    name: gen.name,
    pokemon_species: gen.pokemon_species.map((specie: any) => {return specieToPokemonUrl(specie)})
  }
  return generation;
}

export function specieToPokemonUrl(specie: any): PokemonUrl {
  const id = specie.url.split('/')[6];
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const poke = {
    name: specie.name,
    url
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
