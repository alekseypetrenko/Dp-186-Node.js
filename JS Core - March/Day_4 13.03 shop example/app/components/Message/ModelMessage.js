export class ModelMessage {
    link = "data/data.json";
    constructor(cback) {
        this.handleLoad = cback;
    }


    getMessages() {
        const ajax = new XMLHttpRequest();
        ajax.addEventListener("load", () => {
            this.messages = JSON.parse(ajax.responseText)
            this.handleLoad (this.messages);
        });
        ajax.open("GET", this.link);
        ajax.send();
    }
}