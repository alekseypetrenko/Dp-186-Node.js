import { ViewSearch } from "./ViewSearch.js";

export class ControllerSearch{
    constructor({notify}){
        this.view = new ViewSearch(this.handleSearch);
        this.notify = notify;
    }

    handleSearch = ()=>{
        this.notify('search', this.view.searchValue);
    }

}