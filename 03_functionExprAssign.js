
console.log(`1] Square of Numbers`);
var squareOfNumber = function(num){
    var square = num*num;
    return `square of givne no is--> ${square}`;

}
var square =squareOfNumber(5);
console.log(square);
var square =squareOfNumber(6);
console.log(square);
var square =squareOfNumber(25);
console.log(square);
var square =squareOfNumber(100);
console.log(square);
console.log(`------------------------------------------`);

var retangle = function(length, width){
    var areaOfRectangle = length*width;
    return `2] Area Of Rectangle is--> ${areaOfRectangle}`;
}
   var areaOfRectangle =retangle(499,917);
   console.log(areaOfRectangle);
   console.log(`------------------------------------------`);

var swapValue = function(arg1,arg2){
    console.log(`3]before swap values are-->  ${arg1} ${arg2}`);
    temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(`  after swap values are--> ${arg1} ${arg2}`);
}
    swapValue("virat","Anushka")
    console.log(``);
    swapValue(`1000`,`2000`);
    console.log(`------------------------------------------`);
   

    console.log(`4] Various operations on string`);
var stringFun = function(){
    var givenString = "JS the most popular language of internet";
    var totalChar = givenString.length;
    console.log(`A. total character of the given string-->  ${totalChar}`);
    console.log(`B. charachter at index 6--> ${givenString.charAt(6)}`);
    console.log(`C. character at index 11--> ${givenString.charAt(11)}`);
    console.log(`D. last character of the string is-->${givenString.charAt(totalChar-1)}`)
    console.log(`E. first character of the string is--> ${givenString.charAt(0)}`);

    var stringWords = givenString.split(" ");
    console.log(`F. total no of given string is--> ${stringWords}`);

    var square = givenString.split(" ");
    console.log(`F. total no of words is--> ${square.length}`);

    var squareofword = square.length;
    console.log(`square of the total no of word is--> ${squareofword*squareofword}`);
    
}

stringFun();
    
    


   

