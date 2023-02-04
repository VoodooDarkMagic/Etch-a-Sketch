let gridValue = 0;
const box = document.querySelector(".box");

//creating default 16x16 grid
defaultGrid =  ()=>{
    box.setAttribute(`style`, `display: grid; grid-template-columns: repeat(16,1fr); grid-template-rows: repeat(16, 1fr);`);
    for (let i = 0; i < 256; i++){
        const div = document.createElement('div');
        div.classList.add('boxStyle');
        div.addEventListener('mouseover', ()=>{
            div.style.backgroundColor = 'black';
        })
        box.appendChild(div);
    }
};
defaultGrid();

//changing grid via changing size in input feild.
const grid = document.getElementById("gridSize");
grid.addEventListener('change', ()=>{
    deleteGridElements();
    gridValue = grid.value;
    createGrid(gridValue);
})


//function to create a grid
function createGrid(gridValue){
    if(gridValue > 64){
        alert("Grid value should be between 1 and 64")
        grid.value = 16;
        return defaultGrid();
    }
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

//functon to delete grids before creating a new one.
function deleteGridElements(){
    const allDiv = document.querySelectorAll(".boxStyle");
    allDiv.forEach((allDiv)=>{
        allDiv.remove();
    })
}

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
