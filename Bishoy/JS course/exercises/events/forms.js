const wes = document.querySelector('.wes');

wes.addEventListener('click', (event) => {
  console.log('you clicked it');
  const changePage = confirm(
    'This website might be harmful, do you wish to proceed?'
  );
  if (!changePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"');

signupForm.addEventListener('submit', (event) => {
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry g');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
