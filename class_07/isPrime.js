function isPrime(n){
  if(n < 2){
      return false
  }
  //Math.sqrt(n) - makes more optimal
  for(let i = 2; i < Math.sqrt(n); i++){
      if(n % i === 0){
          return false
      }
  }

  return true //Big-O = O(sqrt(n))
}

console.log(isPrime(1))
console.log(isPrime(7))
console.log(isPrime(15))