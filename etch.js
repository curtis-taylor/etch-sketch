


function square_test(square_length) {

    const container = document.querySelector('#grid_container');
   
    if(container.children.length < 1) {
    

        for (let i = 0; i < (square_length * square_length); i++) {
            let square = document.createElement('div');
            square.setAttribute("class", "square");
            square.setAttribute("id", i);
            square.style.height = "calc(100% / square_length)"
            square.style.flex = "0 0 calc(100% / square_length)"
            container.appendChild(square);

            console.log('square ' + square_length * square_length);
        }

        
    }

    let square_locate = document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('mouseover', e => {
            e.preventDefault();
        //e.stopPropagation();
        e.stopImmediatePropagation();
        console.log(e);
        item.setAttribute('style', 'background-color: red;');
        })
    })

}