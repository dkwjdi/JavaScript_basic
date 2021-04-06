//함수 표현식으로 foo()생성
var foo = function () {
    return function () {
        console.log('foo');
    };
};
