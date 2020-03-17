import { ViewMessage } from "./ViewMessage.js";
import { ModelMessage } from "./ModelMessage.js";

export class ControllerMessage {
    constructor({ subscribe }) {
        this.view = new ViewMessage();
        this.model = new ModelMessage(this.handleLoadMessages.bind(this));

        this.model.getMessages();
        this.subscribe = subscribe;
        this.subscribe('search', this.handleSearch);
    }

    handleLoadMessages(arr) {
        this.view.renderMessages(arr);
    }

    handleSearch = (str) => {
        const data = this.model.filter(str);
        this.view.renderMessages(data);
    }
}