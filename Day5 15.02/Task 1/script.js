// ----- Напишите свои функции-аналоги методов массивов используя только свойства массивов: pop, push, shift, unshift, concat

let arr = [1, 2, 3, 4, 5];

function myPop(arr){
    let lastEl = arr[arr.length-1];
    arr.length = arr.length -1;
    return lastEl;
}

function myPush(arr, ...rest){    
    for (let i = 0; i < rest.length; i++) {
        arr[arr.length] = rest[i];
    }
    return arr;
}

function myShift(arr){
    let firstEl = arr[0];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length - 1
    return firstEl;
}

function myUnshift(arr, ...rest){

}

function myConcat(arr, ...rest){

}