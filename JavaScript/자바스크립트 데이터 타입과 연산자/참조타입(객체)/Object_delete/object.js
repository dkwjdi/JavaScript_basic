//객체 리터럴을통한 foo객체 생성
var foo = {
    name: 'foo',
    age: 30,
    gender : 'male'
}

console.log(foo.name); // 'foo'
delete foo.name;
console.log(foo.name); //undefined

delete foo; //객체 자체를 삭제 시도
console.log(foo.age) //30  -> delete로 객체 자체 삭제x