const first = 'Raymond';
const age = 100;

// the global scope is called window
// e.g. setTimeout(), window.setTimeout()
// only var is attached to window object

// function is attached to window
function go() {
  const myAge = 200;
  const hair = 'blonde';
  console.log(myAge);
  console.log(hair);
}

go();
