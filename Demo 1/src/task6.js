export function getNumbers(length, num) {
    let err = validation(length, num);
    if (typeof err === "object") {
        return err;
    }
    
    length = Math.abs(length);
    num = Math.abs(num);
    
    let sqrt = Math.sqrt(num)
    if (!Number.isInteger(sqrt)) return { status: "failed", reason: "2-й аргумент не является квадратом целого числа" };

    let result = [];
    for (let i = 0; i < length; i++) {
        result.push(sqrt++);
    }

    return result.join(" ");
}

function validation(length, num) {
    if (!Number.isInteger(length) || !Number.isInteger(num)) return { status: "failed", reason: "Аргументы должны быть целыми числами" };
    if (length === 0 || num === 0) return { status: "failed", reason: "Аргументы функции должны быть больше 0" };
}
