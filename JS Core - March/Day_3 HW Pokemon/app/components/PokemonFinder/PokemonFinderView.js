export class PokemonFinderView {
    constructor(callback) {
        this.btn = document.querySelector(".btn-find");
        this.pokemons = document.querySelector(".pokemons");
        this.other = document.querySelector(".other");
        this.btn.addEventListener("click", callback);
    }

    findItem() {
        return this.input = document.querySelector(".name-find").value;
    }

    // renderItem() {

    // }
}