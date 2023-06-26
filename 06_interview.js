console.log(`Check TCS interview eligibility `);
let interEligibility = function (gradScore, hscScore, sscScore, candidateName){
if (gradScore >=70 || hscScore>=80 || sscScore>=90) {      
    console.log(`Ohh congratulations ${candidateName} you are eligible for TCS interview.`);
} else {
    console.log(`${candidateName}, sorry you are not eligible for TCS interview, Better luck next time...!`);
    
}

}
interEligibility(80,86,90,"Pratiksha")
interEligibility(70,65,55,"Sachin")
interEligibility(60,79,88,"Priyanka")
