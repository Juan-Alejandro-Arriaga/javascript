#   5 Declaraciones

Las expresiones con efectos secundarios como las asignaciones pueden actuar como declaraciones independientes , a estas se les conoce como declaraciones de expresión.

Js interpreta las declaraciones una tras de otra , aún asi se puede alterar el orden el que suceden las cosas , ya que este cuenta con varias declaraciones o estructuras las cuales permiten hacer eso.

*   **Condicionales**: Estas son `if` y `switch` las cuales dependen del valor de una expresión para ejecutar un bloque.
*   **Bucles**: Estas son `while` y `for` las cuales ejecutan un bloque de manera repetitiva.
*   **Saltos**: Estas son `break` , `return` y `throw` estos hacen que el código salte/brinque a otra parte del programa.

##   5.1 Declaraciones de expresión

Las mas simples que existen dentro de JS son las que tienen efectos secundarios , y las declaraciones de asignación son una categoría importante parte de las de expresión.

#####   Ejemplo:
```javascript
    saludo = "Que onda" + nombre;
    i *= 3;
```

Los operadores `++` y `--` tienen el efecto secundario de cambiar el valor de la variable.

#####   Ejemplo:

```javascript
    contador++;
```

El operador `delete` tiene el efecto secundario de eliminar una propiedad de un objeto ,y se usa como una declaración.

#####   Ejemplo:
```javascript
    delete o.x;
```

Las llamadas a funciones con otra categoría de declaraciones de expresión 

#####   Ejemplo:
```javascript
    console.log(mensajedebug);
    displaySpinner();
```

Estas llamadas a funciones son expresiones , sin embargo esos afectan al host o al estado del programa , y se usan de igual manera en sentencias.

Si una función no tiene efectos secundarios no tiene caso llamarla.

#####   Ejemplo:
```javascript
    Math.cos(x); //Aquí solo saca el coseno de "x" y lo desecha
```

En cambio si se almacena la variable:

```javascript
    coseno = Math.cos(x);
```

>   Cada linea de código comúnmente termina con dos puntos (;)

##  Declaraciones compuestas y vacías
Un bloque de declaración es una secuencia de declaraciones dentro de llaves `{}`, esta puede ser usada donde sea que JS espere una declaración.

#####   Ejemplo:
```javascript
    {
        x = Math.Pi;
        cx = Math.cos(x);
        console.log("cos(π) = " + cx)
    } 
```

Algunas cosas a destacar de este bloque son:

*   No tiene `;` al final , esto ya que las declaraciones dentro de esto terminan con `;`.
*   Las declaraciones dentro del bloque se encuentran con sangria facilitando la lectura del código

JS permite tener sub-declaraciones dentro de bloques de código.

#####   Ejemplo
```javascript
    while (!fin) {
        while(!nofin) {

        }
    }
```

Las declaraciones compuestas permiten usar varias variables, cuando la sintaxis de JS espera una sola , y la declaración vacía es completamente lo contrario , permitiendo la NO declaración de variables cuando se espera una.

#####   Ejemplo de declaración vacía:
```javascript
    ;
```
En estos casos el intérprete de JS no realiza ninguna acción al ejecutarlo, esto es util para cuando se desee un bucle con cuerpo vació.

#####   Ejemplo:
```javascript
    // Initialize an array a
    for(let i = 0; i < a.length; a[i++] = 0) ;
```

Cabe destacar que la colocación incorrecta de un punto y coma `;` al terminar alguna sentencia `while` ,`if` ,`for` puede causar errores en ocasiones difíciles de detectar.

#####   Ejemplo:
```javascript
    if (a===b); {
        c = null;   //Esta declaración se relazara sin importar el bloque if
    }
```
Es recomendable colocar unn comentario para indicar en caso de que se use intencionalmente la sentencia vacía.

##  5.3 Condicionales

Este tipo de sentencias ejecutan o omiten cierta parte de código dependiendo el resultado de la condición establecida , también se le conocen como ramificaciones , JS tiene las sentencias `if/else` y `switch`.

### 5.3.1 if

Este es un bloque al cual JS le permite tomar decisiones , o de manera mas técnica ejecutar declaraciones condicionales. 

#####   Sintaxis:
```javascript
    if (expresión) {
        declaraciones
    }
    if (expresión) declaración; 
```

