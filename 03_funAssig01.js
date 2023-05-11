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

    console.log("My First Name is--> ", firstVariable, lastVariable, cityVariable);

}

personalDetails(firstName, lastName, cityName);
line();

var cricketerName = "Virat";
var wifeName = "Anushka";
function swapValuesDude(hubby, wife) {
    console.log("before swapping values are--> ", cricketerName, wifeName);
    var tempVariable = hubby;
    hubby= wife;
    wife = tempvariable;
    console.log("After swapping values are--> ",  hubby, wife);
}
swapValuesDude(criketerName,wifeName);





