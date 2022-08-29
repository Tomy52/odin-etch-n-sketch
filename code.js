let container = document.querySelector('.container')

function populateRow(columnName){
    for(let i = 1; i <= 16; ++i){

        let square = document.createElement("div");
        square.setAttribute("class", "gridElement");
        square.setAttribute("id", "gridElement" + i);
        square.addEventListener('mouseover', () => {
            square.classList.add('hovered')
        })
        
        let h1 = document.createElement("h1");
        
        h1.textContent = '';
        square.appendChild(h1);
        columnName.appendChild(square);
        }
}

function createGrid(){
    for(let i =1; i <= 16; ++i) {

        let column = document.createElement("div");
        column.setAttribute("class","gridColumn");
        column.setAttribute("id", "gridColumn" + i);
        container.appendChild(column);

        populateRow(column);
    }
    console.log("Done!")
}

createGrid()

let clearBtn = document.getElementById('clear-grid')

function unpopulateRow(columnName) {
    for (let i = 0; i <= 15; i++){
        columnName.childNodes[i].classList.remove('hovered')
    }
}

function clearGrid(){
    for(let i = 1; i <= 16; ++i) {

        let column = document.getElementById('gridColumn' + i);
        unpopulateRow(column)
    }
    console.log("Done!")
}

clearBtn.addEventListener('click', () => {
    clearGrid()
})

let changeSizeBtn = document.getElementById('change-size')

function changeSize(size){
    container.textContent = ""
    createGrid(size)
}


changeSizeBtn.addEventListener('click', () => {
    let size = prompt('What size do you want the grid to be?')
    changeSize(size)
})