Si la expresión es `true` se ejecuta el bloque que declaraciones que se encuentren dentro de los paréntesis , los `()` son obligatorios debido a la sintaxis de la sentencia `if`.

#####   Ejemplo:
```javascript
    if (nombre == null) {
        nombre = "Juan Alejandro";
    }
    if (nombre == null) nombre = "Juan Alejandro";
```

>   Nota: Se pueden poner varias declaraciones dentro del bloque 

`if` tiene una clausula, la cual se ejecuta cuando la expresión es falsa , esta es `else`.

#####   Sintaxis:
```javascript
    if (expresión) {
        declaración
    } else {
        declaración
    }
```

`else` se ejecutará exclusivamente cuando la sentencia de `if` sea `false`, es recomendable usar llaves para que sea mas fácil de comprender , leer y depurar.

#####   Ejemplo:
```javascript
    if (nombre === "Juan Alejandro") {
        console.log("Que guapo");
    } else {
        console.log("No guapo");
    }
```

### 5.3.2 else if

Esta sentencia sirve para ejecutar uno de varios fragmentos de código.

>   `else if` no es como tal una sentencia de JS , es un modismo de programación que se produce cuando se usa muchas sentencias `if / else` repetidas.

#####   Sintaxis:
```javascript
    if (expresión) {

    } else if (expresión) {

    } else if (expresión) {

    }...
```

#####   Ejemplo:
```javascript
    if (n === 1) {
        console.log("A");
    } else if (n === 2) {
        console.log("B");
    }
```

### 5.3.3 switch

Cuando se usa `if` se crea una ramificación de la cual se puede usar usando `else if` para que exista un grupo de opciones con la cual dependiendo de la expresión se seleccionara, esto no es tan recomendado debido a la exhaustiva repetición de los bloques `else if` , para eso JS tiene la declaración `switch` que realiza lo mismo , solo que de una manera mas organizada.

#####   Sintaxis:
```javascript
    switch(expresión) {
        declaraciones
    }
```

Las declaraciones dentro de `switch` se manejan por grupos de casos , declarados con la expresión `case (condición):` , `switch` evalúa las expresiones en el orden que aparecen , y se evalúan primero que sean del mismo valor y mismo tipo con el operador `===` , en el caso de no encontrar se ira a la declaración `default`.

#####   Ejemplo:
```javascript
    switch(n) {
        case 1: // Su condición es n === 1 
            break;  // Detiene 
        case 2: // Su condición es n === 2
            break;  // Detiene
        default:    // Si todo falla o no se selecciona una opción
    }
```

`break;` sirve para detener el bloque del `case` y evitar que continue con el bloque siguiente, se ve mas a detalle en el capítulo **5.5.2**

##  5.4 Bucles
Las declaraciones de bucle son aquellas que repiten el un punto del código varias con base en la expresión.

### 5.4.1 while 
Este es un bucle básico de JS.

#####   Sintaxis:
```javascript
    while (expresión) {
        declaración
    }
```

El interpretador de JS evalúa la expresión y si esta resulta `false` , salta sin realizar el bloque de declaraciones interno, si la declaración es `true` esta  repetirá el bloque hasta que la expresión sea `false`.

>   Se puede crear un bucle infinito colocando `true` en la expresión while(true);

#####   Ejemplo:
```javascript
    let i = 0;
    while (i !== 10) {
        console.log(i);
        i++;
    }
```

### 5.4.2 do/while

Es casi igual al bucle `while` , solo que estese ejecutara siempre mínimo 1 vez.

#####   Sintaxis:
```javascript
    do {
        declaraciones
    } while (expresión);
```

#####   Ejemplo:
```javascript
    function printArray(a) {
        let len = a.length, i = 0;
        if (len === 0) {
            console.log("Empty Array");
        } else {
            do {
                console.log(a[i]);
            } while(++i < len);
        }
    }
```

En este caso el punto y coma `;` lo lleva al final de los paréntesis de la expresión de `while`.

### 5.4.3 for 

En esta declaración se inicializa una variable antes del inicio del bucle y se actualiza en cada repetición del bucle, dentro de la declaración tiene declaraciones
*   La inicializaron: Generalmente es un contador con un valor asignado.
*   La prueba: Si resulta ser verdadero ejecutara la declaración dentro del cuerpo del bucle.
*   La declaración : Esta debe ser una expresión con efectos secundarios `++` o `--`.
 
