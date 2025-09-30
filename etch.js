const container = document.querySelector('#grid_container');




function square_test() {
    let square = document.createElement('div');
    square.setAttribute("class", "square");
    container.append(square);
    container.append(square);
    console.log('square')
}