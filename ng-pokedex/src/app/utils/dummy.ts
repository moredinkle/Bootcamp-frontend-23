import { PokemonProfile } from './types';
import { PokemonStat } from './types';

export const statDummy: PokemonStat = {
  base_stat: 0,
  effort: 0,
  name: 'string'
};

export const dummyPokemon: PokemonProfile = {
  id: 0,
  displayId: 'string',
  name: 'string',
  weight: 0,
  height: 0,
  types: [{ name: 'string', color: 'string' }],
  images: [{ url: 'string' }],
  selectedImage: { url: 'string' },
  stats: [statDummy]
};

