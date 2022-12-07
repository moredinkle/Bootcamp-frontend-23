class Pokemon {
    private _name: string
    private _type: string[]
    private _evolutions: string[]

    constructor(name: string, type: string[], evolutions: string[]){
        this._name = name
        this._type = type
        this._evolutions = evolutions
    }

    get name(): string {
        return this._name
    }

    set name(newName) {
        newName.trim();
        this._name = newName
    }

    get type(): string[] {
        return this._type
    }

    set type(newType) {
        this._type = newType
    }

    get evolution(): string[] {
        return this._evolutions
    }

    set evolution(newEvolution) {
        this._evolutions = newEvolution
    }

    attack(): void {
        console.log(`${this._name} has done a lot of damage!`)
    }

    evolve(): void {
        this._evolutions.indexOf(this._name)

    }
}

