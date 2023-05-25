// given array is
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
console.log(`Given Array is: ${arrayNumbers}`);
length = arrayNumbers.length;
console.log(`1] length of array is:${arrayNumbers.length}`);

// 2] First & Last element of the Array 
firstElement = arrayNumbers[0]
lastElement = arrayNumbers[length-1]
console.log(`2] first and last element of the Array is: ${firstElement} & ${lastElement}`);

// 3] Third Last Element of the Array
thirdLastElement = arrayNumbers[length-3]
console.log(`3] Thirdlast element of the array is: ${thirdLastElement}`);

// 4] Even Numbers of the Array 
console.log(`4] Even Numbers of the Array:`);
for (const index in arrayNumbers){
    if(arrayNumbers[index]%2==0)
    {
    console.log(`   ${arrayNumbers[index]}`);
    }
}

// 5] Even Numbers of the Array 
console.log(`5] Odd Numbers of the Array: `);
for (const index in arrayNumbers){
    if(arrayNumbers[index]%2!==0)
    {
        console.log(`   ${arrayNumbers[index]}`);
    }
}

// 6] Addition of Even position Numbers of the Array

console.log(`6] Addition of Even positioned numbers is:`);
console.log(`   6.1] Even positioned numbers are:`);
let evenPositionSum = 0;
for(const index in arrayNumbers){
    if(index % 2 == 0 )
    {
        console.log(`     ${arrayNumbers[index]}`);
        evenPositionSum = evenPositionSum + arrayNumbers[index];
    }
}
console.log(`   6.2] Sum of the Even positioned Numbers is: ${evenPositionSum}`);

// 7] Addition of Odd position Numbers of the Array

console.log(`7] Addition of Odd Positioned Numbers`);
console.log(`   7.1] Odd Positioned Numbers are: `);
let oddPositionSum = 0;
for(const index in arrayNumbers){
    if( index % 2!= 0)
    {
        console.log(`     ${arrayNumbers[index]}`);
        oddPositionSum = oddPositionSum + arrayNumbers[index];
    }
}
console.log(`   7.2] Sum of the Odd positioned Numbers is: ${oddPositionSum}`);

// 8] Sum of all elements from Array
console.log(`8] Addition of all Elements `);
let sumOfElements = 0;
for (const index in arrayNumbers){
    sumOfElements = sumOfElements + arrayNumbers[index];
}   
console.log(`   Sum of the elements is: ${sumOfElements}`);


// 9] Numbers which are multiple of five
console.log(`9] numbers which are multiple of five`);
for (const index in arrayNumbers){
    if(arrayNumbers[index] % 5 == 0 ){
        console.log(`   ${arrayNumbers[index]}`)
    }
}

// 10] Is Number 115 available in array
console.log(`10] Is 115 available in array: ${arrayNumbers.includes(115)}`);

// 11] Is Number 23 available in array
console.log(`11] Is 23 available in array: ${arrayNumbers.includes(23)}`);

// 12] insert 55, 66 before index 3
console.log(`12] Insert 55 & 66 before index 3`);
let arrSplice = arrayNumbers.splice(3, 0, 55, 66);
console.log( `   [ ${arrayNumbers} ]`);

// 13] delete 3 elements from starting from index 4
console.log(`13] Delete 3 Elements from index 4`);
let spliceArray = arrayNumbers.splice(4, 3);
console.log(`   Elements whitch are deleted:     [ ${spliceArray} ]`); 
console.log(`   After deling elements array is:  [ ${arrayNumbers}]`); 









