//객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
    name: 'foo',
    major: 'computer science'
};

//객체 프로퍼티 읽기
console.log(foo.name); // foo
console.log(foo.major); // foo
console.log(foo['name']); //computer science
console.log(foo['major']); //computer science
console.log(foo.id); // undefined
console.log(foo['id']) // undefined

//객체 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major); // electronics engineering
console.log(foo['major']); //electronics engineering

//프로퍼티 동적생성
foo.age = 54;
console.log(foo.age); ///54
console.log(foo['age']); //54

//대괄호 표기법만을 사용해야 할 경우
foo['full-name'] = "foo bar";
console.log(foo.full - name); //NaN
console.log(foo['foo-name']); //foo bar