function createCheeseBoard(height, width, sign) {
    if (sign === '') return { status: "failed", reason: "Введите 3-й аргумент" };
    if (height === 0 || height > 50 || width === 0 || width > 50) return { status: "failed", reason: "Введите 1-й и 2-й аргументы в диапазоне от 1 до 50" };
    if (!Number.isInteger(height) ||
        !Number.isInteger(width) ||
        typeof height != "number" ||
        typeof width != "number" ||
        typeof sign != "string"
    ) return { status: "failed", reason: "1-й и 2-й аргументы: целые числа, 3-й - строка" }
    sign = sign.length > 1 ? sign.charAt() : sign;
    height = Math.abs(height);
    width = Math.abs(width);

    let line = "";

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if ((i + j) % 2 == 0) {
                line += sign;
            } else {
                line += " ";
            }
        }
        line += "\n"
    }
    return line
}

console.log(createCheeseBoard(5, 5, "*"));


