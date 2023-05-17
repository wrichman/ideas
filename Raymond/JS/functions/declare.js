// Function Expression

const doctorize = function(firstname) {
  return `Dr ${firstname}`;
}

// anonymous func
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// concise function (arrow function)
const inchToCM = (inches) => inches * 2.54;

const makeABaby = (first, last)  => ({name: `${first} ${last}`, age: 0});

// IIFE immediately invoked function expression

(function() {
  console.log('Running the Anon function');
  return 'You are cool';
})();

const wes = {
  name: 'Wes',
  sayHi: function() {
    console.log('Hey Wes');
    return 'Hey Wes';
  },
  yellHi() {
    console.log('HEY WESSSS');
  },
  whisperHi: () => {
    console.log('hi weessss');
  }
}

// callback function
// click callback
const button = document.querySelector('.clickMe');
console.log(button);

button.addEventListener('click', wes.yellHi);
