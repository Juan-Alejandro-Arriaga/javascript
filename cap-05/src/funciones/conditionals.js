//  If/else

function getPulsado(valor){
    const labelCondicional = document.getElementById("cuerpo-1-label");
    if (valor === 1) {
        labelCondicional.innerHTML="Presionaste que si";
    } else {
        labelCondicional.innerHTML="Presionaste que no";
    }
}

// Switch

function getCambio() {
    const seleccionColor = document.getElementById("seleccionador-colores");
    const pColor = document.getElementById("p-color");
    let NColor = parseInt(seleccionColor.value);
    switch(NColor) {
        case 1:
            pColor.style.backgroundColor = "rgb(25, 0, 255)";
            break;
        case 2: 
            pColor.style.backgroundColor = "rgb(255, 0, 0)";
            break;
        case 3: 
            pColor.style.backgroundColor = "rgb(0, 255, 34)";
            break;
    }

    
}
