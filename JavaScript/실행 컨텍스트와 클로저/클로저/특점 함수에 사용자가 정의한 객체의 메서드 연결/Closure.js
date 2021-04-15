function HelloFunc() {
    this.greeting = "hello";
}

HelloFunc.prototype.call = function (func) {
    func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function (greeting) {
    console.log(greeting);
}


var objHello = new HelloFunc();
console.log(objHello);
objHello.func = userFunc;
objHello.call();