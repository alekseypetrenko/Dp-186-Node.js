import { ControllerMessage } from "./components/Message/ControllerMessage.js";
import { ControllerSearch } from "./search/ControllerSearch.js"

const msg = new ControllerMessage();
const search = new ControllerSearch(msg.handleSearch);