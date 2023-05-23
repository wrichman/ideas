// const butts = document.querySelector('.butts');
// const cool = document.querySelector('.cool');

// function handleCLick() {
//   console.log('IT GOT CLICKED');
// }
// butts.addEventListener('click', handleCLick);
// cool.addEventListener('click', handleCLick);

// butts.removeEventListener('click', handleCLick);

// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('you are buying it');
  console.log(event.target);
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});
