class Vehicle {
    constructor(Name, No, Varient, Owner, Mileage){
        this.Name = Name;
        this.No = No;
        this.Varient = Varient;
        this.Owner = Owner;
        this.Mileage = Mileage; 
}
showDetails(){
    console.log(`Details Of Vehicle are--> ${this.Name}, ${this.No}, ${this.Varient}, ${this.Owner}, ${this.Mileage}`)
}
}

console.log("");
console.log("--------------------------------Objects Are-------------------------------------");
console.log("");

const HondaCity = new Vehicle("Honda City", "MH 43 TU 1710", "V CVT", "Sachin", "18.27kmpl");
const Scorpio = new Vehicle("Scorpio", "MH 12 KL 2503 ", "Z4 E", "Suhasini", "11kmpl");
const Verna = new Vehicle("Verna", "MH 12 KB 1668", "SX Turbo DT", "Pratiksha", "19.6kmpl" );
const Thar = new Vehicle("Thar", "MH 12 DT 1501", "AX OPT", "Ganesh", "15.2kmpl");


const array = [HondaCity, Scorpio, Verna, Thar ];


for (const element of array){
    element.showDetails();
}
console.log("--------------------------------------------------------------------------------");

class College {
    constructor(collegeName, adress, collegeCode, faculty, collegeCity ){
        this.collegeName = collegeName;
        this.adress = adress;
        this.collegeCode = collegeCode;
        this.faculty = faculty;
        this.collegeCity = collegeCity;
    }
    collegeDetails(){
        console.log(`College Details are-->${this.collegeName}, ${this.adress}, ${this.collegeCode}, ${faculty}, ${this.collegeCity}`);
    }
}
const collegeOne = new College("Fergusson College", "FC Road", "91", "Science", "Pune");
const collegeTwo = new College("AFMC College", "Wanavadi", "92", "Medical", "Pune");
const collegeThree = new College("IIT College", "Powai", "93", "Engineering", "Mumbai");
const collegeFour = new College("MIT College", "Loni", "94", "Polytechnic", "Pune");

// const result = collegeOne instanceof College;
// console.log(result);


function traverseObject(arg){
    for (const key in arg){
        if(Object.hasOwnProperty.call(arg, key)){
            const value = arg[key];
            console.log(`${key},${value}`);
        };
    }
}
console.log("");
console.log("----------------------------Traverse The college Object---------------------------------------------");
traverseObject(collegeOne);
console.log("--------------------------------------------------------------------------");
traverseObject(collegeTwo);
console.log("--------------------------------------------------------------------------");
traverseObject(collegeThree);
console.log("-----------------------------------------------------------------------------");
traverseObject(collegeFour);











