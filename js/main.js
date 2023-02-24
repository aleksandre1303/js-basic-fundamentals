/* The "if" statement */

let number1 = 14;
let number2 = 15;

let result1 = number1 > number2;
let result2 = number1 == number2;
let result3 = number1 < number2;

if (result1) {
  alert("number1 greather than number2");
} else if (result2) {
  alert("result1 is equal to number2");
} else {
  alert("number2 greather than number1");
}

// Boolean conversion //

/* let year = prompt('In which year was ECMAScript-2015 specification published?');

 let result = (year == 2015); // equality evaluates to true or false
 if (result) {
     alert( "That's correct!" );
     alert( "You'are so smart!" );
 }
 
 */

/* The "else" clause */

//  let year = prompt('In which year was ECMAScript-2015 specification published?');

//  if (year == 2015) {
//      document.write( "You guessed it right!" );
// } else {
//      document.write( "How can you be so wrong?" ); // any value except 2015
// }

/* Several conditions: "else if" */

/* (let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

   if (year < 2015) {
      alert( 'Too early...' );
   } else if (year > 2015) {
      alert( 'Too late' );
   } else {
      alert( 'Exactly' );
   }
   
   */

//   let number1 = 14;
//   let number2 = 15;

//   let result1 = (number1 > number2);
//   let result2 = (number1 == number2);
//   let result3 = (number1 < number2);

//   if(result1) {
//     alert( "number1 greather than number2" );
//   }  else if (result2) {
//      alert("result1 is equal to number2");
// }    else {
//      alert( "number2 is greather than number1" );
// }

/* Conditional operator '?' */

// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);
