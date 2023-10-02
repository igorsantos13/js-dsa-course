function isPrime(n){
    //if is possible to divide return false
    if(n < 2)return false

    for(let i = 2; i < n; i++){
        if(n % i == 1){
            return true
        }else return false
    }
}

console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(4))