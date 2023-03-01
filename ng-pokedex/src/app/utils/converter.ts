import { pokemonTypeColorMap } from './colors';
import { PokemonForCard, GenerationInfo, PokemonUrl, PokemonProfile, PokemonStat } from './types';

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

export function toPokemonProfile(data: any): PokemonProfile {
  const pokemon: PokemonProfile = {
    name: data.name,
    id: data.id,
    displayId: formatId(data.id),
    weight: data.weight,
    height: data.height,
    types: getPokemonTypes(data.types),
    images: getProfileImages(data.sprites),
    stats: getPokemonStats(data.stats)
  }
  return pokemon;
}

function getProfileImages(sprites: any) {
  const images:{url: string}[] = []
  images.push(sprites.front_default);
  images.push(sprites.front_shiny);
  images.push(sprites.back_default);
  images.push(sprites.back_shiny);
  return images;
}

function getPokemonStats(stats: any) {
  const newStats = stats.map((item: any) => {
    return { base_stat: item.base_stat, effort: item.effort, name: item.stat.name }
  });
  return newStats;
}

function getPokemonTypes(types: any){
  const newTypes:{name: string, color: string}[] = types.map((type: any) => {
    return {
      name: capitalizeFirstLetter(type.type.name), color: pokemonTypeColorMap[`${type.type.name}`]
    }
  })
  return newTypes;
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
