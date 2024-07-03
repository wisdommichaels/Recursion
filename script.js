
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

   
// Children (age <= 12): $10
//     Teenagers (age 13-17): $15
//     Adults (age >= 18): $20