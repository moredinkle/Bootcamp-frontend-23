"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainer = void 0;
function getPokemonsId(constructor) {
    constructor.prototype.randomIds = [];
    for (var i = 0; i < 10; i++) {
        var randomId = Math.floor(Math.random() * 25);
        constructor.prototype.randomIds.push(randomId);
    }
}
var Trainer = /** @class */ (function () {
    function Trainer(name) {
        this.name = name;
    }
    Trainer.prototype.getPokemons = function () {
        var pokemonId = '';
        var endpoint = "https://pokeapi.co/api/v2/pokemon/".concat(pokemonId);
        // this.randomIds.map((id) => {
        // });
    };
    Trainer = __decorate([
        getPokemonsId
    ], Trainer);
    return Trainer;
}());
exports.Trainer = Trainer;
var ash = new Trainer('ash');
console.log(ash.randomIds);
