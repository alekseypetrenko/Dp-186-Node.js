function fib(n){
    let prev = 0;
    let next = 1;
    let arr = [];
    for (let i = 0; i < n; i++) {
        next = next + prev;
        prev = next - prev;
        arr.push( next)
    }
    return arr;
}

console.log(fib(50));

const fib2 = n => {
    if(n <= 1){
      return n;
    }else{
      return fib2(n - 1) + fib2(n - 2);
    }
  }

  
console.log(fib2(40));
