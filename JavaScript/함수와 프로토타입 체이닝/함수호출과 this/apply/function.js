//생성자 함수
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

//foo빈 객체생성
var foo = {};
//apply()메서드 호출
Person.apply(foo, ['foo', 30, 'man']);
console.dir(foo);

var bar = {};
Person.call(bar, 'bar', 23, 'woman');
console.dir(bar);