#####   Sintaxis:
```javascript
    for (inicialización; prueba; incremento/decremento) 
        declaraciones
```

#####   Ejemplo:
```javascript
    for(let count = 0; count < 10; count++) {
        console.log(count);
    }
```

>   Se le pueden agregar multiples condiciones para hacer mas compleja la expresión

De igual manera `for` permite recorrer estructuras de datos ,entre otros.

#####   Ejemplo del libro:
```javascript
    function tail(o) { // Retorna el ultimo elemento de la lista
        for(; o.next; o = o.next) { // Continua mientras o.next sea verdadero
            return o;
        }
    }
```

Cualquiera de las tres expresiones puede omitirse en un bucle for, pero se requieren los dos puntos y comas y si se omite la expresión de prueba, el bucle se repite indefinidamente

### 5.4.4   for/of

Este es un bucle que funciona con objetos iterables 

>   Los objetos iterables se ven a detalle en el capítulo 12

#####   Ejemplo de uso:
```javascript
    let datos =  [1, 2, 3, 4, 5, 6, 7, 8, 9] , let suma = 0;
    for (let elementos of data) {
        sum += elementos
    }
```

En este ejemplo el cuerpo del bucle se ejecuta una vez por cada elemento que tenga el arreglo , los elementos se iteran en orden del primero al último

Se pueden efectuar cambios al arreglo durante la ejecución del bucle, pudiendo crear bucles infinitos.

####    FOR/OF Con objetos

Por defecto los objetos no son elementos iterables y podrían general algún tipo de error

#####   Ejemplo:
```javascript

let objeto = {x:1 ,y:2}
for (let elementos of objeto) { // ERROR
    console.log(elemento);
}
```
Para poderse usar sus propiedades del objeto como elementos iterables se pueden usar se puede usar el bucle `for/in` o usar `for/of` con el método `Object.Keys()`

#####   Ejemplo:
```javascript
    let objeto = {x:1 ,y:2}
    let keys = "";
    for (let k of Object.keys(objeto)) { 
        keys += k ;
        console.log(keys);
    }
```

Funciona devolviendo un arreglo de nombres de las propiedades para un objeto,  los cambios realizados no tendrán efecto en la iteración.

Se pueden iterar sus valores con el método `.values()`

#####   Ejemplo:
```javascript
    let objeto = {x:1 ,y:2}
    let sum = 0;
    for (let v of Object.values(objeto)) {
        sum += v;
    }
    sum // => 3
```

Se puede saber los valores y las propiedades usando `Object.entries()`:

#####   Ejemplo:
```javascript
    let objeto = {x:1 ,y:2}
    let pares = "";
    for (let [k , v] of Object.entries(objecto)) {
        pares += k + v;
    }
    pares // => x1y1
```
Devuelve un array donde se representa `clave-valor` para propiedad del objeto, se usa la asignación de desestructuración para descomprimir los arrays internos en dos variables individuales.

####    FOR/OF con Cadenas
Las cadenas de texto se pueden iterar de manera carácter por carácter

#####   Ejemplo:
```javascript
    let frecuencia = 0;
    for (let letras of "Culiacán") {
        if (frecuencia[letras]) {
            frecuencia[letras]++; 
        } else {
            frecuencia[letras] = 1;
        }
    } 
    frecuencia // => {C:2,u:1,l:1,i:1,a:2,n:1}
```

Las cadenas se iteran por un punto Unicode 

>   Los emojis "♂ ♀" ocupan 2 caracteres `UTF-16` para su representación , por lo tanto el bucle se ejecutara 2 veces por cada emoji.

####    FOR/OF con SET y MAP
Al ser iterados en un `for/of` se ejecuta una vez por cada elemento en conjunto 

#####   Ejemplo para imprimir palabra por palabra 

```javascript
    let text = "Na na na na na na na na Batman!";
    let wordSet = new Set(text.split(" "));
    let unique = [];
    for(let word of wordSet) {
    unique.push(word);
    }
    unique
```

`Map` itera pares de `clave/valor` , devolviendo una matriz donde el primer valor es una clave y el segundo es un valor 

#####   Ejemplo:

```javascript
    let m = new Map([[1, "uno"]]);
    for(let [key, value] of m) {
        key // => 1
        value // => "uno"
    }
```

####    Iteración asíncrona con FOR/AWAIT

Fue introducido en "**ES2018**" conocido como iterador asíncrono , se ve a detalle en el capítulo 12 y 13

