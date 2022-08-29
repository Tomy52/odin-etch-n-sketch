let container = document.querySelector('.container')

function populateRow(columnName, size){
    for(let i = 1; i <= size; ++i){

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

function createGrid(size){
    for(let i =1; i <= size; ++i) {

        let column = document.createElement("div");
        column.setAttribute("class","gridColumn");
        column.setAttribute("id", "gridColumn" + i);
        container.appendChild(column);

        populateRow(column, size);
    }
    console.log("Done!")
}

createGrid(16)

let clearBtn = document.getElementById('clear-grid')

function unpopulateRow(columnName,size) {
    for (let i = 0; i <= (size - 1); i++){
        columnName.childNodes[i].classList.remove('hovered')
    }
}

function clearGrid(){
    for(let i = 1; i <= container.childElementCount; ++i) {

        let column = document.getElementById('gridColumn' + i);
        unpopulateRow(column,(container.childElementCount))
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
    if (size > 0 && size <= 100){
        changeSize(size)
    } else if (size > 100){
        console.log("This is too much!")
    } else if (size === 0){
        console.log("I can't draw a 0x0 grid!")
    } else if (size < 0){
        console.log("I can't draw a negative-sized grid!")
    }  
})