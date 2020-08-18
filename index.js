import {handleSubmitButton} from './modules/submit.js';

//When submit button is clicked
document.getElementById('submit').addEventListener('click', handleSubmitButton)

// When enter is pressed in submit button
document.getElementById('cityInput').addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    handleSubmitButton();
  }
});