### 5.4.5 for/in 
Este funciona con cualquier objeto , este recorre en bucle los nombres de las propiedades de un objeto especificado.

#####   Sintaxis:
```javascript
    for(variable in objeto) {
        declaración
    }
```

`variable` puede ser cualquier expresión de asignación, `objeto` es la declaración del objeto que se va a evaluar , la `declaración` es el cuerpo del bucle . 

#####   Ejemplo:
```javascript
    for (let p in o) {
        console.log(o[p]);
    }
```

Estas sentencias se ejecutan evaluando la expresión del objeto , en caso de ser `null` o `undefined` el bucle se omite y pasa a la siguiente sentencia, antes de cada iteración , el intérprete evalúa la variable y le asigna el nombre de la propiedad .

>   Este puede ser una expresión arbitraria, siempre que su resultado sea adecuado para el lado izquierdo de una asignación

Esta se evalúa en cada paso del bucle y se puede evaluar de forma diferente cada vez.

#####   Ejemplo:
```javascript
    let o = { x: 1, y: 2, z: 3 };
    let a = [], i = 0;
    for(a[i++] in o) // Enumera los indices 
```

Los indices de un array son propiedades de objeto que pueden enumerarse con un bucle `for/in`.

>   Cuando se trabajan con arrays es recomendable usar `for/of`


Este bucle no enumera todas las propiedades del objeto , exceptúa los símbolos , las que cuyos nombres sean cadenas , solo propiedades enumerables, si el cuerpo de un bucle for/in elimina una propiedad que aún no se ha enumerado, dicha propiedad no se enumerará


##  5.5 Saltos
Estas sentencias hacen que el código salte a una nueva ubicación en el código, existen distintos tipos como:
*   **break**
*   **continue**
*   **return**
*   **yield**
*   **throw**
*   **try/catch/finally**

### 5.5.1   Declaraciones etiquetadas

Las sentencias se pueden etiquetar por medio de un identificador y `:` 

#####   Ejemplo:
```javascript
    identificador: declaración;
```

Al realizar esto se le asigna un nombre para que se pueda usar para referenciar a esta declaración, se puede etiquetar cualquier sentencia.

#####   Ejemplo:
```javascript
    principal: while (numero == 1) {
            //Código omitido
            continuar principal;
            //Código omitido
        }
```

>   El identificador puede ser cualquier palabra/identificador válido siempre que no sea una palabra reservada

Dos sentencias pueden tener la misma etiqueta siempre que no estén anidadas dentro de la otra, cualquier sentencia puede tener varias etiquetas.

### 5.5.2   break

Cuando esta se usa sola , provoca el cierre/salida del bucle o la sentencia `switch`

#####   Sintaxis:
```javascript
    break;
```
 
Solo es válida cuando aparece dentro de sentencias de tipo `bucle` o `switch`.

En bucles es generalmente usado cuando ya no es necesario completar el bucle.

#####   Ejemplo:
```javascript
    for(let i = 0; i < a.length; i++) {
        if (a[i] === target) break;
    }
```
Este bucle busca un elemento dentro del arreglo y en caso de encontrarlo , termina el bucle con la declaración `break;`.

JS permite que esta vaya seguida de una etiqueta de declaración

#####   Sintaxis:
```javascript
    break etiqueta;
```

Cuando se usa asi , se salta al final o se termina la sentencia que contiene la etiqueta , un error es que se use `break;` si no existe una sentencia que contenga la etiqueta , es decir que ,con esta forma la sentencia `break;` no necesariamente tiene que ser un bucle , ya que este puede salir de cualquier sentencia que lo contenga.

>   No se permite una nueva linea entre la palabra `break;` y el nombre de la etiqueta

#####   Ejemplo:
```javascript
    let sum = 0, success = false;
    computeSum: if (matrix) {
        for(let x = 0; x < matrix.length; x++) {
            let row = matrix[x];
            if (!row) break computeSum;
            }
    }
```
### 5.5.3 continue
Este lo que realiza es reinicia un bucle a la siguiente iteración.

#####   Sintaxis:
```javascript
    continue;
```

También puede ser usado con una etiqueta
####       Sintaxis:
```javascript
    continue etiqueta;
```

Solo puede ser usada dentro del cuerpo del bucle ,cuando se usa , corta la ejecución del bucle y lo vuelve a iniciar causando diferentes efectos en los cuerpos de los bucles:

