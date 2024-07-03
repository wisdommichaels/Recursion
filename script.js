// ticket pricing 

// Children (age <= 12): $10
//     Teenagers (age 13-17): $15
//     Adults (age >= 18): $20

// let age= prompt("what is your age?");
//   if (age <= 12) {
//     alert("The price of your ticket is $10");
//          }else if(age <=17){
//         alert("The price of your ticket is $15");
//     }
//          else if(age >=18){
//         alert("The price of your ticket is $20");
//     }
// else {
//     alert("Sorry you are not eligible for this offer");
// }


// // weather clothing advicer
// let weatherCondition = prompt("What is the condition of your weather?")
// switch (weatherCondition) {
//     case "sunny":
//         alert("Wear a t-shirt");
//         break;

//         case "cloudy":
//         alert("Wear a jacket");
//         break;

//         case "rainy":
//         alert("Wear a rain jacket");
//         break;

//         case "snowy":
//         alert("Wear a snow coat");
//         break;

//         case "humid":
//         alert("Wear a hat and a coat");
//         break;

//     default:
//         alert("weather condition is not defined");
//         break;
// }


document.getElementById('leapYearForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const year = parseInt(document.getElementById('year').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(year)) {
        resultElement.textContent = 'Please enter a valid year.';
        return;
    }

    if (isLeapYear(year)) {
        resultElement.textContent = `${year} is a leap year.`;
    } else {
        resultElement.textContent = `${year} is not a leap year.`;
    }
});

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}