const getData = (type) => {

    const data = { "This is string data" : ["String data 1", "String data 2"]};
    return new Promise((resolve, reject) => {

        if (type !== "string") {
            setTimeout(() => reject(`Sorry, we don't provide data of type ${type}`), 1500);
        } else {
            setTimeout(() => resolve(data), 2500);
        }

    })

}


// Ways of Error handling

// 1. Try-catch

async function go() {
    let disallowedTypes = [];
    let currentType = "integer";

    try {
        const data = await getData(currentType);
        console.log(data);

    } catch (error) {
        disallowedTypes.push(currentType);
        console.error(error);
    }

}


// 2. Promises / Mix & Match
// -- Handles the error when the promise returns / gives back a response

async function go2() {
    const data = await getData("integer").catch((error) => console.error(error));
    console.log(data); // undefined
}

// go2();

// 3. Handling error when calling the function

// ASYNC FUNCTIONS ALWAYS IMPLICITLY RETURN PROMISES (really really weird)
async function go3() {
    const data = await getData("integer");
}

// go3().catch(err => console.error(err)); // this is beautiful


async function something() {
    await console.log("hello world");
}

// something().then(res => console.log('hey', res)).catch(err => console.error(err));
// we wouldn't be able to do .then() if something() wasn't an async function.
// console.log(something()); // -> returns a pending promise


// 4. Make a safe function (a type of higher order helper function)

function makeSafe(fn, errorHandler) {
    return function() {
        fn().catch(errorHandler);
    }
}

async function go() {
    const data = await getData("int");
    console.log(data);
}

// go() -----> unsafe

const safeGo = makeSafe(go, (err) => console.error(err));
// call this instead of go()

// the idea is to not care about catching errors when coding the getData() function(s), but then
// making those API request functions safe at a later time by doing makeSafe(getData(), *what you want to do with error*)
