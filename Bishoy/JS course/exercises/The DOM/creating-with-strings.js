const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Pup`;
const myHTML = `
<div className="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
</div>
`;
item.innerHTML = myHTML;

// const itemImage = document.querySelector('.wrapper img');

// itemImage.classList.add('round');

// console.log(itemImage);

// string into DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);

