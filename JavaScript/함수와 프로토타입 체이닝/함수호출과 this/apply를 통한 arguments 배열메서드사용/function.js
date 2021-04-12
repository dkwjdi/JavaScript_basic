function myFunction() {
    console.dir(arguments);

    //arguments.shift() 오류발생

    //arguments 객체를 배열로 변경
    var args = Array.prototype.slice.apply(arguments);
    console.dir(args);
}

myFunction(1, 2, 3);

