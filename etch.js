


function square_test(square_length) {

    const container = document.querySelector('#grid_container');
   
    if(container.children.length < 1) {
    

        for (let i = 0; i < (square_length * square_length); i++) {
            let square = document.createElement('div');
            square.setAttribute("class", "square");
            square.setAttribute("id", i);
            /*
            square.setAttribute("style", "height: calc(100% / square_length); flex: 0 0 calc(100% / square_length; ")
            square.setAttribute("style", "flex: 0 0 calc(100% / square_length;")
            square.setAttribute("style", "background-color: white;  border: 1px solid #999; box-sizing: border-box;")
            */

            //square.style.setProperty('--grid-size', square_length);
            //square.style.flex = "0 0 calc(100% / square_length)"
            let txt = "--grid-size: " + square_length + ";";
            square.setAttribute("style", txt);
            container.appendChild(square);

            let computedStyles = window.getComputedStyle(square);
            console.log('square ' + square_length * square_length);
            console.log( computedStyles.height);
            console.log(computedStyles.backgroundColor);
            console.log(txt)
        }

        
    }

    let square_locate = document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('mouseover', e => {
            e.preventDefault();
        //e.stopPropagation();
        e.stopImmediatePropagation();
        //console.log(e);
        console.log("****");

        let computedStyles2 = window.getComputedStyle(item);

        console.log(computedStyles2.height);
        let txt = "--grid-size: " + square_length + " ;";
        item.setAttribute('style', txt);
        item.setAttribute('style', 'background-color: red;');
        })
    })

}