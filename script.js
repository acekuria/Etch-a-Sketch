const body = document.querySelector('body')
const h1 = document.createElement('h1');
const header = document.querySelector('.header');
const board = document.querySelector('.board');
const button = document.querySelector('.button');


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
    console.log('ERROR')
  }
}

function colorSquare () {
  this.style.backgroundColor = color
}

function changeColor (choice) {
  color = choice;

}

