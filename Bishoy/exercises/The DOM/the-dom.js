const p = document.querySelector('p');
const imgs = document.querySelector('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');
// console.log(p);
// console.log(imgs);
// console.log(item2);
heading.textContent = 'wes is cool'; // setter
console.log(heading.textContent); // getter
console.log(heading.innerText);

// Classes
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'grass walkway'; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter
window.addEventListener('load', () => {
  console.log(pic.naturalWidth);
});

// pic.setAttribute('alt', 'REALLY LONG WALKWAY');
// console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', () => {
  alert(`Welcome ${custom.dataset.name} 
    ${custom.dataset.last}`);
});
