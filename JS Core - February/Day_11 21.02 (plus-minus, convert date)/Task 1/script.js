var arr = [1,2,3];

// 1+2+3
// 1+2-3
// 1-2+3
// 1-2-3



function plusMinus(arr, num){
    if(num < -10 || num > 10){
        console.log(`Second arg should be between -10 and 10. Now it's = ${num}` );
    }
    if(arr.length < 2 || arr.length > 22){
        console.log("Error");
    }

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0 || arr[i] > 20){
            console.log("Error");
        }
    }

}

plusMinus(arr, -10)