*   **while**: La expresión se vuelve a probar , y si es verdadera se ejecuta desde el principio.
*   **do/while**: La ejecución salta a l final del bucle antes de reiniciarlo desde el principio.
*   **for**: Se evalúa la expresión de prueba e incremento para saber si se tiene que realizar otra iteración.
*   **for/in o for/of**: El bucle comienza de nuevo con el siguiente valor iterado.


#####   Ejemplo de uso:
```javascript
    for(let i = 0; i < data.length; i++) {
        if (!data[i]) continue; // No continua si data es "undefined"
        total += data[i];
    }
```

### 5.5.4   return
Una sentencia return dentro de una función especifica el valor de las invocaciones de esa función.

#####   Sintaxis:
```javascript
    return expresión;
```

Estas solo pueden estar dentro del cuerpo de alguna función, al ejecutarse devuelve la sentencia de retorno que se le haya colocado.

#####   Ejemplo:

```javascript
    function square(x) { 
        return x*x; 
    } 
    console.log(square(2));
```

Sin una sentencia de retorno, la invocación de una función simplemente ejecuta cada una de las sentencias del cuerpo de la función, una por una, hasta llegar al final de la función y luego regresa a quien la llamó

### 5.5.5 yield

Similar a `return` solo que esta se usa en funciones generadoras (*Vistas en el capítulo 12.3*) para producir el siguiente valor en la secuencia.

#####   Ejemplo:
```javascript
    function* range(from, to) {
    for(let i = from; i <= to; i++) {
        yield i;
    }
}
```

### 5.5.6   throw

Esta sirve para "arrojar" algún error o condición excepcional , estas se lanzan siempre que se produce un error dentro del tiempo de ejecución y siempre que el programa lo lanza explícitamente mediante la sentencia `throw`.

>   Las excepciones se capturan con la sentencia try/catch/finally.

#####   Sintaxis de throw:
```javascript
    throw expresión;
```

La expresión puede evaluarse como valor de cualquier tipo , pudiendo generar un mensaje de error o código de error.

La clase `Error` y sus subclases se utilizan cuando el intérprete de JavaScript genera.

Un error, un objeto `Error` tiene una propiedad `name` que especifica el tipo de error y una propiedad `message` que contiene la cadena pasada a la función constructora.

#####   Ejemplo:
```javascript
    function validarEdad(edad) {
        if (edad < 18) {
            throw new Error("Debes tener al menos 18 años para continuar.");
        }
        console.log("Edad válida. ¡Bienvenido!");
    }
```

Cuando una excepción es mostrada , el intérprete de JS salta al manejador de errores mas cercano.

>   Los manejadores de excepciones se escriben utilizando la cláusula catch de la instrucción try/catch/finally

En el caso de no encontrar algún manejador este manda un error al usuario.

### 5.5.7   try/catch/finally
Este es que gestiona las excepciones de JS y se compone por:

*   **try**: Define el bloque de código cuyas excepciones se gestionarán.
*   **catch**: Consiste en un bloque de sentencias que se invocan cuando se produce una excepción en cualquier parte del bloque try.
*   **finally**: Contiene código de limpieza cuya ejecución está garantizada, independientemente de lo que ocurra en el bloque try

>   Tanto el bloque catch como el bloque finally son opcionales, pero un bloque try debe ir acompañado de al menos uno de estos bloques.

#####   Sintaxis: 
```javascript
    try {

    } catch(e) {

    } finally {

    }
```

El identificador de `catch` es un parámetro de función , el valor que se asocia a la excepción es asignado a este parámetro 

Normalmente el intérprete de JS llega al final del bloque `try` y salta directamente al bloque `finally` , el cual realiza la limpieza necesaria , en el caso de que se produzca una excepción en el bloque `try` y haya un bloque `catch` para manejar el error , este se ejecutará primero que el bloque `finally` 

## 5.6 Declaraciones varias
### 5.6.1   with
Este ejecuta un bloque de código como si las propiedades de un objeto específico fueran variables dentro del alcance de ese código.

#####   Sintaxis:
```javascript
    with (objeto)
        declaración
```
Esta crea un tipo "ámbito temporal" con las propiedades del objeto.

>   Esta esta prohibida de usar en "modo estricto"

El uso común de esta sentencia es para facilitar el trabajo con jerarquías de objetos profundamente anidadas

