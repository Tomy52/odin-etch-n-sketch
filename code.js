let container = document.querySelector('.container')

function populateRow(columnName){
    for(let i = 1; i <= 16; ++i){

        let square = document.createElement("div");
        square.setAttribute("class", "gridElement");
        square.setAttribute("id", "gridElement" + i);
        
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