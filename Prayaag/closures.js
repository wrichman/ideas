/* Creating a higher order generic adder function such that it holds a private variable*/


const createAdder = (value) => {

    let valueToAdd = value;
    return (x) => (valueToAdd + x);
}

const ten_adder = createAdder(10);



function createGreeting(greeting = '') {

    return function (name) {
        console.log(`${greeting} ${name}`);
    }

}

const sayHello = createGreeting("hello");
sayHello('Bob');