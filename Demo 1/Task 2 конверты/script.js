
let one = {a: 3, b: 5};
let two = {c: 1, d: 2}


function analisys(one, two){
    if (calcArea(one) < calcArea(two)) {
        console.log("possible");
    } else {
        console.log("impossible");
        
    }
}


function calcArea(obj){
    let arr = []
    for (let key in obj){
        arr.push(obj[key])
    }
    return arr[0] * arr[1]
}

console.log(calcArea(one));
console.log(analisys(one, two));
