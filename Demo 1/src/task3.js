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

        let splittedVert = myArr[i].vertices.toLowerCase().split("");
        for (vert in myArr[i]) {
            if (vert != "vertices") {
                myArr[i][vert] = Math.abs(myArr[i][vert]);
                if (typeof myArr[i][vert] != "number" || myArr[i][vert] == 0) {
                    return { status: "failed", reason: "Вершины должны быть числами больше нуля" };
                }
                if (splittedVert[0] != vert && splittedVert[1] != vert && splittedVert[2] != vert) {
                    return { status: "failed", reason: "Ключи вершин должны соответствовать названию треугольника. Например 'ABC', a: 1, b: 2, c: 3" };
                }
            }
        }
        let values = Object.values(myArr[i]);
        values.shift();
        // проверяем является ли фигура треугольником
        if (values[0] + values[1] <= values[2] || values[1] + values[2] <= values[0] || values[2] + values[1] <= values[0]) {
            return { status: "failed", reason: 'Ошибка, сумма длин каждых двух сторон должна быть больше длины третьей стороны.' };
        }
    }

    let areaCalc = myArr.map(triangle => {
        let arr = []
        for (let vert in triangle) {
            if (vert != "vertices") {
                arr.push(triangle[vert])
            }
        }
        let p = (arr[0] + arr[1] + arr[2]) / 2
        let area = Math.sqrt(p * (p - arr[0]) * (p - arr[1]) * (p - arr[2]))
        return { vertices: triangle.vertices, area }
    })

    return areaCalc.sort((a, b) => a.area - b.area )
                    .map(el => el.vertices);
}


let triangles = [
    { vertices: "BCA", b: 35, c: -20, a: 40 },
    { vertices: "ABF", a: 1, b: 2.2, f: 2.2 },
    { vertices: "EDF", e: 40, d: 30, f: 65 },
    { vertices: "ABC", a: 10, b: 20, c: 20 },
]

console.log(sortTriangles(triangles));