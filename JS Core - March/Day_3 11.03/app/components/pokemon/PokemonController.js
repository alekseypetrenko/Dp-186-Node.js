import { PokemonModel } from "./PokemonModel.js";
import { PokemonView } from "./PokemonView.js";

export class PokemonController {
    constructor() {
        this.model = new PokemonModel();
        this.view = new PokemonView(this.handleClickRandomPokemon);
        // problem with context
        // this.view = new PokemonView(this.handleClickRandomPokemon.bind(this));  //with bind
        // this.view = new PokemonView(() => this.handleClickRandomPokemon()); with arrow function
    }

    // handleClickRandomPokemon() {
    //     this.model.getRandomPokemon().then(arr => {
    //         this.view.renderPokemons(arr);
    //     })
    // }

    // 3-d way to solve context problem
    handleClickRandomPokemon = () => {
        this.model.getRandomPokemon().then(arr => {
            this.view.renderPokemons(arr);
        })
    }
}