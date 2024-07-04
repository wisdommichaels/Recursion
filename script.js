// Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400. 
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

const Year = 2024;
console.log(`${year} is a leap year: ${isLeapYear(year)}`);

// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:
// Children (age <= 12): $10
//     Teenagers (age 13-17): $15
//     Adults (age >= 18): $20


let age= prompt("what is your age?");
if (age <= 12) {
    alert("The price of your ticket is $10");
         }else if(age <=17){
        alert("The price of your ticket is $15");
    }
         else if(age >=18){
        alert("The price of your ticket is $20");
    }
else {
    alert("Sorry you are not eligible for this offer");
}


// Weather Clothing Adviser: Develop a program that asks the user for the current temperature and whether it is raining or not. Based on this information, advise the user on what clothing to wear.
let weatherCondition = prompt("What is the condition of your weather?")
switch (weatherCondition) {
    case "sunny":
        alert("Wear a t-shirt");
        break;

        case "cloudy":
        alert("Wear a jacket");
        break;

        case "rainy":
        alert("Wear a rain jacket");
        break;

        case "snowy":
        alert("Wear a snow coat");
        break;

        case "humid":
        alert("Wear a hat and a coat");
        break;

    default:
        alert("weather condition is not defined");
        break;
}


// Power Function
function power(x, n) {
    // Base case: Any number raised to the power of 0 is 1
    if (n === 0) {
        return 1;
    }
    // Recursive case: base * base^(exponent-1)
    return x * power(x, n - 1);
}

// Example usage:
// const base = 2;
// const exponent = 3;
// console.log(`${base} raised to the power of ${exponent} is: ${power(base, exponent)}`);



// document.getElementById('leapYearForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const year = parseInt(document.getElementById('year').value);
//     const resultElement = document.getElementById('result');
    
//     if (isNaN(year)) {
//         resultElement.textContent = 'Please enter a valid year.';
//         return;
//     }

//     if (isLeapYear(year)) {
//         resultElement.textContent = `${year} is a leap year.`;
//     } else {
//         resultElement.textContent = `${year} is not a leap year.`;
//     }
// });

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }
