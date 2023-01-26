function getPokemonsId(constructor: Function) {
    constructor.prototype.randomIds = [];
    for (let i = 0; i < 10; i++) {
    let randomId = Math.floor(Math.random() * 25);
    constructor.prototype.randomIds.push(randomId);
  }
}

@getPokemonsId
export class Trainer {
  name: string;
  pokemons: Object[];

  constructor(name: string) {
    this.name = name;
  }

  getPokemons() {
    const pokemonId = '';
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    // this.randomIds.map((id) => {

    // });
  }
}

const ash = new Trainer('ash');
console.log(ash.randomIds);


