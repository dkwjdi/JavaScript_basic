//add() 함수 선언문
var add = function (x, y) {
    return x + y;
};

console.log(add(2, 3)); //5

var add = function sum(x, y) {
    return x + y;
}

console.log(add(2, 3)); //5
console.log(sum(3, 4));
//Uncaught ReferenceEerror : sum is not defined 에러발생