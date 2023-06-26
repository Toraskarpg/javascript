console.log(`Marriage Eligibility`);

function maleMarriageEligibility(gender, age, boyName) {
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage.` : `${boyName} you are not eligible for marriage.`;
    return result;
}
var result = maleMarriageEligibility("Male", 22, "Billgates");
console.log(result);
var result = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(result);

console.log(`-------------------------------------------------------`);
console.log();

function femaleMarriageEligibility(gender, age, girlName){
var result = (gender== "Female" && age>=18)? `Hey ${girlName} you are eligible for marraige.` : `${girlName} you are not eligibale for marriage.`;
return result;
}
var result = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(result);
var result = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(result);
