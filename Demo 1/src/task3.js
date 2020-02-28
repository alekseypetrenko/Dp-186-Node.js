function sortTriangles(arr) {
    // делаем копию исходного массива, которую можно изменять
    let myArr = JSON.parse(JSON.stringify(arr));

    myArr = myArr.length < 1 || !Array.isArray(myArr) ? { status: "failed", reason: "Аргумент пустой или не является массивом" } : myArr;

    for (let i = 0; i < myArr.length; i++) {
        for (let j = i + 1; j < myArr.length; j++) {
            if (myArr[i].vertices === myArr[j].vertices) {
                return { status: "failed", reason: "Вершины треугольников не могут иметь одинаковое имя" };
            }
        }
        let values = Object.values(myArr[i]);
        values.shift();
        // проверяем является ли фигура треугольником
        if (values[0] + values[1] <= values[2] || values[1] + values[2] <= values[0] || values[2] + values[1] <= values[0]) {
            return { status: "failed", reason: 'Ошибка, сумма длин каждых двух сторон должна быть больше длины третьей стороны.' };
        }
        let splittedVert = myArr[i].vertices.toLowerCase().split("");
        for (vert in myArr[i]) {
            if (vert != "vertices") {
                if (typeof myArr[i][vert] != "number" || myArr[i][vert] == 0) {
                    return { status: "failed", reason: "Вершины должны быть числами больше нуля" };
                }
                if (splittedVert[0] != vert && splittedVert[1] != vert && splittedVert[2] != vert) {
                    return { status: "failed", reason: "Ключи вершин должны соответствовать названию треугольника. Например 'ABC', a: 1, b: 2, c: 3" };
                }
            }
        }

    }

    // let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return myArr;

}


let triangles = [
    { vertices: "BCA", b: 35, c: 20, a: 40 },
    { vertices: "ABF", a: 1, b: 2.2, f: 2.2 },
    { vertices: "EDF", e: 40, d: 30, f: 65 },
    { vertices: "ABC", a: 10, b: 20, c: 20 },
]

console.log(sortTriangles(triangles));