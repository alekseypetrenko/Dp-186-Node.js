function getLuckyTicket(obj) {
    let min = obj.min;
    let max = obj.max;

    if (isNaN(Number(min)) || isNaN(Number(max))) return { status: "failed", reason: "Введите целые числа" };
    if (Number(min) > Number(max)) return { status: "failed", reason: "Min не может быть больше Max" };
    if (Number(min) === 0 || Number(max) === 0) return { status: "failed", reason: "Числа не могут быть равны 0" };
    min = Math.abs(Number(min));
    max = Math.abs(Number(max));
    const minLength = Math.ceil(Math.log10(min + 1));
    const maxLength = Math.ceil(Math.log10(max + 1));
    if (minLength > 6 || maxLength > 6) return { status: "failed", reason: "Числе не могут иметь больше 6 цифр" };

    let answer = {
        method: "",
        hardMethod: 0,
        simpleMethod: 0
    }

    for (let i = min; i <= max; i++) {
        let arr = i.toString().split("");
        let even = 0;
        let odd = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % 2 === 0) {
                even += Number(arr[j]);
            } else {
                odd += Number(arr[j]);
            }          
        }
        if(even === odd){
            answer.hardMethod++
        }
    }

    // simpleMethod, до 999 нет смысла считать
    for (let i = min; i <= max; i++){
        let arr = i.toString().split("");
        if (arr.length > 3 ){
            let first3Digits = arr.concat();
            let last3Digits = first3Digits.splice(arr.length - 3, 3);
            
        } else {
            console.log(2);
        }
    }


    //return answer;

}

console.log(getLuckyTicket({ min: 129998, max: 130010 }));

// console.log(getLuckyTicket({ min: 144, max: 155 }));
// console.log(getLuckyTicket({ min: 123, max: 7788 }));
// console.log(getLuckyTicket({ min: 144, max: 4578 }));
// console.log(getLuckyTicket({ min: 12345, max: 654897 }));
// console.log(getLuckyTicket({ min: 144, max: 5234 }));


