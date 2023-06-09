class Employee{
    constructor(empId, empName, empDept, empSalary, empCompany){
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS" );
const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finanace", 47000, "TCS");
const empSonali = new Employee(66, "Sonali", "Finanace", 45000, "Infy");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empVinay = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [empAnil, empRadha, empRishi, empSonali, empMonika, empVinay, empMahi]
// const empName = ["Anil", "Radha", "Rishi", "Sonali", "Monika", "Vinayak", "Mahesh"]

console.log(`--------------Get the list of employee Name--------------`);
const empName = arrayEmployees.map( (employee)=>{       //using map()
    return employee.empName;
});
console.log(empName);

// {---------------get the list of employee name------------------}
// const empName = [];                          // using push method or accesing elements from object
// arrayEmployees.forEach((employee)=>{
//     empName.push(employee.empName);
// })
// console.log(empName);
console.log(` `);
console.log(`------------------------get the list of Department ---------------`);
const deptName = arrayEmployees.map((employee)=>{
       return employee.empDept;
})
console.log(deptName);

console.log(` `);
console.log(`---------------------get the list of employee ID's----------------------`);
const employeeID = arrayEmployees.map((employee)=>{
    return employee.empId;
})
console.log(employeeID);