export function createCheeseBoard(height, width, sign) {
    let err = validation(height, width, sign);
    if (typeof err === "object") {
        return err;
    }
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
    return line;
}

function validation(height, width, sign) {
    if (height === 0 || height > 50 || width === 0 || width > 50) return { status: "failed", reason: "Введите 1-й и 2-й аргументы в диапазоне от 1 до 50" };
    if (height === undefined || width === undefined || sign === undefined) return { status: "failed", reason: "Какой-то из 3 параметров пустой" };
    height = Number(height);
    width = Number(width);
    Math.abs(height);
    Math.abs(width);
    if (typeof height != "number" || typeof width != "number" || !Number.isInteger(height) || !Number.isInteger(width)) {
        return { status: "failed", reason: "1-й и 2-й аргументы должны быть целыим числами, 3-й - строкой" };
    }
}
