let bankSbi = {
    accHolderName : "Pratiksha Toraskar",
    bankName : "SBI Bank",
    accType : "Saving",
    accountNo : "100251710",
    ifscCode : "SBI000010025"
}

const bankLocation = {
    street : "Pune-Solapur Road",
    village : "Hadapsar",
    city : "Pune",
    state : "Maharashtra",
    pin : "411028"
}

let rateOfIntrest ={
    homeLoanInterest : "12%",
    personalLoanInterest : "14%",
    duelInterest : "10%"
}


console.log("----------------------------SBI Bank Details------------------------------------------");
console.log("");
console.table(bankSbi);
console.log("");


console.log("------------------------------Location Details------------------------------------------");
console.log("");
console.table(bankLocation);

// -----------------clonning of bankSbi and Location------------------
let newClone = Object.assign({ } , bankSbi, bankLocation);
console.log("");
console.log("---------------------------Bank Details after clonning are--------------------------------");
console.log("");
console.table(newClone)
console.log("");

console.log("------------------------------Loan Interest Detail---------------------------------");
console.log("");
console.table(rateOfIntrest);
console.log("");

console.log("----------------------------SBI Bank Details After Clonning--------------------------");
console.log("");
let sbiDetail = Object.assign({ }, bankSbi, bankLocation, rateOfIntrest);
console.table(sbiDetail);


// Trverse the merged Object using " for of Loop "
console.log("");
console.log(`----------------------------Traverse the Properties if SBI Bank Detail-----------------------`);
for (const index in sbiDetail){
    console.log(sbiDetail[index]);
}




