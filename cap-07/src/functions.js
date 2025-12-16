// Creando el arreglo

let arr_num = [1,2,3];
let mixed = [0,"True",true];
let nada = [];

console.log("Arreglo del numeros" + arr_num);
console.log("Arreglo mixto" + mixed);
console.log("Arreglo vacio" + nada);

//  Modificacion del arreglo
arr_num[0] = 2;
arr_num[7] = 6;
console.log("Arreglo modificado: " + arr_num);

// Arreglos dispersos
let disp = [1,,3];
console.log(disp.length); 
console.log(disp[1]);  

// Propiedad length
console.log(arr_num.length); 

//Reduce el arreglo
arr_num.length = 2;          
console.log(arr_num);       

// Aumenta el arreglo
arr_num.length = 5;       
console.log(arr_num);        

// Agregar y eliminar elementos
let datos = [1, 2, 3];

// Agrega al final
datos.push(4);           

// Agrega al inicio 
datos.unshift(0);        
console.log(datos);       

// Elimina el último
datos.pop();         

// Elimina el primero
datos.shift();        
console.log(datos);       

// Iteración de arreglos
let sum = 0;
for (let i = 0; i < datos.length; i++) {
    sum += datos[i];
}
console.log(sum);     

// Imprime cada elemento
for (let value of datos) {
    console.log(value); 
}

// Arreglos multidimensionales
let matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log(matrix[1][0]);


// Métodos de los arreglos
let letters = ["c", "a", "b"];

// Ordena los elementos
letters.sort();          
console.log(letters);  

// Corta los elementos
let copy = letters.slice(0, 2); 
console.log(copy);      

// Altera una posición especifica
letters.splice(1, 1, "x"); 
console.log(letters);    

// Objetos similares a los arreglos
function example() {
    let args = Array.from(arguments);
    console.log(args);
}
example(1, 2, 3);

// Cadenas como arreglos
let word = "Hola";
console.log(word[0]);    
console.log(word.length); 




