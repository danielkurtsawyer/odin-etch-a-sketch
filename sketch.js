const grid = document.querySelector('.grid');
const button = document.querySelector('button');

button.addEventListener('click', changeNumberOfSquaresPerSide);

const sheet = document.styleSheets[0];

for(let i = 1; i <= Math.pow(16, 2); i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseenter', hoverStart);
    grid.appendChild(square);
}

function changeNumberOfSquaresPerSide(){
    let numSides = +(window.prompt('Enter the number of squares per side: '));

    if(numSides === null) return;

    if(isNaN(numSides)){
        alert('Please enter a number');
        return changeNumberOfSquaresPerSide();
    }

    if(numSides > 100){
        alert('The maximum value is 100');
        return changeNumberOfSquaresPerSide();
    }

    clearGrid();
    // editSquareRule(numSides);
    // createNewGrid(numSides);
}

function clearGrid(){
    let child = grid.firstChild;
    while(child){
        child.remove();
        child = grid.firstChild;
    }
}

function hoverStart(e){
    const square = e.target;
    square.classList.add('hover');
}


