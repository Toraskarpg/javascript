let sbiBank= {
    bankName: "SBI Bank",
    location: "Hadapsar",
    accountNo: "10025101710",
    ifscCode: "SBI000010025",
    interestRate: "12%",
    showDetail: function(){
        console.log(`Bank: ${this.bankName}, location: ${this.location},  Account No:${this.accountNo}, IFSC Code:${this.ifscCode}, Rate of Interest:${this.interestRate}`);
    }
}

const axisBank= {
    bankName: "Axis Bank",
    location: "Kothrude",
    accountNo: "20025101710",
    ifscCode: "AXI000020025",
    interestRate: "10%",
    showDetail: function(){
        console.log(`Bank: ${this.bankName}, location: ${this.location},  Account No:${this.accountNo}, IFSC Code:${this.ifscCode}, Rate of Interest:${this.interestRate}`);
    }

}
const hdfcBank= {
    bankName: "HDFC Bank",
    location: "Manjari",
    accountNo: "30025101710",
    ifscCode: "HDFC000030025",
    interestRate: "8%",
    showDetail: function(){
        console.log(`Bank: ${this.bankName}, location: ${this.location},  Account No:${this.accountNo}, IFSC Code:${this.ifscCode}, Rate of Interest:${this.interestRate}`);
    }
}
const yesBank= {
    bankName: "Yes Bank",
    location: "Camp Pune",
    accountNo: "40025101710",
    ifscCode: "YES000040025",
    interestRate: "12%",
    showDetail: function(){
        console.log(`Bank: ${this.bankName}, location: ${this.location},  Account No:${this.accountNo}, IFSC Code:${this.ifscCode}, Rate of Interest:${this.interestRate}`);
    }
}
console.log(`-------------------------------------SBI Bank Details------------------------------`);
console.table(sbiBank);
console.log("");
sbiBank.showDetail();
console.log("");

console.log(`------------------------------Axis Bank Details-------------------------------------`);
console.table(axisBank);
console.log("");
axisBank.showDetail();
console.log("");

console.log(`-------------------------------------HDFC Bank Details--------------------------------`);
console.table(hdfcBank);
console.log("");
hdfcBank.showDetail();
console.log("");

console.log(`-------------------------------------YES Bank Details----------------------------------`);
console.table(yesBank);
console.log("");
yesBank.showDetail();
console.log("");
