function sortTriangles(arr) {
    let copyArr = JSON.parse(JSON.stringify(arr))

    copyArr = copyArr.length < 1 || !Array.isArray(copyArr) ? {status: "failed", reason: "Аргумент пустой или не является массивом"} : copyArr

    for (let i = 0; i < copyArr.length; i++) {
        for (let j = i + 1; j < copyArr.length; j++) {
            if (copyArr[i].vertices === copyArr[j].vertices){
                return {status: "failed", reason: "Вершины треугольников не могут иметь одинаковое имя"}
                
            } 

            
        }

        let splittedVert = copyArr[i].vertices.toLowerCase().split("");
        let keys = Object.keys(copyArr[i]);
        keys.shift();
        let values = Object.values(copyArr[i]);
        values.shift()
        console.log(values);
        
        if(values[0] + values[1] <= values[2] || values[1] + values[2] <= values[0] || values[2] + values[1] <= values[0]) {
            return {reson: 'Ошибка, сумма длин каждых двух сторон должна быть больше длины третьей стороны.'}
        }
        


        if (splittedVert[i] != keys[i]) {
            return {status: "failed", reason: "Ключи вершин должны соответствовать названию треугольника. Например 'ABC', a: 1, b: 2, c: 3"}
        }
        // if (rs+bs<=ls || ls+rs<=bs || bs+ls<=rs) //return dieError('The values entered cannot make a triangle.  The sum of the length of every two sides must exceed the length of the third side.');
        // return dieError('Ошибка, сумма длин каждых двух сторон должна быть больше длины третьей стороны.');
   
    }
    

    return copyArr

}


let triangles = [
    { vertices: "ABC", a: 10, b: 20, c: 22.36 },
    { vertices: "BCA", b: 35, c: 40, a: 40 },
    { vertices: "EDF", e: 10, d: 2, f: 65.3 },
    //{ vertices: "ABC", a: 10, b: 20, c: 20 },
]


console.log(sortTriangles(triangles));