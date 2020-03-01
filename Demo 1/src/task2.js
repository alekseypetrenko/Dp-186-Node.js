// 1	1 10,  9 9	  => Possible
// 2	20 40, 2 4	  => Possible
// 3	50 20, 40 40  => Impossible
// 4	10 4, 5 5	  => Impossible
// 4	10 15, 15 10  => Possible


function rectangleInRectangle(rect1, rect2) {
    let a = parseInt(rect1.w);
    let b = rect1.h;
    let p = rect2.w;
    let q = rect2.h;

    if (rect1["w"] <= 0 || rect1["h"] <= 0 || rect2["w"] <= 0 || rect2["h"] <= 0) return { status: "failed", reason: "Введите числа больше нуля" };
    if (typeof a != "number" || typeof b != "number" || typeof p != "number" || typeof q != "number") return { status: "failed", reason: "Введённые значения не являются числами" };

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

    if ((p <= a && q <= b) ||
        p > a &&
        b >= (2 * p * q * a + (p * p - q * q) * Math.sqrt(p * p + q * q - a * q)) / (p * p + q * q)
    ) {
        return numberRect;
    }
    return 0;


}

console.log(rectangleInRectangle({ w: 1, h: 10 }, { w: 9, h: 9 }))
console.log(rectangleInRectangle({ w: 20, h: 40 }, { w: 2, h: 4 }))
console.log(rectangleInRectangle({ w: 50, h: 20 }, { w: 40, h: 40 }))
// console.log(rectangleInRectangle({ w: 10, h: 4 }, { w: 5, h: 5 }))
// console.log(rectangleInRectangle({ w: 10.1, h: 15 }, { w: 10.1, h: 15.2 }))
// console.log(rectangleInRectangle({ w: 10, h: 15 }, { w: 15, h: 10 }))
