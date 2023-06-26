console.log(`1] Find greatest Number`);

   var greaterNumber = function (value1, value2){
    var result = value1>=value2? `${value1}` : `${value2}`
    console.log(`Greater Number between ${value1}, ${value2} is -->${result}`)
}
greaterNumber(10,-10);
greaterNumber(100,899);
console.log(`----------------------------------------------`);

console.log(`2] Check Even Odd Numbers`);
var isEvenOrOddNum = function(value){
    var result = value % 2 == 0? `${value} is Even Number` : `${value} is Odd`
    return result;
}
var result = isEvenOrOddNum(29);
console.log(result);
var result = isEvenOrOddNum(44);
console.log(result);
var result = isEvenOrOddNum(0);
console.log(result);
var result = isEvenOrOddNum(101);
console.log(result);
console.log(`------------------------------------------------`);

console.log(`3] Check Which Word has Even or ODD Length`);

var wordLength = function(argument){
    var lengthOfArgument = argument.length;
    console.log(`lenth of word is--> ${lengthOfArgument}`);
    var result = lengthOfArgument%2 == 0?  `Even` : `Odd`;
    return result;
    
}
var result = wordLength("Javascript");
console.log(result);
var result = wordLength("Developer");
console.log(result);
var result = wordLength("Google");
console.log(result);


        




