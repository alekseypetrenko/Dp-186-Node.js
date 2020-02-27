function fib(n) {
  let prev = 0, next = 1;
  let arr=[]
  for (let i = 0; i < n; i++) {
    next = prev + next;
    prev = next - prev;
    arr.push(next)
  }
  return arr
}

console.log(fib(8));
