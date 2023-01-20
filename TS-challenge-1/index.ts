type PI = Math["PI"];
type Age = number;
type PersonName = string;
type Maybe = string | number;
type Rol = "User" | "Admin";


type  Link = {
    name: string,
    url: string
}

type Move = {
    move: Link
}

type Type = {
    slot: number,
    type: Link
}

type Sprites = {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}


type Person = {
    name: PersonName,
    age: Age,
    rol: Rol
}

type Pokemon = {
    id: number,
    name: string,
    height: number
    weight: number
    base_experience?: number
    types: Array<Type>
    moves: Array<Move>
    sprites: Sprites
}


let personRol: Rol = 'User';
let maybeSomething: Maybe = 25;
let pi: PI = 3; //!
const personName: PersonName = 'Alexander';
const personAge: Age = 24
maybeSomething = 'something else';
personRol = 'Admin';


const person: Person = {
    name: personName,
    age: personAge,
    rol: personRol // can be Admin or User
}

const pikachu: Pokemon = {
    id: 25,
    name: 'pikachu',
    height:4,
    weight: 60,
    base_experience: 112, // this can be optional value
    types: [
        {
            slot: 1,
            type: {
                name:"electric",
                url:"https://pokeapi.co/api/v2/type/13/"
            },
        }
    ],
    moves: [
        {
            move: {
                name: "thunderbolt",
                url: "https://pokeapi.co/api/v2/move/85/"
            },
        },
        {
            move: {
                name: "thunder",
                url: "https://pokeapi.co/api/v2/move/87/",
            },
        },
        {
            move: {
                name: "iron-tail",
                url: "https://pokeapi.co/api/v2/move/231/"
            },
        },
    ],
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",
        back_shiny_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png",
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
        front_shiny_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png",
    }
}

console.log(person);