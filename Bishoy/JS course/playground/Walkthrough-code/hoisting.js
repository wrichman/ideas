// access functions and variables before created

function sayHi() {
  console.log('hey');
  console.log(add(200, 5));
}

function add(a, b) {
  return a + b;
}

sayHi();
