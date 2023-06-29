function monthOfYear(monthNumber){
    switch (monthNumber) {
        case 1:
            console.log(`This month is January and its number is ${monthNumber}`);            
            break;
        case 2:
            console.log(`This month is February and its number is ${monthNumber}`);            
            break;
        case 3:
            console.log(`This month is March and its number is ${monthNumber}`);            
            break;
        case 4:
            console.log(`This month is April and its number is ${monthNumber}`);            
            break;
        case 5:
            console.log(`This month is May and its number is ${monthNumber}`);            
            break;
        case 6:
            console.log(`This month is June and its number is ${monthNumber}`);            
            break;
        case 7:
            console.log(`This month is July and its number is ${monthNumber}`);            
            break;
        case 8:
            console.log(`This month is August and its number is ${monthNumber}`);            
            break;
        case 9:
            console.log(`This month is September and its number is ${monthNumber}`);            
            break;
        case 10:
            console.log(`This month is October and its number is ${monthNumber}`);            
            break;
        case 11:
            console.log(`This month is November and its number is ${monthNumber}`);            
            break;
        case 12:
            console.log(`This month is December and its number is ${monthNumber}`);            
            break;
    
        default:
            console.log(`${monthNumber} is not valid Month`);
            break;
    }

}

monthOfYear(0)
monthOfYear(2)
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
