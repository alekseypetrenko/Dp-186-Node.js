import { ViewSearch } from "./ViewSearch.js";

export class ControllerSearch {
    constructor(handleS) {
        this.view = new ViewSearch(this.handleSearch);
        this.handleSearchMessage = handleS;
    }

    handleSearch = () => {
        this.handleSearchMessage(this.view.searchValue);
    }
}