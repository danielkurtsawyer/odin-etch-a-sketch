const grid = document.querySelector('.grid');
const button = document.querySelector('button');

const sheet = document.styleSheets[0];

for(let i = 1; i <= Math.pow(16, 2); i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseenter', hoverStart);
    grid.appendChild(square);
}

function changeNumberOfSquaresPerSide(){
    let numSides = window.prompt('Enter the number of squares per side: ');

    // check if numSides is null before converting to a number because
    // if the user clicks cancel, we don't want to clear the grid
    if(numSides === null) return;

    numSides = +numSides;

    if(isNaN(numSides)){
        alert('Please enter a number');
        return changeNumberOfSquaresPerSide();
    }

    if(numSides > 100){
        alert('The maximum value is 100');
        return changeNumberOfSquaresPerSide();
    }

    clearGrid();
    editSquareRule(numSides);
    createNewGrid(numSides);
}

function clearGrid(){
    let child = grid.firstChild;
    while(child){
        child.remove();
        child = grid.firstChild;
    }
}

function editSquareRule(numSides){
    // delete the rule at index 3 in the stylesheet, which is for the square class 
    sheet.deleteRule(3);
    // create a new rule for the class square, updating the flex basis
    sheet.insertRule(`.square {flex: 1 1 ${90/numSides}vh; border: 1px solid black; box-sizing: border-box;}`, 3);
}

function createNewGrid(numSides){
    for(let i = 1; i <= Math.pow(numSides, 2); i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseenter', hoverStart);
        grid.appendChild(square);
    }
}

function hoverStart(e){
    const square = e.target;
    square.classList.add('hover');

   
}




