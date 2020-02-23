let plane  = [
    [2,2], // A
    [2,8], // B
    [5,5], // C
    [6,3], // D
    [6,7], // E
    [7,4], // F
    [7,8]  // G
  ]


function findClosesPoints(arr){
    let minDistance = Infinity;
    let currentDistance, firstPoint, secondPoint;

    // сравниваем 0-й элемент массива со 1-м, 2-м и т.д.
    // затем сравниваем 1-й элемент массива с 2-м, 3-м и т.д.
    for (let i = 0; i < arr.length; i++) { 
        for (let j = i+1; j < arr.length; j++) {
            currentDistance = Math.sqrt(Math.pow(arr[j][0] - arr[i][0], 2) + Math.pow(arr[j][1] - arr[i][1], 2))             
            if (currentDistance < minDistance){
                minDistance = currentDistance;
                firstPoint = arr[i];
                secondPoint = arr[j];
            }
        }
    }
    return [firstPoint,secondPoint]
}

console.log(findClosesPoints(plane));