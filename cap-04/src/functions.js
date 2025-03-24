// EXPRESIONES Y OPERADORES

console.log("Expresiones primarias");
console.log("Cadena de texto");
console.log(`Números: ${2}`);
console.log(`Booleanos: ${true}`);
console.log(`Null: ${null}`);

console.log("Arreglos");
let a = [1,2,3];
console.log(a);

console.log("Objetos");
let o = {nombre: "Juan", edad: 17};
console.log(o);

console.log("Funciones en variables");
let f = function() {
    return "Hola";
}
console.log(f());

console.log("Acceso a propiedades");
let objeto = {x: 1, y:{z: 3}};
console.log(objeto.y);

console.log("Acceso condicional a propiedades");
let condicional = { b: null };
console.log(condicional.b?.c);


console.log("Invocación de funciones");
console.log(sumar(2, 3));
function sumar(a, b) {
    return a + b;
}

console.log("Precedencia de operadores");
console.log("2 + 3 * 4");
console.log(2 + 3 * 4);
console.log("2 + 3) * 4");
console.log((2 + 3) * 4);


console.log("Operador suma");
console.log(2+3);
console.log(1+{});
console.log(1+null);

console.log("Operadores unarios");
let opunario = 1;
let opunario1 = 1;
console.log(opunario++);
console.log(++opunario1);

console.log("Operadores bit a bit");
let numero12 = 0b1100; // 12 en decimal
let numero10 = 0b1010; // 10 en decimal
console.log(numero12 & numero10); 
console.log(numero12 | numero10);
console.log(numero12 ^ numero10);
console.log(~numero12);
console.log(numero12 << 1);
console.log(numero12 >> 1);
console.log(numero12 >>> 1);

console.log("Operadores de igualdad");
console.log(1 == 1);
console.log(1 === "1");

console.log("Operadores de compraación");
console.log(1 < 2);
console.log(1 > 2);
console.log(1 <= 2);
console.log(1 >= 2);
console.log(1 != 2);
console.log(1 !== 1);

console.log("Asignamiento con operación");
let asignamiento = 2;
asignamiento += 3;
console.log(asignamiento);
