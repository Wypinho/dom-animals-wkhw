document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', formSubmission);
});

const formSubmission = function (event) {
  event.preventDefault();
  const animal = document.createElement('li')
    animal.textContent = `Name: ${event.target.name.value},
                        Species: ${event.target.species.value},
                        Continent; ${event.target.continent.value}`

    const list = document.querySelector('ul#endangered-animals');
    list.appendChild(animal)
    console.log(event);
};
