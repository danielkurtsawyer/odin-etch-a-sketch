const grid = document.querySelector('.grid');

for(let i = 1; i <= Math.pow(16, 2); i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseenter', hoverStart);
    //square.addEventListener('mouseleave', hoverEnd);
    grid.appendChild(square);
}

function hoverStart(e){
    const square = e.target;
    square.classList.add('hover');
}

/*
function hoverEnd(e){
    const square = e.target;
    square.classList.remove('hover');
}
*/
