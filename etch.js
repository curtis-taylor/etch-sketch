const container = document.querySelector('#grid_container');




function square_test() {
    for (let i = 0; i < 4; i++) {
        let square = container.createElement('div');
        square.setAttribute("class", "square");
        container.appendChild(square);
        console.log('square')
    }
}