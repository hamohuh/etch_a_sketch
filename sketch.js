//link the div container element from the HTML file
const container = document.getElementById('container');
//link the button from the HTML
const resetButton = document.getElementById('newButt');
//link the new added divs by their class name
const  grids = document.getElementsByClassName('grids');
//define a variable to hole total number of cells
let totalGrids;
//define a varible to hold the height and width of one cell
let widthAndHeight

/**
 * this function render and add all the cells inside our div container
 * @param {this function takes a number of cells per row or column} gridNum 
 */
function build(gridNum) {
    //total cells = number of row cells * number of columns cells
    totalGrids = gridNum*gridNum;
    //the cell's width and height = the div container width whch we defined in css / number of grids per row or column
    widthAndHeight = (550 / gridNum);
    //itterate over the vid container and add number of totalGrids divs in the vid container
    for(let i = 0; i < totalGrids; i++){
        let newDiv = document.createElement('div');
        newDiv.style.width = widthAndHeight;
        newDiv.style.height = widthAndHeight;
        newDiv.className = 'grids';
        container.appendChild(newDiv);
        //itterate over the grids class and cange it's background on hover
        grids[i].addEventListener("mouseover", function changeColor() {
        grids[i].style["background-color"] = "black";
        });
    }        
}

//main method call and pass number 16 which gonna build 16x16 grids
build(16);

resetButton.addEventListener('click', m);

/**
 * this function will prompt the user for a number to build new grid and delete the old one
 */
function m() {
    let newNum = prompt("how many?",'16');
    if(newNum != null){
        container.innerHTML = null;
        build(newNum);
    }
}




