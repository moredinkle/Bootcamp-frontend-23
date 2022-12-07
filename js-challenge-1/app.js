class Pokemon {

    constructor(name, types, evolutions){
        this._name = name
        this._types = types
        this._evolutions = evolutions
    }

    get name() {
        return this._name
    }

    set name(newName) {
        newName.trim();
        this._name = newName
    }

    get types() {
        return this._types
    }

    set types(newTypes) {
        this._types = newTypes
    }

    get evolution() {
        return this._evolutions
    }

    set evolution(newEvolution) {
        this._evolutions = newEvolution
    }

    getInfo(){
        console.log(`
        Name: ${this._name}
        Types: ${this._types.toString()}
        Evolutions: ${this._evolutions.toString()}
        `
        )
    }

    attack() {
        console.log(`${this._name} has done a lot of damage!`)
    }

    evolve() {
        let evolutionIndex = this._evolutions.indexOf(this._name)
        if(evolutionIndex >= this._evolutions.length - 1) {
            console.log(`${this.name} cant evolve anymore`)
            return
        }
        this.name = this._evolutions[evolutionIndex+1]
        console.log(`${this._evolutions[evolutionIndex]} has evolved into ${this.name}!`)

    }
}


const poke = new Pokemon('Bulbasaur', ['water', 'plant'], ['Bulbasaur', 'Ivysaur', 'Venusaur'])
poke.getInfo();
poke.attack();
poke.evolve();
poke.evolve();
poke.evolve();

