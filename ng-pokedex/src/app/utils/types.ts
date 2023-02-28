export type PokemonUrl = {
  name: string,
  url: string
}

export type GenerationUrl = {
  name: string,
  url: string
}

export type PokemonForCard = {
  id: number,
  displayId: string,
  name: string,
  imageUri: string,
  types: {name:string, color: string}[]
}

export type GenerationInfo = {
  id: number,
  name: string,
  pokemon_species: []
}

