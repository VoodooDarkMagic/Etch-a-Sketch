let gridValue = prompt("Choose a gird Value between 16 and 64");
const box = document.querySelector(".box");

function createGrid(gridValue){
    box.setAttribute(`style`, `display: grid;grid-template-columns: repeat(${gridValue},1fr); grid-template-rows: repeat(${gridValue}, 1fr);`);
    for (let i = 0; i < gridValue*gridValue; i++){
        const div = document.createElement('div');
        div.classList.add('boxStyle');
        div.addEventListener('mouseover', ()=>{
            div.style.backgroundColor = "black";
        })
        box.appendChild(div);
    }
}
createGrid(gridValue);

function deleteGridElements(){
    const allDiv = document.querySelectorAll(".boxStyle");
    allDiv.forEach((allDiv)=>{
        allDiv.remove();
    })
}

const newGrid = document.querySelector(".newGrid");
newGrid.addEventListener("click", ()=>{
    gridValue = prompt("Choose a gird Value between 16 and 64");
    deleteGridElements();
    createGrid(gridValue);
})

const reset = document.querySelector('.reset');
reset.addEventListener('click', ()=>{
    const divs = document.querySelectorAll('.boxStyle');
    divs.forEach((div)=>{
        div.style.backgroundColor = 'white';
    })
})