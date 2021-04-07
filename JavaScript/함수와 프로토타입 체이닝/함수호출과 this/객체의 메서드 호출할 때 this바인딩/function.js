//myObject 객체생성
var myObject = {
    naem: 'foo',
    sayName: function () {
        console.log(this.name);
    }
}

//otherObject 객체 생성
var otherObject = {
    naem : 'bar'
}

// otherObject.sayName()메서드
otherObject.sayName = myObject.sayName;

//sayName() 메서드 호출
myObject.sayName(); //foo
otherObject.sayName(); // bar