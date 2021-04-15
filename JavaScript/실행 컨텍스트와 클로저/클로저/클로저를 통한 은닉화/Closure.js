function Hello(name) {
    this._name = name;
}

Hello.prototype.say = function () {
    console.log('Hello,' + this._name);
}

var hello1 = new Hello('준영1');
var hello2 = new Hello('준영2')
var hello3 = new Hello('준영3')

hello1.say();
hello2.say();
hello3.say();
hello1._name = "anonymous";
hello1.say();


{ let a = 3; }
console.log(a)