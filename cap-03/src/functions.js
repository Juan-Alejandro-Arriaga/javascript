//Cosas del capitulo 3

console.log("Ejemplos diferentes tipos de datos");

let billion = 1e9; 
console.log("Se imprime 1 billón: "+billion)


console.log("Uso de _ para separar números");
let trillón = 1_000_000_000_000_000_000;
console.log("Se imprime 1 trillón: "+trillón)



console.log("Ejemplos de un modulo de operaciones");
console.log("Se realizara la siguiete operación: 3(5[10-5(10-5)]) , y el resultado serán unidades de medida (UDM)");
let resultado = 3*(5*(10-5*(10-5)));
console.log(`El resultado es: ${resultado} UDM`);



//MATH object
console.log("EJEMPLOS CON MATH OBJECT");

console.log("Valor de PI: "+Math.PI);

console.log("2 elevado a la 10 es: "+Math.pow(2, 5));

console.log("Uso de MATH.round, con la cantidad 350.598");
let redondeo = 350.598;
console.log("Redondeo hacia abajo: "+Math.round(redondeo));

console.log("Texto en 2 lineas\n\tsegunda linea con tabulación");

let mensaje = "Hola "+"mundo";
console.log(mensaje);

console.log("Ejemplo usando Number.isNaN");
let valor = 1;
console.log(Number.isNaN(valor));//false
console.log(Number.isNaN(0/0));//true


console.log("Ciclo usando ===")
let NumeroComparado_1 = 1;
let NumeroComparado_2 = "1";
console.log(NumeroComparado_1 === NumeroComparado_2);


console.log("Concatenación usando backticks");
let edad = 18;
let textoBackticks = `Tienes ${edad} años`;
console.log(textoBackticks);

console.log("Ejemplo usando Symbol");
let simbolo = Symbol("MiAle");
console.log(simbolo);
console.log(simbolo.description);


console.log("Ejemplo usando .toFixed , .toExponential y .toPrecision, con la cantidad 12.340125");
let FiExPre = 12.340125;
console.log(FiExPre.toFixed(3));
console.log(FiExPre.toExponential(3));
console.log(FiExPre.toPrecision(3));


console.log("Ejemplo con destructuración");
let [des,truc,tu,ra,cion] =[1,,2,,4,5];
console.log(`El valor de des es: ${des}`);
console.log(`El valor de truc es: ${truc}`);
console.log(`El valor de tu es: ${tu}`);
console.log(`El valor de ra es: ${ra}`);
console.log(`El valor de cion es: ${cion}`);


console.log("Ejemplo con  asignación spread (...var)");
let asignacion = [1,2,3,4,5];
console.log(asignacion);
let spreadcopia= [... asignacion];
console.log(spreadcopia);
