


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
           // console.log('square ' + square_length * square_length);
            console.log("Hi " + computedStyles.height);
           // console.log(computedStyles.backgroundColor);
           // console.log(txt)


            colouring(square_length, computedStyles.height);
           
        }

        
    }

     

    

}

function colouring (square_length, height) {

    let square_locate = document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('mouseover', e => {
            e.preventDefault();
        //e.stopPropagation();
        e.stopImmediatePropagation();
        //console.log(e);
        console.log("****");
        console.log('Mouse is over:', item);

        item.style.height = `${height}`;
        item.style.flex = '0 0 ' + `${height}`;
        console.log(`${height}`);
        console.log('0 0 ' + `${height}`)
        console.log("LLL " + toString(item.style.height))
        console.log("&&&&");

        /*
        let txt = "--grid-size: " + square_length + ";"; 
       let h_text = "height: " + height + " ;";
       // let f_text= "flex: 0 0 calc(%100 / var(" + square_length + "));";
        item.setAttribute('style', txt);
        item.setAttribute('style', h_text);
       // item.setAttribute('style', h_text);
       // item.setAttribute('style', f_text);
                */

        item.setAttribute('style', 'background-color: red;');
        
         let computedStyles2 = window.getComputedStyle(item);

        console.log("HHHHHH " + computedStyles2.height + " " + item.id + " " + computedStyles2.flex);
      

       })
    })

}