#####   Ejemplo para acceder a datos de un formulario

```javascript
    with(document.forms[0]) {
        name.value = "";
        address.value = "";
        email.value = "";
    }
```

Con esto ya se pueden tratar las propiedades del objeto como variables

Esto hace que ya no es necesario prefijar document.forms[0] en cada nombre de propiedad del formulario.

### 5.6.2   debugger

Esta generalmente no hace nada , solo hace algo cuando un programa de depuración esta disponible y en ejecución.

Esto realiza que la ejecución del código JavaScript se detiene y se puede usar el depurador para imprimir los valores de las variables, examinar la pila de llamadas, etc.

>   Solo funciona cuando se tiene un programa de depuración

### 5.6.3   "use strict"
Esta fue introducida para indicar que el código debe ejecutarse en modo estricto.

Esta directiva solo puede aparecer al inicio de un script o al principio de un cuerpo de función, antes de cualquier otra declaración.

El código se considera "estricto" si:

*   Un script incluye la directiva "use strict" al principio.
*   Una función está definida dentro de código estricto o tiene su propia directiva "use strict".
*   El código evaluado con eval() se ejecuta en un contexto estricto o incluye la directiva.

Tiene como propósito el corregir las deficiencias del lenguaje, proporcionar un mayor nivel de seguridad 

Este modo tiene ciertas restricciones como:

*   Se prohíbe el uso de `with`
*   Se deben declarar obligatoriamente las variables
*   Valor de `this` se convierte automáticamente a `undefined`
*   Algunas propiedades no se pueden modificar (a objetos extensibles)
*   Restricciones en eval() como el no poder declarar variables ni definir funciones en el ámbito
*   Usar `delete` en identificadores no calificados lanzará un error `SyntaxError`
*   Intentar eliminar una propiedad no configurable lanzará un error `TypeError`

##  5.7 Declaraciones
##  5.7.1   const,let,var
Son variables para declarar por ejemplo:
*   `const` declara constantes
*   `let` declara variables
*   `var` solo tienen como ámbito la función que lo contiene

En general no hay razón para usar `var` en el lugar de `let`

#####  Ejemplo:
```javascript
    let a = 10;
    const b = 10;
    var c = 10;
```

### 5.7.2   function

Este se usa para definir funciones (tratadas a detalle en el capitulo 8) 

#####   Ejemplo:
```javascript
    function Idk(bro) {
        return bro + "Hi";
    }
```

Las funciones generadoras (`function*`) pueden pausar y reanudar su ejecución, produciendo valores de forma incremental con yield.(Vista a detalle en el capítulo 12.3)

Las funciones asíncronas (`async function`) simplifican operaciones asíncronas permitiendo usar `await` para manejar promesas sin bloquear la ejecución del programa.(Vista a detalle en el capítulo 13.3)

### 5.7.3 class
Esta crea una nueva clase se le asigna un nombre que podemos usar para referirnos a ella

>   Estas se ven a detalle en el capítulo 9

#####     Ejemplo de declaración de clase:
```javascript
    class Circle {
        constructor(radius) { 
            this.r = radius; 
        }
        area() { 
            return Math.PI * this.r * this.r; 
        }
        circumference() { 
            return 2 * Math.PI * this.r; 
        }
    }
```

### 5.7.4 import and export
La declaración `import` permite traer uno o más valores desde otro archivo y asignarles nombres en el módulo actual. Existen varias formas de usar `import`.

#####   Ejemplo:
```javascript
    import Circle from './geometry/circle.js';
    import { PI, TAU } from './geometry/constants.js';
    import { magnitude as hypotenuse } from './vectors/utils.js';
```
Por defecto, los valores dentro de un módulo son privados y no pueden ser accedidos desde otros módulos a menos que se exporten explícitamente.

La declaración `export` hace que uno o más valores definidos en un módulo estén disponibles para ser importados por otros.

#####   Ejemplo:
```javascript
    // Exportando valores específicos
    const PI = Math.PI;
    const TAU = 2 * PI;
    export { PI, TAU };

    // Exportando mientras se declara
    export const TAU = 2 * Math.PI;
    export function magnitude(x, y) { return Math.sqrt(x * x + y * y); }

    // Exportando un valor por defecto
    export default class Circle { /* definición de la clase */ }
```
El uso de `export` puede combinarse con otras declaraciones para definir y exportar valores al mismo tiempo.
