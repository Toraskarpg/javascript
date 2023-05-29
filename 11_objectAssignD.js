const professor ={
    profName: "Pratiksha",
    profAge: "55",
    profCollege: "A.M. College",
    profEducation: "Master in Computer Science",
    ProfSubject:"Javascript",
    degree: {
        engineering: "CSC",
        PHD: "Adv Computing",
        specialSub: "Java",
        graduation: "Computer",
    },
    certificates:["Hacker rank Participation", "Certificate in IFE course", "Certificate in advance programming"],
    value: function(){
        let totalValues =`Engineering: ${this.degree.engineering}, PHD: ${this.degree.PHD}, SpecialSub: ${this.degree.specialSub}, Graduation: ${this.degree.graduation}`
        return totalValues;
    }
    
}
professor.totalExperience = "14 years";
professor.profName= "Sachin";
professor.profAge= "32";
professor.certificates.push("Oracle Certified")




console.log(`-----------------typeof Object-------------`);
console.log(`1) type of Professor is: ${typeof professor}`);
console.log(""); 

console.log(`----------Properties of Object Degree--------------`);   
console.log('2) Properties of degree object are:', professor.degree);
console.log("");

console.log('-------------------Added Array----------------------');
console.log(`3) Array Of Certificate is:`,professor.certificates);
console.log("");

console.log(`------------------Concat All Degrees-----------------`);
 let allDegrees = professor.value();
 console.log(`4) Degrees are: ${allDegrees}`);
 console.log("");

 console.log(`-----------------Adding Property--------------------`);
 console.log(`5) Adding property in professor object: `, professor);
 console.log("");

 console.log(`-----------------Update Property-------------------`);
 console.log(`6) Updated object is: `, professor);
 console.log("");

 console.log(`--------------New Certificate is Added-------------`);
 console.log(`7) New Certificate: `, professor.certificates);
 console.log("");

 console.log(`---------------Last Elementof the Array---------------`);
let lastElementIs = professor.certificates[professor.certificates.length-1];
console.log(`8) Last Element Of the Array is: `,lastElementIs );
 




