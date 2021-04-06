//객체 리터럴을통한 foo객체 생성
var foo = {
    name: 'foo',
    age: 30,
    gender : 'male'
}

//for in 문을 이용해 출력
var prop;
for (prop in foo) {
    console.log(prop, foo[prop]);
}

