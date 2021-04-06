var factorialVar = function factorial(n) {
    return n * factorial(n - 1);
};

console.log(factorialVar(3)) //6
console.log(factorial(3)) // factorial is not defined