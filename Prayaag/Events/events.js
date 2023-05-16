const buttons = document.querySelectorAll("button#btn");
const toggle_button = document.querySelector("button.toggle");
let disabled = false;


buttons.forEach((btn, id) => {
    btn.addEventListener('click', () => console.log(`Button ${id + 1} clicked!`));
})



const handleClick = (id) => {
    console.log(`Button ${id} cliked!`);
}

const activateButtons = () => {
    buttons.forEach(btn => btn.removeAttribute("disabled"))
    toggle_button.innerHTML = "Turn off the buttons";
    
    disabled = false;
}

const deactivateButtons = () => {
    buttons.forEach(btn => btn.setAttribute("disabled", ""));
    toggle_button.innerHTML = "Turn on the buttons";
    disabled = true;
}

toggle_button.addEventListener('click', () => {
    disabled ? activateButtons() : deactivateButtons();
})

