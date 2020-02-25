function cheessBoard(height, width, sign){
    //sign = sign === " " ?  {status: "error", reason: "неверно"} : sign
    if(sign == '') return {status: "failed", reason: "Аргумент char не может біть пустым"};
     console.log(height + width)
}


console.log(cheessBoard(1, 2, ""));
