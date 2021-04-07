var foo = "I'm foo"; //전역변수

console.log(foo);
console.log(window.foo);

//함수 호출 할 때 this바인딩

var test = "This is test";
console.log(window.test);

var sayFoo = function () {
    console.log(this.test); // sayFoo() 호출 시 this는 전역객체에 바인딩
}

sayFoo();