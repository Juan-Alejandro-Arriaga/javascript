//Creación de objetos con literales
let point = { x: 100, y: 500 };
console.log(point);

//Creación de objetos con "new"
let obj = new Object(); 
let arr = new Array(); 
let date = new Date(); 
let map = new Map(); 

console.log(obj); 
console.log(arr); 
console.log(date); 
console.log(map);

//Usando Object.Create()

let proto = { x: 1, y: 2 };
let oby = Object.create(proto);
console.log(oby.x); 

//Herencia de propiedades
const prototipo = { x: 5 };
const objhe = Object.create(prototipo);

obj.x = 10; // Crea una propiedad propia
console.log(objhe.x); // 10 (propiedad de obj)
console.log(prototipo.x); // 5 (sin cambios)



// Eliminación de propiedades
let book = { author: "JS", "main title": "Guía" };

delete book.author;
delete book["main title"];

console.log(book); 

//Modificar propiedades 

let mods ={ moders1: "alex",moder2: "max"};

console.log(mods);

mods.moder2="Jose";

console.log(mods.moder2);


//  Símbolos como nombres
const extension = Symbol("Un simbolo");
let objsim = {
    [extension]: { data: "Acceso sin interrupciones" }
};

console.log(objsim[extension]); 
