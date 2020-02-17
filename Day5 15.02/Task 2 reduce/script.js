// ------  С помощью reduce, перепишите реализацию следующего кода ----- //////

// 1) ["Яблоко", "Банан", "Ананас"].map(el => el[0])
// => (3) ["Я", "Б", "А"]

console.log(["Яблоко", "Банан", "Ананас"].reduce((acc, cur) => {   
    acc.push(cur[0]);
    return acc;
},[])
);


// 2) ["Яблоко", "Банан", "Ананас"].filter(el => el[0].toLowerCase() == 'a')
// => ["Ананас"]

console.log(["Яблоко", "Банан", "Ананас"].reduce((acc, cur) => {   
    if (cur[0].toLowerCase() === "а"){
        acc.push(cur);
    }
    return acc;
},[]));


// 3) ["Яблоко", "Банан", "Ананас"].forEach((el, i, arr) => arr[i] = `${i+1}: ${el};`)

console.log(["Яблоко", "Банан", "Ананас"].reduce((acc, cur, index) => {   
    acc.push(`${index + 1}: ${cur}`);
    return acc;
}, []));
