// function doctorize(firstName) {
//     return `Dr. ${firstName}`;
// }

// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// Function expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// Arrow functions: implicit due to being in one line
const inchToCm = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// returning an object
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE: Immediately Invoked Function Expression

(function (age) {
  console.log('Running the Anon function');
  return `You are cool and age ${age}`;
})(10);

// Methods!!
const wes = {
  name: 'Wes Bos',
  sayHi() {
    console.log('Hey Wes');
    return 'Hey Wes';
  },
  // Short hand method
  yellHi() {
    console.log('HEY WESSSS');
  },
  // Arrow function
  whisperHi: () => {
    console.log('hii wes');
  },
};

// Callback Functions

// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!');
}
button.addEventListener('click', () => {
  console.log('Nice Job!!!');
});

// Timer Callback
setTimeout(() => {
  console.log('Time to Eat!!');
}, 1000);
