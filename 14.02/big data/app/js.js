let worker = new Worker("app/worker.js");

function countColor(){
    worker.postMessage({find: "colors", cars})
}

function mostFrequent(){
    worker.postMessage({find: "mostFreq", cars})
}

function countCars(){
    worker.postMessage({find: "countCars", cars})
}

function oldAndNew(){
    worker.postMessage({find: "oldAndNew", cars})
}


worker.onmessage = function(event){
    console.log(event.data)
}
