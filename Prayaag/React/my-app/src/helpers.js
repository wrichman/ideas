// Helper functions module

function randomElement(array) {
    const index = Math.floor(Math.random() * array.length);

    return array[index];
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

export { getFunName };