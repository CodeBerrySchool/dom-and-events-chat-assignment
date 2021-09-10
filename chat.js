let nameInput = document.querySelector('.name-form__input');
let nameForm = document.querySelector('.nav__name-form');

function getName(event) {
  event.preventDefault();
  let name = nameInput.value;
  console.log(name);
}

nameForm.addEventListener('submit', getName);
