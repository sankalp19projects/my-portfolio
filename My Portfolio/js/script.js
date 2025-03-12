// script.js
const nameElement = document.getElementById('animated-name');
const nameText = "Sankalp Vats";
let index = 0;

function typeWriter() {
  if (index < nameText.length) {
    nameElement.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Adjust speed here
  }
}

typeWriter();