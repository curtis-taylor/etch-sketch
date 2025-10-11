


function square_test(square_length) {

    const container = document.querySelector('#grid_container');

    if(container.children.length > 0) {
        container.replaceChildren();

    }

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
           
            let new_grid_backcolor;

            square_length < 30 ? new_grid_backcolor = 'white' : new_grid_backcolor = 'linen';

            let txt = "background-color: " + new_grid_backcolor + "; --grid-size: " + square_length + ";";

            let txt2 = "--grid-size: " + square_length + " ;" + "height: " + (100 / square_length)  + "%; " + "flex: 0 0 " + (100 / square_length)  + "%;";
            
            square.setAttribute("style", txt);
            container.appendChild(square);

            let computedStyles = window.getComputedStyle(square);
           
        }

        colouring(square_length);
    }
    

}

function colouring (square_length) {

    const square_locate = document.querySelectorAll('.square').forEach(item => {
    let square_touch = {};
    let opacity_num = 0;
    let color_hex;

        item.addEventListener('mouseover', e => {
            e.preventDefault();
        //e.stopPropagation();
        e.stopImmediatePropagation();

         if(!(item.id in square_touch)) {
            square_touch[item.id] = 1
            opacity_num = 0.1;
            color_hex = getRandomHexColor(square_touch[item.id]);

        } else  {
            if(square_touch[item.id] < 10) {
                square_touch[item.id] = square_touch[item.id] + 1;
                opacity_num = square_touch[item.id] / 10;
                 color_hex = getRandomHexColor(square_touch[item.id]);
                //console.log(opacity_num);
            } else {
                color_hex = '#000000'
            }
        }

        let txt2 = 'background-color: ' + color_hex + ';' + '--grid-size: ' + square_length + ';' + 'opacity: ' + opacity_num + ";" + + "height: " + (100 / square_length)  + "%; " + "flex: 0 0 " + (100 / square_length)  + "%;";

        let txt = 'background-color: ' + color_hex + ';' + '--grid-size: ' + square_length + ';' + 'opacity: ' + opacity_num + ";"
       // item.setAttribute('style', txt);

        /* item.style.height = `${height}`;
        item.style.flex = '0 0 ' + `${height}`;
        console.log(`${height}`);
        console.log('0 0 ' + `${height}`) */
        // console.log("&&&&");

       // let computedStyles2 = window.getComputedStyle(item);

        item.setAttribute('style', txt);


       })
    })

}

function getRandomHexColor(insert_num) {
    const randomValue = Math.floor(Math.random() * 16777215); // 16777215 is 0xFFFFFF in decimal
    let hexColor = '#' + randomValue.toString(16).padStart(6, '0');
   
    return hexColor;
}