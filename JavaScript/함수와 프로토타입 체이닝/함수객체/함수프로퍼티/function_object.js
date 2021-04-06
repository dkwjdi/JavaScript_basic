//함수 선언 방식
function add(x, y){
    return x + y;
}

//add() 함수 객체에 result, status프로퍼티 추가
add.result = add(3, 2);
add.status = 'OK';

console.log(add.result);
console.log(add.status);
console.dir(add);