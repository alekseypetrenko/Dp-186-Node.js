import { PokemonFinderView } from "./PokemonFinderView.js";
import { PokemonFinderModel } from "./PokemonFinderModel.js"

export class PokemonFinderController {
    constructor() {
        this.view = new PokemonFinderView(this.handleClick);
        this.model = new PokemonFinderModel();
    }

    handleClick = () => {
    console.log(this.model.getName(this.view.findItem()));
    
        // if(this.view.findItem() === this.model.getName()){
        //     // render pokemons ul
        // } else {
        //     // render other ul
        // }
    
    }

}