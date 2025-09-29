const container = document.querySelector('#grid_container');

const square = document.createElement('div');
square.setAttribute("id", "square");


function square_test() {
    container.append(square);
    console.log('square')
}