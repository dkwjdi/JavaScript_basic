//Person() 생성자 함수
var Person = function (name) {
    this.name = name;
}

//foo객체 생성
var foo = new Person('foo');
console.log(foo.name); //foo
