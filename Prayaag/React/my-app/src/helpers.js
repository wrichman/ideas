// Helper functions module

const formatPrice = (cents) => {
    return `\$${cents/100}`;
}

function randomElement(array) {
    const index = Math.floor(Math.random() * array.length);

    return array[index];
}

const wait = async (ms = 0) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

function getFunName() {
    const adjectives = [
        "fun",
        "happy",
        "surprised",
        "crazy",
        "excited",
        "amazed"
    ];

    const nouns = [
        "woman",
        "man",
        "person",
        "dog",
        "whale",
        "plant",
        "human",
        "tiger",
        "lion",
        "puppy",
        "cat",
    ];

    return `${randomElement(adjectives)}-${randomElement(adjectives)}-${randomElement(nouns)}`;
}   

export { getFunName, formatPrice, wait };