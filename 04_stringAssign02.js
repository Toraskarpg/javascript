var slogen= "  Hey you are doing good, keep it up   ";

function stringHandsOn(){
   
    console.log("Given string is--> ", slogen); 
    console.log("---------------------------------------");

    var slogenLength = slogen.length;
    console.log("Length of the string is--> ", slogenLength);
    console.log("---------------------------------------");

    var trimString = slogen.trim();
    console.log(trimString);
    var stringLength = trimString.length;
    console.log("Length of the string aftr trimming is--> ", stringLength);
    console.log("---------------------------------------");

    var removedSpace = (slogenLength) - (stringLength);
    console.log("Total No of Extra Spaces are--> ", removedSpace);
    console.log("---------------------------------------");

    var firstChar = trimString.charAt(0);
    var lastChar = trimString.charAt(trimString.length-1);
    console.log("After removing axtra spaces first and last charachter is--> ",firstChar, lastChar);


}
stringHandsOn();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

