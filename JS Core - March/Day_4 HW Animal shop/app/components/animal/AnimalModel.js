export class AnimalModel {
    link = "data/data.json"
    constructor(callback) {
        this.handleLoad = callback;
        // this.convertDate = callback2;
    }

    getAnimals() {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            this.animals = JSON.parse(xhr.responseText);
            this.handleLoad(this.animals);
            // this.convertDate(this.animals);
        })
        xhr.open("GET", this.link);
        xhr.send();
    }
}