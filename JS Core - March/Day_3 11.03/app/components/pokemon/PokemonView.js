export class PokemonView {
    constructor(cback) {
        this.btn = document.querySelector(".btn-poke");
        this.info = document.querySelector(".pokemon-info");
        this.btn.addEventListener("click", cback)
    }

    renderPokemons(arr) {
        this.info.innerHTML = arr.map(p => this.getSinglePokemon(p)).join("");
    }


    getSinglePokemon({name, photo}) {
        return `<div class="card" style="width: 8rem;">
            <img src="${photo}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
            </div>
        </div>`
    }
}