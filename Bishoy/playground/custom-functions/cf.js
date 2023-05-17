// Function Defnition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // function body
  const tax = 1 + taxRate;
  const tip = 1 + tipRate;
  const finalAmount = billAmount * tax * tip;
  return finalAmount;
}

// Running function
// console.log('Running Calculate Bill!!');
// const myTotal = calculateBill(100, 0.13, 0.15);
// const myTotal2 = calculateBill(200, 0.13, 0.15);
// console.log(myTotal, myTotal2);
// console.log(`Your total is $${myTotal}`);
// console.log(`Your total is $${calculateBill()}`);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('wes');
console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = '') {
  return `HEY ${name.toUpperCase()}`;
}

const shout = yell(doctorize('wes'));
console.log(shout);

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
