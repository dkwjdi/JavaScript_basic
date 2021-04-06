//함수 표현식으로 foo생성
var foo = function (func) {
    func(); //인자로 받은 func실행!
}

foo(function () {
    console.log('foo');
});