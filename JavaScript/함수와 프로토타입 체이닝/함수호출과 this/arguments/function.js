//add 함수

function add(a, b) {
    //arguments 객체 출력
    console.dir(arguments);
    return a + b;
}

console.log(add(1));
console.log(add(1,2));
console.log(add(1, 2, 3));

function sum() {
    var result = 0;

    for (var i = 0; arguments.length; i++){
        result += arguments[i];
    }

    return result;
}

console.log(sum(1, 2, 3)); //6
console.log(sum(1, 2, 3, 4,5,6,7,8,9)); //45