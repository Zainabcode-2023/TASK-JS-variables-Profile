/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...
const fullName = "Zainab Alshaibah";
let yearOfBirth = 1996;
let hobby = " going to the gym";
let funFact = " i do not have:)";
let image = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403";




/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

 const fullNameString = `My name is ${fullName}`;
 const yearOfBirthString = `I am ${2023-yearOfBirth}`;
 const hobbyString = `my hobby is ${hobby}`; 




/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars++;
  console.log(stars);
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  stars--;
  console.log(stars);
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars = stars + 2;
  console.log(stars);
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars= stars - 2;
  console.log(stars); 
}
