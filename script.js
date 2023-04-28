const body = document.querySelector('body')
const h1 = document.createElement('h1');
const header = document.querySelector('.header');
const board = document.querySelector('.board');
const button = document.querySelector('.button');
const userInput = document.querySelector('input');


function populateBoard(size) {
  let squares = board.querySelectorAll('div');
  squares.forEach(div => div.remove());
  
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


  for (let i = 0; i < size**2; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'blue';
    square.classList.add('square')
    board.insertAdjacentElement('beforeend',square)
    square.addEventListener('mouseover', colorSquare)
  }
}

populateBoard(20);

function changeSize(input) {
  if (input <= 100 && input >= 2) {
    populateBoard(input);
  } else {
    alert('Size must be between 2 and 100')
  }
}

function colorSquare () {
  if (color==='random'){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const newColor = "#" + randomColor;
    this.style.backgroundColor = newColor;
  } else {
    this.style.backgroundColor = color
  }
}

function changeColor (choice) {
  color = choice;

}

function Reset () {
  input = 20 
  changeSize(input);

  userInput.value = 20
}

