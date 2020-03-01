function getNumbers (length, num) {
    let arr = [];
    arr.push(length, num);

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string" ) {
            if(isNaN(arr[i] = Math.abs(arr[i]))) {
                return { status: "failed", reason: "Аргументы функции не являются числами" };                
            }   
        }
        if (arr[i] === 0) {
            return { status: "failed", reason: "Аргументы функции должны быть больше 0" };
        }
    }

    length = Math.abs(length);
    num = Math.abs(num);
    let sqrt = Math.sqrt(num);
    if (!Number.isInteger(sqrt)) {
        return { status: "failed", reason: "2-й аргумент не является квадратом целого числа" };
    } else {
        let start = sqrt + 1;

        for (let i = 0; i < length; i++) {
            console.log(start++);
        }
    }
    return arr
}

console.log(getNumbers ("10", "25"));
console.log(getNumbers (2, 5));
console.log(getNumbers (10, 144));
