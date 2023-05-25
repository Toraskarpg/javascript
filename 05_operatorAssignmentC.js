console.log(`TCS Interview Eligibility`);
var interviewEligibility = function (gradScore, hscScore, sscScore, candidateName){
   var result = (gradScore >= 70 || hscScore >= 80 || sscScore >= 90)? `Congrats ${candidateName} you are eligible for TCS Interview ` : `Unfortunatly you are not eligible for interview`;
   return result;
}
var result = interviewEligibility(80, 60, 90, "Pratiksha");
console.log(`result is--> ${interviewEligibility(80, 60, 90, "Pratiksha")}`)
var result = interviewEligibility(70, 65, 55, "Sachin");
console.log(`result is--> ${interviewEligibility(80, 60, 90, "Sachin")}`)
var result = interviewEligibility(60, 79, 88, "Kaveri");
console.log(`result is--> ${interviewEligibility(60, 79, 88, "Kaveri")}`)
