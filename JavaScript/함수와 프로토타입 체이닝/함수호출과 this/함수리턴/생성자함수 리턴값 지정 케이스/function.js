//Person() 생성자 생성

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    //명시적으로 다른 객체 반환
    return { name: 'bar', age: 11, gender: 'man' };
}

var foo = Person('foo', 30, 'man');
console.dir(foo);