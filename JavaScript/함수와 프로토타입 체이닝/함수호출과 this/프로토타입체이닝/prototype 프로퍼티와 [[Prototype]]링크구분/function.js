//Person 생성자 함수
function Person(name) {
    this.name = name;
}

var foo = new Person('foo');

console.dir(Person);
console.log(Person.constructor)
console.dir(foo);


function Myfunction() {
    return true;
}

console.dir(Myfunction);