var msg = "My Name is Pratiksha.";
var star = "";

function line() {
    console.log(star);
}

function myFunction() {

    console.log("Message is-->", msg);
}

myFunction();
line();

var clgMsg = "Pratiksha Is Sceince Student";

function myClg() {
    console.log("College Meesage is--> ", clgMsg);
}
myClg();
line();

var firstName = "Pratiksha";
var lastName = "Toraskar";
var cityName = "Pune";
function personalDetails(firstVariable, lastVariable, cityVariable) { //Argument variable

    console.log("My Details is--> ", firstVariable, lastVariable, cityVariable);

}
personalDetails(firstName, lastName, cityName);
line();

var cricketerName = "Virat";
var wifeName = "Anushka";
function swapValuesDude(hubby, wife) {
    console.log("before swapping values are--> ", hubby, wife);
    temp = hubby;
    hubby= wife;
    wife = temp;
    console.log("After swapping values are--> ",  hubby, wife);

}
swapValuesDude(cricketerName, wifeName);
swapValuesDude(1000, 2000);
swapValuesDude(4,5);
line();


var a= 10.23;
var b= 600;
var c= 40;
function addThreeValues(a, b, c){
    var add = null;
    add = a + b + c;
    console.log("addition of three numbers-->", add);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello","Good","Morning");
console.log("-------------------------------------------");

function addition(num1, num2) {
    var result  = num1 + num2;// result = 300
    return result;
}
var returnValue = addition(100, 200);
console.log("Addition of number is: ", returnValue);
