//전역변수 value 정의
var value = 100;

//myObject 객체 생성

var myObject = {
    value: 1,
    func1: function () {
        var that = this;

        this.value += 1;
        console.log("func1 called", this.value);
        
        func2 = function () {
            that.value += 1;
            console.log("func2 called", that.value);

            func3 = function () {
                that.value += 1;
                console.log("func3 called", that.value);
    
            }
            func3();
        }
        func2();
    }
};

myObject.func1();