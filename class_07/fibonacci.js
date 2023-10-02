function fibonacci(n){
  let fib = [0,1]
  for(let i = 2; i<n; i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib //O(n)? depends on the input size to be completed
}

console.log(fibonacci(7))