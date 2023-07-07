//1
const cars = document.querySelector('#cars');

const delCar = document.querySelectorAll('li')[4];
cars.removeChild(delCar)
const dellCar = document.querySelectorAll('li')[2];
cars.removeChild(dellCar)

//3,4
const firstCar = document.createElement('li');
const lastCar = document.createElement('li');


firstCar.innerText = 'Bugatti';
lastCar.innerText = 'Ford';

cars.appendChild(lastCar)

const merc = document.querySelector('.listItem');
cars.insertBefore(firstCar, merc)

//2
const allLi = document.querySelectorAll('li');
for (let li of allLi){
li.classList.add('listItem');
}

const ulCar = document.querySelector('ul');
ulCar.classList.add('list');




//5
const inputName = document.createElement('input');
const inputSurName = document.createElement('input');
const inputPass = document.createElement('input');
const inputPassChek = document.createElement('input');


document.querySelector('form').appendChild(inputName);
document.querySelector('form').appendChild(inputSurName);
document.querySelector('form').appendChild(inputPass);
document.querySelector('form').appendChild(inputPassChek);

const inputs = document.querySelectorAll('input');

inputs[inputs.length-1].placeholder = 'passchek';
inputs[inputs.length-2].placeholder = 'password';
inputs[inputs.length-3].placeholder = 'YourSurname';
inputs[inputs.length-4].placeholder = 'YourName';
//6
const image = document.createElement('img');
image.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png';
document.querySelector('form').appendChild(image)
//7
const dell = document.querySelector('p');
dell.classList.remove('red', 'italic');



//8,9
const h1 = document.createElement('h1');
h1.innerText = 'this is h1 tag';
h1.style.color = 'blue';
h1.style.fontSize = '40px';

document.querySelector('#h1Wrapper').appendChild(h1);