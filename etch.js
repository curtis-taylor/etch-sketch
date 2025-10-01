




function square_test() {

    const container = document.querySelector('#grid_container');
   
    if(container.children.length < 1) {
    

        for (let i = 0; i < 20; i++) {
            let square = document.createElement('div');
            square.setAttribute("class", "square");
            square.setAttribute("id", i);
            container.appendChild(square);

            console.log('square')
        }
    }
}