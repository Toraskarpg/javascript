var num1;//
num1 = num1++; // undefined + 1 ==> NaN
console.log(`${num1}, type of NaN is ${typeof num1}`);

console.log(`${0/0}`);

var numTwo = "200";
numTwo = numTwo++; // 200 + 1
console.log(`${numTwo}`);

var num3 = "Ten";// "10" ==> 10
num3 = --num3; 
console.log(`${num3}`);

var city = "Pune";
var result = +city;
console.log(`${result}`);

var num5 = "100";
var result = +num5;
console.log(`Result is ${result} and it's type is: ${typeof result}`);

 console.log(`---------------------------------------------------------`);

var num6 = 0;
var num7 = ' ';
var result = num6 == num7;
console.log(result);

var num6 = 0;
var num7 = '0';
var result = num6 == num7;
console.log(result);

var num6 = 0;
var num7 = false;
var result = num6 == num7;
console.log(result);

var num6 = null;
var num7=undefined;  // consider as a string
var result = num6 == num7;
console.log(result);



var num6 = 1;
var num7 = [1];
var result = num6 == num7;
console.log(result);

var num6 = 1;
var num7 = true;
var result = num6 == num7;
console.log(result);

var num6 = 1;
var num7 = '1';
var result = num6 == num7;
console.log(result);

var num8 = "Thirty"
var result = Number(num8);
console.log(result);

var num6 = null;
var num7;      //consider as a undefined
var result = num6 == num7;
console.log(result);

