let gridValue = prompt("Choose a gird Value between 16 and 64");
const box = document.querySelector(".box");

//function to create a grid
function createGrid(gridValue){
    box.setAttribute(`style`, `display: grid;grid-template-columns: repeat(${gridValue},1fr); grid-template-rows: repeat(${gridValue}, 1fr);`);
    for (let i = 0; i < gridValue*gridValue; i++){
        const div = document.createElement('div');
        div.classList.add('boxStyle');
        div.addEventListener('mouseover', ()=>{
            div.style.backgroundColor = 'black';
        })
        box.appendChild(div);
    }
}
createGrid(gridValue);

//functon to delete grids before creating a new one.
function deleteGridElements(){
    const allDiv = document.querySelectorAll(".boxStyle");
    allDiv.forEach((allDiv)=>{
        allDiv.remove();
    })
}

//Creates a new grid
const newGrid = document.querySelector(".newGrid");
newGrid.addEventListener("click", ()=>{
    gridValue = prompt("Choose a gird Value between 16 and 64");
    deleteGridElements();
    createGrid(gridValue);
})

//choses black color
const black = document.querySelector(".black");
black.addEventListener('click', ()=>{
    const divs = document.querySelectorAll(".boxStyle");
    divs.forEach((div) => {
        div.addEventListener('mouseover', ()=>{
            div.style.backgroundColor = 'black';
        })
    })
})

//function to random color
function getRandomColor(){
    const red = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);

    return`rgb(${red},${blue},${green})`;
}

//applies random color
const random = document.querySelector(".random");
random.addEventListener('click', () => { 
    const divs = document.querySelectorAll(".boxStyle");
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = getRandomColor();
        })
    })
})

//resets the color
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    const divs = document.querySelectorAll('.boxStyle');
    divs.forEach((div)=>{
        div.style.backgroundColor = 'white';
    })
})