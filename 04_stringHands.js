var givenString = "  Hey you are doing good, keep it up   ";

function stringHandsOn(){
    console.log("------------------------------------------");
    console.log("Given String is--> ", givenString);
    var givenStringLength = givenString.length;
    console.log("Length of given string is--> ", givenStringLength);
    console.log("------------------------------------------");

    var trimString = givenString.trim();
    console.log("After removing the spaces string is-->", trimString);
    var lengthOfTrimeString = trimString.length;
    console.log("length of the trimed string is--> ", lengthOfTrimeString);
    console.log("------------------------------------------");

    var removeSpaces = (givenStringLength) - (lengthOfTrimeString)
    console.log("Removed Space is--> ", removeSpaces);
    console.log("------------------------------------------");

    var firstChar = trimString.charAt(0);
    console.log("First Character of the string is--> ", firstChar);
    var lastChar = trimString.charAt(trimString.length - 1);
    console.log("Last Character of the string is--> ", lastChar);
    console.log("------------------------------------------");

    var resultSplit = trimString.split(" ");
    console.log(resultSplit);
    console.log("Total No of words--> ", resultSplit.length);
    console.log("------------------------------------------");

    var indexOfWord = trimString.indexOf("good");
    console.log("Index of word good after trim string is--> ",indexOfWord);
    console.log("------------------------------------------");

    var sliceOfString = trimString.slice(22, 30);
    console.log("String using slice is--> ",sliceOfString);
    console.log("------------------------------------------");

    var substringOfString = trimString.substring(22, 30);
    console.log("String using substring is--> ",sliceOfString);
    console.log("------------------------------------------");

    var stringEndWith = trimString.endsWith("up");
    console.log("string end with up--> ", stringEndWith);
    console.log("------------------------------------------");

    var stringStartsWith = trimString.startsWith("Hey");
    console.log("string after trim starts with word Hey--> ",stringStartsWith);
    console.log("------------------------------------------");   
}
stringHandsOn();