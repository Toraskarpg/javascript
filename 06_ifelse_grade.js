
console.log(`check whether he or she eligible for voting or not`);
console.log(`----------------------------------------------------`);

function voteEligibility (age) {
if (age<=0 || age>120 || age==undefined || age==null)
{
    console.log(`age ${age} is Invalid Data`);
}
else{
    if (age<18 ){
        console.log(`age ${age} is less than 18 you are not Eligible for Voting.`);
    }
    else{
        console.log(`age ${age} is greater than 18 you are eligible for voting `);
    }
}
}
voteEligibility(45)
voteEligibility(17)
voteEligibility(8)
voteEligibility(20)
voteEligibility(-10)
voteEligibility(200)
voteEligibility(0)
voteEligibility(undefined)
voteEligibility(null)