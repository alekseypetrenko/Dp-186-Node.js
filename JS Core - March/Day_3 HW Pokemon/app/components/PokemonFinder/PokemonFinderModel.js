export class PokemonFinderModel{
    constructor(){
        this.link = "https://pokeapi.co/api/v2/pokemon/"
    }

    getName(name){
        const item = "";
        return fetch(`${this.link}${name}`).then(name => name.json()).then(data => {
            return item = data.name;
        })
    }
}