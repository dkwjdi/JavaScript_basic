//colorsArray 배열
var colorsArray = ["red", "blue", "yellow"];
console.log(colorsArray[0]); //red
console.log(colorsArray[1]); //blue
console.log(colorsArray[2]); //yellow

//colorsObj 객체
var colorsObj = {
    '0': "red",
    '1': "blue",
    '2': "yellow",
};
 
//typeof 비교
console.log(typeof colorsArray);// object (not array)
console.log(typeof colorsObj); //object

//length 프로퍼티
console.log(colorsArray.length);// 3
console.log(colorsObj.length); //undefined