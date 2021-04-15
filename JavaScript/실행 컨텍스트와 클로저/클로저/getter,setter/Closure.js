function factory_book(title) {
    
    return {
        get_title : function() {
            return title;
        },
        set_title: function(_title) {
            title = _title;
        }
    }
}

var c = factory_book('c');
var java = factory_book('java');

console.log(c.get_title()); //c
console.log(java.get_title()); //java
java.set_title('javascript');
console.log(java.get_title('javascript')); //javascript