console.log(`1] Square of word Length is `);

function squareofWord(argument1){

      var lengthOfString = argument1.length;
      console.log(`     1.1) length of string is--> ${lengthOfString}`);
      square = lengthOfString*lengthOfString;
      return square; 
      
}
var returnValue = squareofWord("Javascript");
console.log(`     1.2) square of number is--> ${square}`);
var returnValue = squareofWord("Google Crome");
console.log(`     1.2) square of number is--> ${square}`);
var returnValue = squareofWord("Developer Smart");
console.log(`     1.2) square of number is--> ${square}`);
console.log(`---------------------------------------------`);

console.log(`2] Arithmetic Operations on String`);
var givenString = "I am Angular Developer";
function stringOperator(){
    var stringLength = givenString.length;
    console.log(`  2.1) length of string is--> ${stringLength}`);

    var noOfWord = givenString.split(" ");
    console.log(`  2.2) words of string is--> ${noOfWord}`);

    wordCount = noOfWord.length;
    console.log(`  2.3) word count of string is--> ${wordCount}`);

    var devidation = stringLength/wordCount;
    console.log(`  2.4) devidation is--> ${devidation}`);

    var multiplication = stringLength*wordCount;
    console.log(`  2.5) multiplication is--> ${multiplication}`);
}
stringOperator()


