import { Pokemon } from "./pokemon";

function getPokemonsId(constructor: Function) {
    constructor.prototype.randomIds = [];
    constructor.prototype.pokemons = [];
    for (let i = 0; i < 3; i++) {
    let randomId = Math.floor(Math.random() * 25);
    constructor.prototype.randomIds.push(randomId);
  }
}

@getPokemonsId
export class Trainer {
  name: string;
  pokemons: Pokemon[];
  randomIds: number[];

  constructor(name: string) {
    this.name = name;
  }

  async getPokemons() {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/`;
    
    const poke = await Promise.all(this.randomIds.map(async (id) => {
        const body = await fetch(endpoint+id).then(res => res.json());
        const pokemon = new Pokemon(body.id, body.name, body.base_experience, body.weight);
        return pokemon;
    }));
    this.pokemons = poke;
    console.log(this.pokemons);
  }

}


const ash = new Trainer('ash');
ash.getPokemons();
console.log(ash);



