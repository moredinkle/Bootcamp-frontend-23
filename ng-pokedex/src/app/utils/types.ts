export type PokemonUrl = {
  name: string;
  url: string;
};

export type GenerationUrl = {
  name: string;
  url: string;
};

export type PokemonForCard = {
  id: number;
  displayId: string;
  name: string;
  imageUri: string;
  types: { name: string; color: string }[];
};

export type GenerationInfo = {
  id: number;
  name: string;
  pokemon_species: [];
};

export type PokemonProfile = {
  id: number;
  displayId: string;
  name: string;
  weight: number;
  height: number;
  types: { name: string; color: string }[];
  images: { url: string }[];
  selectedImage: { url: string };
  stats: PokemonStat[];
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  name: string
};
