let arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];
console.log(`Type of array: ${typeof arrayOfRollNumbers}`);

let lengthOfArray = arrayOfRollNumbers.length;
console.log(`Length of array is : ${lengthOfArray}`);

// Accessing array element
const zerothIndexValue = arrayOfRollNumbers[0];
console.log(`Zeroth index value: ${zerothIndexValue}`);

// Access the array element 90
const thirdIndexValue = arrayOfRollNumbers[3];
console.log(`Third index value: ${thirdIndexValue}`);

// Accessing last element
let arrayLength = arrayOfRollNumbers.length;
const lastElement = arrayOfRollNumbers[arrayLength-1];
console.log(`Last element: ${lastElement}`);

var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
for (let index = 0; index < arrayNames.length; index++) {
    const element = arrayNames[index];
    console.log(element);
}

console.log(`------------ for in loop -----------------`);
for (const index in arrayNames) {
    console.log(arrayNames[index]);
}

console.log(`------------ for of loop -----------------`);
for (const element of arrayNames) {
    console.log(element);
}

console.log(`------- WAP to get even indexed element ------`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
// WAP to get even indexed element
for (const index in arrayNames) {
   if (index%2==0) {
    console.log(`${arrayNames[index]}`);
   }
}

console.log(`---------- join() ------------`);
let names = arrayNames.join(", ");
console.log(names);

console.log(`------ Resize an array -------`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
arrayNames.length = 3;
console.log(arrayNames);