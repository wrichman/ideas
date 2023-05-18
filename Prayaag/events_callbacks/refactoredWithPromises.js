
const wait = (ms = 0) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

const animate = (e) => {
    const box = e.currentTarget;
    wait(1000)
    .then(() => {
        box.innerHTML = "Clicked!";
        return wait(1000);
    })
    .then(() => {
        box.classList.add("circle");
        return wait(1000);
    })
    .then(() => {
        box.classList.add("pink");
        return wait(1000);
    })
    .then(() => {
        box.classList.add("fade-away");
        return wait(1000);
    })
    .then(() => {
        box.classList.add("fade-in");
        return wait(1000);
    })
    .then(() => {
        box.classList.remove("circle");
        return wait(1000);
    })
    .then(() => {
        box.classList.remove("pink");
        return wait(1000);
    })
    .then(() => {
        box.classList.remove("fade-away");
        box.innerHTML = "Click Me!";
        console.log("Done Animating");
    })
    .catch(err => console.error(err));

}


box.addEventListener('click', animate);