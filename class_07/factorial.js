function factorial(n){
    //factorial is the product of all positive integers less or equal to 'n
    //facotorial of 0 is 1
    let result = 1;

    for(let i = 2; i<=n; i++){
        result *= i;
    }

    return result //Big-O = O(n)
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))