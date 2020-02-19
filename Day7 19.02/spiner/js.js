let arr = [".", "o", "O"];

setInterval(obj => {
    console.clear();
    obj.counter = (obj.counter + 1) % arr.length;
    console.log(arr[obj.counter])
}, 500, {counter: 0});

