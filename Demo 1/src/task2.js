export function rectangleInRectangle(rect1, rect2) {
    let a = rect1.w;
    let b = rect1.h;
    let p = rect2.w;
    let q = rect2.h;

    let err = validation(rect1, rect2);
    if (typeof err === "object") {
        return err;
    }

    let smallRect, bigRect, numberRect;

    if (a * b > p * q) {
        smallRect = rect2;
        bigRect = rect1;
        numberRect = 1;
    } else {
        smallRect = rect1;
        bigRect = rect2;
        numberRect = 2;
    }

    if ((p <= a && q <= b) || p > a && b >= (2 * p * q * a + (p * p - q * q) * Math.sqrt(p * p + q * q - a * q)) / (p * p + q * q)) {
        return numberRect;
    }
    return 0;
}

function validation(rect1, rect2) {
    if (rect1["w"] <= 0 || rect1["h"] <= 0 || rect2["w"] <= 0 || rect2["h"] <= 0) return { status: "failed", reason: "Введите числа больше нуля" };
    if (typeof rect1.w != "number" || typeof rect1.h != "number" || typeof rect2.w != "number" || typeof rect2.h != "number") return { status: "failed", reason: "Введённые значения не являются числами" };
}
