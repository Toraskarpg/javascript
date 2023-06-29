var word = "Javascript Language Of Internet"
// a e i o u == A E I O U

var upperString = "AEIOU";
var lowerString = "aeiou";
count=0

for (let index = 0;  index <= word.length-1;  index++) {

   if (upperString.includes(word[index]))
    {
    var upperLeter = word.charAt(index)
    console.log(`vowels are: ${upperLeter}`);
    count++

   }else if (lowerString.includes(word[index])) 
   {
    var lowerLeter = word.charAt(index)
    console.log(`lower vowels are: ${lowerLeter}`);
    count++
    
   }
}
console.log(`Total number of vowels in "${word}" are : ${count}`);


