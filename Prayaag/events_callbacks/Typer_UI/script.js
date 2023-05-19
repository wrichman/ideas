function wait(ms = 0) {

    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandom(min = 1, max = 100, random = Math.random()) {
    return Math.floor(random * (max - min) + min);
}

console.log(getRandom(1, 6));

