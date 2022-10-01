
const counterContainer = document.createElement ('div');
counterContainer.className = 'counter-container'
document.body.appendChild (counterContainer);


const divCounterContainer = document.querySelector ('.counter-container')
const titleCounter = document.createElement ('p');
titleCounter.textContent = 'Counter';
titleCounter.className = 'title-counter';
divCounterContainer.appendChild (titleCounter);

const screenContainer = document.createElement ('div');
screenContainer.className = 'screen';
divCounterContainer.appendChild (screenContainer);

const numberValue = document.querySelector ('.screen');
const screenNumberValue = document.createElement ('div');
screenNumberValue.textContent = 0;
screenNumberValue.className = 'number';
numberValue.appendChild (screenNumberValue);

const newDivButtonContainer = document.querySelector ('.screen');
const buttonContainer = document.createElement ('div');
buttonContainer.className = 'button-container';
newDivButtonContainer.appendChild (buttonContainer);

const newDecrementBtn = document.querySelector ('.button-container');
const decrementButton = document.createElement ('button');
decrementButton.textContent = '-';
decrementButton.className = 'button-left';
newDecrementBtn.appendChild (decrementButton);

const newResetBtn = document.querySelector ('.button-container');
const resetButton = document.createElement ('button');
resetButton.textContent = '↻';
resetButton.className = 'button-reset';
newResetBtn.appendChild (resetButton);

const newIncrementBtn = document.querySelector ('.button-container');
const incrementButton = document.createElement ('button');
incrementButton.textContent = '+';
incrementButton.className = 'button-right';
newIncrementBtn.appendChild (incrementButton);


let add = incrementButton;
let remove = decrementButton;
let number = screenNumberValue;
let reset = resetButton;
let startValue = 0;

add.addEventListener ('click', function(){
 startValue += 1;
  number.innerHTML = startValue;
});

remove.addEventListener ('click', function(){
 startValue -= 1;
  number.innerHTML = startValue;
}); 

reset.addEventListener ('click', function() {
  startValue = 0;
  number.innerHTML = startValue;
})