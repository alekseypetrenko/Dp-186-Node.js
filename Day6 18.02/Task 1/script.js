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
    let distance;
    let pointOne;
    let pointTwo;
    
    for (let i = 0; i < arr.length - 1; i++) {
        distance = Math.sqrt(Math.pow((arr[i+1][0] - arr[i][0]), 2) + Math.pow((arr[i+1][1] - arr[i][1]), 2));
            if (distance < minDistance){
                minDistance = distance;
                pointOne = arr[i];
                pointTwo = arr[i+1]
            }
        }
        return [pointOne, pointTwo]
    }

console.log(findClosesPoints(plane));
// 0: (2) [5, 5]
// 1: (2) [6, 3]