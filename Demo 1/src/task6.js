function showNumbersString(length, num) {
    length = Math.abs(length);
    num = Math.abs(num);

    let arr = [];
    arr.push(length, num);

    for (let i = 0; i < arr.length; i++) {
        if (!(arr.every(el => typeof el == "number"))) {
            return { status: "failed", reason: "Аргументы функции не являются числами" }
        }

        if (arr[i] === 0) {
            return { status: "failed", reason: "Аргументы функции должны быть больше 0" };
        }
    }

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








console.log(showNumbersString(2, 25));
