const wait = (ms = 0) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

async function animate(id) {
    const box = document.getElementById("box");
    box.removeEventListener('click', animateBox);

    await wait(1000);
    box.innerHTML = "Clicked";
    await wait(1000);
    box.classList.add("circle");
    await wait(1000);
    box.classList.add("pink");
    await wait(1000);
    box.classList.add("fade-away");
    await wait(1000);
    box.classList.add("fade-in");
    await wait(1000);
    box.classList.remove("circle");
    await wait(1000);
    box.classList.remove("pink");
    await wait(1000);    
    box.classList.remove("fade-away");
    box.innerHTML = "Click Me!";

    document.getElementById("box").addEventListener('click', animateBox);

}

const animateBox = () => {
    animate("box");
}

document.getElementById("box").addEventListener('click', animateBox);

