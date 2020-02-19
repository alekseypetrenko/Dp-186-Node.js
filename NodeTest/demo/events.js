const EventEmitter = require("events");

const emitter = new EventEmitter();

// emitter.on("anything", data => {
//     console.log("ON: anything", data);
// })

// emitter.emit("anything", {a: 1});

// setTimeout(()=>{
//    emitter.emit("anything", {a: 2});
// }, 1500);

class Dispatcher extends EventEmitter{
    subscribe(eventName, callback){
        console.log("[Subscribe...]");
        this.on(eventName, callback)
    }
    dispatch(eventName, data){
        console.log("[Dispatching..]");
        this.emit(eventName, data)
    }
}

const disp = new Dispatcher();

disp.subscribe("myEvent", data=>{
    console.log("On myEvent: ", data.name);
    
})

disp.dispatch("myEvent", {name: "Simple data"});