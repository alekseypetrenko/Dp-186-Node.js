import { ViewMessage } from "./ViewMessage.js";
import { ModelMessage } from "./ModelMessage.js";

export class ControllerMessage{
    constructor(){
        this.view = new ViewMessage();
        this.model = new ModelMessage(this.handleLoadMessages.bind(this));

        this.model.getMessages();
    }

    handleLoadMessages(arr){
        this.view.renderMessages(arr);
    }

    handleSearch = (str)=>{
        const data = this.model.filter(str);
        this.view.renderMessages(data);
    }
}