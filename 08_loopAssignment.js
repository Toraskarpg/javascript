// write a function factorial of Number with one argument and return result

let value = 0;
function fact(value){
   
    if (value==0) {
        console.log(`factorial of number is 1`);
        
    } if (value==null || value==undefined || value==NaN) {
        console.log(`invalid Input`);
        
    }else 
    
    for (let index = value - 1; index >=1; index--) {
       value = value * index ;
             
        
    }
    return value;
}
console.log(`-------------------------------------------------------------`);
console.log(`              Calculate Factorial of Given Number`);
console.log(`-------------------------------------------------------------`);
let factOfNum = fact(5);
console.log(`Factorial of number is ${factOfNum}`);
factOfNum = fact(3);
console.log(`Factorial of number is ${factOfNum}`);
factOfNum = fact(null);
console.log(`Coulden't calculate factorial of ${factOfNum}`);
factOfNum = fact(8);
console.log(`Factorial of number is ${factOfNum}`);
factOfNum = fact(undefined);
console.log(`Coulden't calculate factorial of ${factOfNum}`);
factOfNum = fact(9);
console.log(`Factorial of number is ${factOfNum}`);
factOfNum = fact(0);


// count charcter of 'a' or 'A' from given String
// given string is = "I AM Learning Javascript , The Language of internet"

function countCharA(char){
    count1=0;
    count2=0;
   
    for (let index = 0; index <= char.length-1; index++) {

        if (char.charAt(index)=='a') {
            
            // console.log(`character is ${char.charAt(index)}`); 
            count1++;               
        }else if (char.charAt(index)=='A') {
            count2++;
        }  
        
    }
    console.log(`Total No of Character 'A'is ${count2}`);
    console.log(`Total No  of character 'a' is ${count1}`);
}

console.log("");
console.log(`----------------------------------------------------------------`);
console.log(`        Count Character of 'a' or 'A' from given string`);
console.log(`----------------------------------------------------------------`);

countCharA("I AM Learning Javascript, The Language of internet");
countCharA("My favourite movie is LAggAn");






