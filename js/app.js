document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', formSubmission);

  const button = document.querySelector('button#delete-all');
  button.addEventListener('click', deleteActivation);
});

const formSubmission = function (event) {
  event.preventDefault();

  const animal = createAnimal(event.target);
  const list = document.querySelector('ul#endangered-animals');
  list.appendChild(animal);

  event.target.reset();
};

const createAnimal = function (form) {
  const animal = document.createElement('li');
  animal.classList.add('animal');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  animal.appendChild(name);

  const species = document.createElement('h3');
  species.textContent = form.species.value;
  // console.log(form);
  // species.textContent = form.species.value;
  animal.appendChild(species);

  const continent = document.createElement('p');
  continent.textContent = form.continent.value;
  animal.appendChild(continent);

  return animal;
};

const deleteActivation = function () {
  const list = document.querySelector('ul#endangered-animals');
  list.innerHTML = '';
};
