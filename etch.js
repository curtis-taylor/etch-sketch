


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
            let txt = "--grid-size: " + square_length + ";";
            square.setAttribute("style", txt);
            container.appendChild(square);

            let computedStyles = window.getComputedStyle(square);
           // console.log('square ' + square_length * square_length);
            console.log("Hi " + computedStyles.height);
           // console.log(computedStyles.backgroundColor);
           // console.log(txt)


            colouring(square_length, computedStyles.height);
           
        }

        
    }
    

}

function colouring (square_length, height) {

    const square_locate = document.querySelectorAll('.square').forEach(item => {
    let square_touch = {};
    let opacity_num = 0;
    let color_hex;

        item.addEventListener('mouseover', e => {
            e.preventDefault();
        //e.stopPropagation();
        e.stopImmediatePropagation();

         color_hex = getRandomHexColor();
        // console.log(color_hex);
        //console.log(e);

        //console.log("**** " + `${square_length}`);
        //console.log('Mouse is over:', item);

         if(!(item.id in square_touch)) {
            square_touch[item.id] = 1
            opacity_num = 0.1;

        } else  {
            if(square_touch[item.id] < 10) {
                square_touch[item.id] = square_touch[item.id] + 1;
                opacity_num = square_touch[item.id] / 10;
                //console.log(opacity_num);
            } else {
                color_hex = '#000000'
            }
        }

        let txt = 'background-color: ' + color_hex + ';' + '--grid-size: ' + square_length + ';' + 'opacity: ' + opacity_num + ";";

       // item.setAttribute('style', txt);

        /* item.style.height = `${height}`;
        item.style.flex = '0 0 ' + `${height}`;
        console.log(`${height}`);
        console.log('0 0 ' + `${height}`) */
        // console.log("&&&&");

       // let computedStyles2 = window.getComputedStyle(item);

       

        /*
        let txt = "--grid-size: " + square_length + ";"; 
       let h_text = "height: " + height + " ;";
       // let f_text= "flex: 0 0 calc(%100 / var(" + square_length + "));";
        item.setAttribute('style', txt);
        item.setAttribute('style', h_text);
       // item.setAttribute('style', h_text);
       // item.setAttribute('style', f_text);
                */

        item.setAttribute('style', txt);

        //console.log("HHHHHH " + computedStyles2.height + " " + item.id + " " + computedStyles2.flex);
      
       // console.log(square_touch);

       })
    })

}

function getRandomHexColor() {
    const randomValue = Math.floor(Math.random() * 16777215); // 16777215 is 0xFFFFFF in decimal
    const hexColor = '#' + randomValue.toString(16).padStart(6, '0');
    return hexColor;
}