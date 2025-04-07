// While
function getLoops() {
    const p1 = document.getElementById("repeticiones-1");
    const p2 = document.getElementById("repeticiones-2");
    let a = 0; 
    let b = 0; 
    while (a !== 5) {
        a++;
        p1.innerText = "Bucle while: " + a;
        
    }
    do {
        b++; 
        p2.innerText = "Bucle do/while: " + b;
    } while (b < 5); 
}

// FOR
function getHistorial() {
    const Hist = document.getElementById("historial");
    const cantidad = parseInt(document.getElementById("repeticion").value);
    let historial = [];

    for (let i = 1; i <= cantidad; i++) {
        historial.push(i);
        Hist.innerText = "Historial: " + historial.join(", ");
    }
}
