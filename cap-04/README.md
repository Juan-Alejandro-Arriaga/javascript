#   4 Expresiones y operadores

*   **expresión**:Frase de JS con la posibilidad de evaluarse para producir un valor
*   **nombre de variable**: Es un expresión que evalúa el valor asignado a esa variable

Expresiones complejas se construyen a partir de expresiones mas simples, la forma mas fácil de hacerlo es construirlas en base a un operador , lo que hace es combinar los operadores dando un nuevo valor como resultado.

#####   Ejemplo:
```javascript
    var x = 2; //Expresión simple
    var y = 2; //Expresión simple
    var z = x * y; //Expresión compleja
```

##  4.1 Expresiones primarias

####   Primer tipo

Estas son las expresiones mas simples ,aquellas que son independientes. 

#####   Ejemplo:
```javascript
    1.23 // Un número literal
    "hello" // Una cadena literal
```

####    Segundo tipo
Algunas palabras reservadas de JS son expresiones primarias.

#####   Ejemplo:
```javascript
    true // Valor booleano
    false // Valor booleano
    null // Evalúa el valor null
    this // Evalúa el objeto actual
```


La palabra `this` se utiliza en la Programación Orientada a Objetos (*POO*) , y este se evalúa como el objeto en el que se invoco un método 

####    Tercer tipo

Este tipo hace referencia a una variable , constante o propiedad del objeto global.

#####   Ejemplo:
```javascript
    i // Evalúa el valor de la variable i
    sum // Se evalúa como el valor de la variable suma.
    undefined // El valor de la propiedad "indefinido" del objeto global
```

En el momento que una variable aparece sola en un programa , JS asume que puede ser una variable , constante o propiedad de un objeto global, en el caso de no existir esa variable , se genera un error de referencia.

##  4.2 Inicializadores de objetos y arreglos

Son expresiones cuyo valor es un objeto o una matriz recién creado , estas no son expresiones primarias ya que incluyen sub-expresiones , las cuales especifican valores de propiedades o elementos.

####    Iniciador de arreglos
*   Es una lista de expresiones separadas por comas entre corchetes.
*   Los elementos se inicializaran con los valores de las expresiones separadas por comas

##### Ejemplo:

```javascript
    [] //Arreglo vacío
    [4,5] //Arreglo con 2 elementos
```

Estos mismos arreglos pueden crear arreglos anidados, ejemplo:

```javascript
    let matrix = [[1,2,3], [4,5,6], [7,8,9]];
```

Estos se evalúan cada vez que se evalúa el iniciador , dando pie a que pueda ser diferente el inicializador del arreglo cada vez que se evalúa.

Los elementos indefinidos se pueden incluir en un literal de arreglo simplemente omitiendo un valor entre comas.

#####   Ejemplo:

```javascript
    let arregloCNindefinido = [1, , , ,5];

```

En un array, se permite colocar una coma al final después del último elemento, esta coma no genera un nuevo elemento undefined, si se intenta acceder a un índice que no ha sido definido en el array, el resultado será undefined.

La sintaxis para inicializar objetos es similar a la de los arrays, pero se usan llaves `{}` en lugar de corchetes `[]`, cada elemento incluye un nombre de propiedad seguido de dos puntos y su valor correspondiente.

#####   Ejemplo de un array colocando valores a otro array vacío:
```javascript
    let p = { x: 2.3, y: -1.2 }; // Objeto con 2 propiedades
    let q = {}; // Array vacío
    q.x = 2.3; q.y = -1.2;  // Colocando los mismos valores
```

## 4.3 Expresiones de definición de función
Esta define una "*función*" dentro de JS, esta suele constar de la palabra "*function*" seguida de un bloque de código JS encerrado entre paréntesis.

#####   Ejemplo:

```javascript
    let square = function(x) { return x * x; }; // Esta es una función que retorna el cuadrado de algún valor
```
 
Las funciones también se pueden definir mediante una sentencia de función en lugar de una expresión de función.

##  4.4 Expresiones de acceso a la propiedad

Estas evalúan el valor de una propiedad de un objeto o de algún elemento de un arreglo y JS tiene 2 sintaxis para su acceso:

```javascript
    expression . identifier //Expresión . identificador (1)
    expression [expression] //Expresión [Expresión] (2)
```

**(1)** La expresión especifica el objeto y el identificador el nombre de la propiedad.

**(2)** La primera expresión es el "*objeto*" o "*arreglo*", la segunda (entre corchetes *[]*) especifica el nombre de la propiedad deseada o el índice del elemento del arreglo.

#####   Ejemplo:

```javascript
    let objeto = {x: 1, y:{z: 3}}; //Objeto de ejemplo
    let arreglo = [objeto, 4, [5, 6]]; //Arreglo que contiene el objeto
    console.log(objeto.x); //Imprime el valor x de "objeto" (1)
    console.log(arreglo[0]); //Imprime el objeto en general (2)
    console.log(arreglo[4]); //Imprime valor "undefined" (3)
    console.log(objeto.a);  //Imprime valor "Undefined" (3)
```

Cuando se accede a una propiedad en JavaScript (usando . o []) se evalúa el objeto del que se quiere obtener la propiedad, en el caso de que ese valor sea "*null*" o "*undefined*", se lanza un error "*TypeError*" porque esos dos valores no pueden tener propiedad alguna.

**(1)**: Si el acceso se hace con un punto (obj.prop), se busca directamente la propiedad con el nombre indicado y se devuelve su valor.

**(2)**: Si se usan corchetes (obj[exp]), la expresión dentro de los corchetes se evalúa, se convierte en cadena, y luego se busca la propiedad con ese nombre.

**(3)**: En ambos casos, si la propiedad no existe en el objeto, el resultado será "*undefined*".

"**.identifier**" Es la sintaxis fácil de usar , sin embargo solo se puede acceder a esta cuando la propiedad tiene un identificador válido, además que se debe conocer el nombre.

>   Estos se tratan con mayor detalle en el capitulo 6 y 7

### 4.4.1 Acceso condicional a la propiedad

La versión **ES2020** añade 2 nuevos tipos de acceso a las propiedades:

```javascript
    expression ?. identifier
    expression ?.[ expression ]
```

Los valores "**null**" y "**undefined**" no tienen propiedades, y si se llegaran a consular ,devolvería un "**TypeError**", y se logra evitar usando el la sintaxis `?.` o `?.[]`.

#####   Ejemplo:
```javascript
    let objeto =  {x: 1, y: {z : 3}};
    let arreglo = [objeto, 4, [5, 6,7]];
    console.log(arreglo[3]?.[1]);//(1)
```

**(1)**: Lo que esta haciendo es tratar de acceder a la propiedad "3" , y al tener un valor "**undefined**" este ya no intenta acceder a la propiedad "1".

A esto también se le nombra como "*optional chaining*", ya que también funciona para expresiones mas largas , como estas:

```javascript
    let a = { b: null };
    a.b?.c.d // (1)
``` 

**(1)**: Lo que hace es declararse como "*undefined*" al momento de no encontrar un valor siguiente después de `.b?.` para evitar tener un "*TypeError*".


De igual manera se puede realizar usando los `[]` con la sintaxis de  `?.[]` y se tendrá un comportamiento/respuesta similar a lo que ocurre con el ejemplo anterior.

Otros ejemplos de caso donde se puede utilizar `.?` seria el siguiente :

```javascript
    let a; //Variable no inicializada
    let index = 0; 
    try {
        console.log(a[index++]);
    }catch(e){
        console.log(index); //Incremento que ocurre antes de lanzar el TypeError
        console.log(e); //Arroja el TypeError
    }
    console.log(a?.[index++]); //Arroja un valor indefinido
```

##  4.5 Expresiones de invocación
Estas sirven para llamar/ejecutar una función o método.

Esta se compone de una expresión con la cual se va a identificar la función ,seguida de paréntesis de apertura y los argumentos que se requieran separados por comas y un paréntesis de cierre.

```javascript
    f(0) // f cuenta como la expresión de la función y 0 es la expresión del argumento
    Math.max(x,y,z) // Math.max es la función , y lo que esta entre paréntesis son los argumentos
    a.sort() // a.sort() es la función y no tiene argumentos
```

Al evaluar una expresión de invocación de función, primero se evalúa la función en sí y luego sus argumentos, generando una lista de valores y si el valor evaluado no es una función, se lanza un "**TypeError**".

Los valores de los argumentos se asignan a los parámetros definidos por la función, y luego se ejecutan en el cuerpo de la función.

Si la función retorna un valor mediante "**return**", ese será el resultado de la invocación. Si no retorna nada, el resultado será "**undefined**".

Toda invocación tiene paréntesis y una expresión antes del paréntesis de apertura. Si esa expresión accede a una propiedad, se trata de una invocación de método.

En una invocación de método, el objeto al que pertenece el método se convierte en el valor de this dentro del cuerpo de la función.

Este comportamiento permite aplicar "*POO*" en JavaScript, ya que los métodos pueden operar directamente sobre el objeto al que pertenecen.

>   Esto se ve mas a detalle en el capitulo 9

### 4.5.1 Invocaciones condicionales

A partir de "*ES2020*" se puede invocar funciones usando `?.()` en lugar de solo usar `()` ,siendo una opción para evitar excepciones como el "*TypeError*"

Los arreglos tienen un método `sort()` , a este se le pueden pasar argumentos opcionales.

>   Antes de ES2020 se usaba una sentencia `if` para comprobar que el argumento estuviera definido antes de ser invocado.

Dependiendo la posición de `?.` cambia la expresión que realizara.

```javascript
    (1) o.m();  //Propiedad regular , invocación regular
    (2) o?.m(); //Condición a la propiedad ,invocación regular
    (3) o.m?.();//Acceso regular a la propiedad , invocación condicional
```
1.  `o` debe ser un objeto con la propiedad `m` y su valor debe ser una función.
2.  `o` si es null o undefined  , la expresión se dará como indefinida 
3.  `o` no debe ser null o undefined ,si no se tiene una propiedad `m` o es null , la expresión completa se vale como undefined

##  4.6 Expresiones de creación de objetos

Este tipo de expresiones crean objetos y llaman a una función (*Denominada constructor*), estas llevan como prefijo la palabra `new`

#####   Ejemplo:

```javascript
    new Object()
    new IDK(2,3)
```

En el caso de no pasar algún argumento se pueden omitir los paréntesis.

>   A mayor detalle en el capitulo 9

##  4.7 Descripción general del operador

En JavaScript, los operadores son fundamentales para realizar diversas operaciones en expresiones aritméticas, de "**comparación**", "**lógicas**" y de "**asignación**", entre otras. Estos operadores pueden estar representados tanto por signos(+ , - , =) como por palabras clave (como `delete` o `instanceof`).

Los operadores con mayor precedencia se enumeran primero, mientras que aquellos con menor precedencia aparecen al final

#####   Tabla con algunos operadores:

<table>
    <tr>
        <th>
            Operador
        </th>
        <th>
            Operación
        </th>
        <th>
            Tipos
        </th>
    </tr>
    <tr>
        <td>++</td>
        <td>Incremento</td>
        <td>lval → num</td>
    </tr>
    <tr>
        <td>--</td>
        <td>Decremento</td>
        <td>lval → num</td>
    </tr>
    <tr>
        <td>-</td>
        <td>Negar número</td>
        <td>num → num</td>
    </tr>
    <tr>
        <td>+</td>
        <td>Convertir a número</td>
        <td>any → num</td>
    </tr>
    <tr>
        <td>~</td>
        <td>Invertir bits</td>
        <td>int → int</td>
    </tr>
    <tr>
        <td>!</td>
        <td>Invertir valor booleano</td>
        <td>bool → bool</td>
    </tr>
    <tr>
        <td>delete</td>
        <td>Eliminar una propiedad</td>
        <td>lval → bool</td>
    </tr>
    <tr>
        <td>typeof</td>
        <td>Determinar tipo del operando</td>
        <td>any → str</td>
    </tr>
    <tr>
        <td>void</td>
        <td>Devolver valor indefinido</td>
        <td>any → undef</td>
    </tr>
    <tr>
        <td>**</td>
        <td>Exponencial</td>
        <td>num,num → num</td>
    </tr>
    <tr>
        <td>*,-,/,%</td>
        <td>Multiplicar, dividir, resto</td>
        <td>num,num → num</td>
    </tr>
    <tr>
        <td>+, -</td>
        <td>Sumar, restar</td>
        <td>num,num → num</td>
    </tr>
</table>

Estos son algunos operadores que se pueden encontrar en JS , una lista mas completa en:

Flanagan, David. "JavaScript: The Definitive Guide" . 7ª edición. O'Reilly Media, 2020. Página 149, Tabla 4.1: JavaScript Operators.

### 4.7.1   Número de operandos

Los operadores se pueden clasificar según su numero de operandos , en su mayoría los operadores de JS son binarios , es decir que esperan 2 operandos 

### 4.7.2   Tipo de operando y resultado

En su mayoría los operadores esperan un valor en especifico , y estos mismos devuelven un valor especifico, en el caso de que se requiera los operadores convierten el valor según sea necesario

*   **lval**: Termino que significa "una expresión que puede aparecer legalmente en el lado izquierdo de una expresión de asignación" 

>   Las variables, propiedades de los objetos y los elementos de los arreglos son "lvalues".

### 4.7.3   Efectos secundarios del operador

Dentro de algunas expresiones existen efectos secundarios y esto puede afectar el resultado de evaluaciones futuras.

>   Al momento de asignar un valor a una variable cambia la expresión que usa dicha variable o propiedad.

Los operadores de incremento `++` y decremento `--` tienen una asignación implícita, y tienen efecto secundario

Las invocaciones de funciones y creación de objetos de igual manera tienen efectos secundarios.

### 4.7.4   Precedencia del operador

Esta es el orden en el que se realizan las operaciones , ejecutándose en un orden de mayor precedencia a menor.

#####   Ejemplo:
```javascript
    w = x + y*z;
```
El operador `*`(multiplicación) tiene mayor precedencia que el de `+`(suma) por lor lo tanto la multiplicación se realiza primero que la suma , y el `=` es el que tiene menor precedencia ,por lo tanto se realiza su acción al último.

En el caso de que se quiera que se realize la suma primero se debe usar paréntesis:

```javascript
    w = (x + y)*z; //Se encierra la operación debido a que los paréntesis tienen mayor precedencia
```

Las expresiones de acceso e invocación tienen mayor precedencia.

#####   Ejemplo:

```javascript
    typeof my.functions[x](y)
```

Este es un operador de mayor prioridad.

Si no se esta seguro de su orden de precedencia se pueden usar `()` paréntesis para hacer mas explicito el orden de la evaluación.

### 4.7.5   Asociatividad de operadores

La asociatividad significa el orden en el que se realizan las operaciones de os operadores con la misma precedencia , puede haber de derecha a izquierda o de izquierda a derecha.

#####   Ejemplo:

```javascript
    w = x - y - z;
```
En este ejemplo el operador `-` empieza la realización de sus acciones de derecha a izquierda.


### 4.7.6   Orden de evaluación

La asociatividad y precedencia especifican el orden en el que se realizan las operaciones dentro de una expresión compleja , pero no especifican el orden con el cual se evalúan las sub-expresiones

Este orden solo es importante en el caso de que alguna de las expresiones afecte el valor de otra.

##  4.8 Expresiones aritméticas

La mayoría de los operadores aritméticos pueden usarse con operadores BigInt o con números regulares ,siempre y cuando que no se mezclen los tipos.

#####     Operadores básicos:

*   __**__: Exponenciación.
*   __*__:Multiplicación.
*   **/**:División.
*   **%**:Módulo(residuo de la división).
*   **+**:Suma.
*   **-**:Resta.

Excepción del operador de suma `+` los demás operadores simplemente evalúan sus operandos , los operandos que no se pueden convertir a tipo numérico retornan un resultado `NaN`.

>   El operador de exponenciación "**" , puede ser sustituido `Math.pow()` el cual ha estado desde ES2016.

### 4.8.1   El operador de suma +

Este operador puede sumar números o concatenar cadenas:

```javascript
    1 + 2 // = 3
    "hello " + "there" // = "hello there"
    "1" + "2" // "12"
```

Según las reglas de la conversión del operador `+` priorizan la concatenación de cadenas, es decir si alguno de los operandos es una cadena , hace que el otro objeto se convierta en una cadena.

En el caso de que uno de que un valor sea un objeto , este lo convierte a primitivo y luego a cadena de texto.


##### Ejemplo de sumas de comportamientos 

```javascript
    1 + "2" // = 12
    1 + {}  // El objeto se convierte a cadena 
    1 + true// "True" se convierte a número true == 1
    1 + null// "null" se convierte a número null == 0
    1 + undefined // NaN
```

### 4.8.2   Operadores aritméticos unarios

Estos modifican el valor para crear/generar un nuevo valor , estos tienen alta precedencia y son asociativos por la derecha.

#####     Operadores unarios aritmético:

*   **+**: El operador convierte su operando en un número y devuelve el valor convertido , no se puede usar con valores BigInt.

*   **-**: Convierte su operando en un número si es necesario ,y luego cambia el signo del resultado.

*   **++**: Modifica el valor dependiendo su posición, si se encuentra antes del valor este incrementara el valor y se evalúa con el valor ya incrementado, y si se usa después se incrementa pero no se evalúa con el valor incrementado. 

#####   Ejemplo:
```javascript
    let i = 1 , j = ++i;
    let n = 1 , m = n++;
```

*   **--**: Modifica el valor de igual manera que `++` ,solamente que este decrementa el valor.

>   + y - se usan como operadores unarios ,tanto como binarios

### 4.8.3   Operadores bit a bit

Estas realizan manipulaciones de bajo nivel a los bits.

4 de estos operandos se comportan como si fueran un valor booleano (1=v y 2=f) , los otros 3 se usan para desplazar bits a la izquierda y a la derecha.

Este tipo de operadores trabajan con números enteros , en caso de ser necesario eliminan cualquier parte fraccionaria, valores como `NaN`,`Infinity` y `-Infinity` se convierten a 0 cuando se usan como operandos.

>   Todos los operadores exceptuando >>>, se pueden usar con operandos numéricos regulares o con tipo BigInt.

####   Operadores bit a bit como valor booleano

*   **AND (&)** :Realiza una operación AND bit a bit entre dos operandos enteros,un bit en el resultado se establece solo si ambos bits correspondientes están activos.

#####   Ejemplo:
```javascript
    let a = 0b1100; // 12 en decimal
    let b = 0b1010; // 10 en decimal

    let resultado = a & b; 

    console.log(resultado); // Salida: 0b1000 = 8
    /*
        Explicación:
        A   B   Salida
        1   1   1   //V
        1   0   0   //F
        0   1   0   //F
        0   0   0   //F
    */
```

*   **OR (|)**: Realiza una operación OR bit a bit entre dos operandos enteros ,un bit en el resultado se establece si al menos uno de los bits correspondientes está activo.

#####   Ejemplo:
```javascript
    let a = 0b1100; // 12 en decimal
    let b = 0b1010; // 10 en decimal

    let resultado = a | b; 

    console.log(resultado); // Salida: 0b1110 = 14
    /*
        Explicación:
        A   B   Salida
        1   1   1   //V
        1   0   1   //V
        0   1   1   //V
        0   0   0   //F
    */
```

*   **XOR (^)**: Realiza una operación XOR exclusiva bit a bit ,un bit en el resultado se establece si exactamente uno de los bits correspondientes está activo , pero no ambos.

#####   Ejemplo:
```javascript
    let a = 0b1100; // 12 en decimal
    let b = 0b1010; // 10 en decimal

    let resultado = a ^ b; 

    console.log(resultado); // Salida: 0b0110 = 6
    /*
        Explicación:
        A   B   Salida
        1   1   0   //F
        1   0   1   //V
        0   1   1   //V
        0   0   0   //F
    */
```

*   **NOT (~)**: Operador unario que invierte todos los bits del operando ,equivale a cambiar el signo del valor y restar 1.

#####   Ejemplo:
```javascript
    let b = 0b1010; // 10 en decimal

    let resultado = ~b; 

    console.log(resultado); // Salida: 
    /*
        Explicación:
        //Almacenamiento de 0b1010
            //Antes de aplicar ~
            0000 0000 0000 0000 0000 0000 0000 1010
            //Después de aplicar ~
            1111 1111 1111 1111 1111 1111 1111 0101
    */
```

#####   Operadores bit a bit como desplazadores de bits de izquierda a derecha y viceversa

*   **Shift Left (<<)**: Desplaza los bits del primer operando hacia la izquierda por el número de posiciones especificado en el segundo operando ,es equivalente a multiplicar por potencias de 2.

#####   Ejemplo: 
```javascript
    let numero = 7; // Representación binaria: 0000 0111
    let resultado = numero << 2; // Desplazar 2 posiciones a la izquierda dentro de su mapa binario

    console.log(resultado); // Salida: 28

    /* Explicación:
        0000 0111 (7) << 2 → 0001 1100 (28)
    */
```

*   **Shift Right con Signo (>>)**: Desplaza los bits hacia la derecha, conservando el signo del operando original.
Si el número es positivo, se rellena con ceros; si es negativo, se rellena con unos ,equivale a dividir por potencias de 2 (descartando el residuo).

#####   Ejemplo: 
```javascript
    let numero = 28; // Representación binaria: 0001 1100
    let resultado = numero >> 2; // Desplazar 2 posiciones a la derecha dentro de su mapa binario

    console.log(resultado); // Salida: 7

    /* Explicación:
        0011 1000 (7) >> 2 → 0000 0111 (7)
    */

```

*   **Shift Right sin Signo (>>>)**: Similar a >>, pero siempre rellena con ceros en los bits desplazados, independientemente del signo ,útil para tratar números como enteros sin signo.
#####   Ejemplo:
```javascript
    let negativo = -1; // Representación binaria: 
    //  1111 1111 1111 1111 1111 1111 1111 1111

    let resultado = negativo >>> 4; // Desplazar 4 posiciones a la derecha

    console.log(resultado); // Salida: 268435455
    // Explicación:
    // 1111 1111 1111 1111 1111 1111 1111 1111 (-1) >>> 4 →
    // 0000 1111 1111 1111 1111 1111 1111 1111 (268435455)
```

##  4.9 Expresiones relacionales

Estos operadores comprueban si existe alguna relación entre 2 valores ,devolviendo verdadero o falso , generalmente usado para controlar algunos bloques como `if`,`while`,`for`.

### 4.9.1   Operadores de igualdad y desigualdad

Los operadores `==` y `===` realizan la comprobación si 2 valores son iguales , y aceptan operandos de cualquier tipo , y devuelven `true` si sus operandos son iguales o `false` si son diferentes.

*   **===**: Es el operando de igualdad estricta. 
*   **==**: Es el operando de igualdad mas flexible. 

Los operadores `!=` y `!==` son opuestos a los operadores `==` y `===` siguiendo la misma regla solo que del lado contrario.

*   **!==**: Es el operando de desigualdad estricta.
*   **!=**: Es el operando de igualdad mas flexible.

>   El operador ! calcula la función booleana NOT , se ve en el cap No. 4.10

####       Igualdad Estricta

Este operador `===` evalúa los operandos y los compara, algunas características de su manera de trabajar son estas:

*   Si los 2 operandos son de diferente tipo, no son iguales
*   Si los 2 son `null` o `undefined` , son iguales
*   Si los 2 son `true` o `false` ,son iguales

####    Igualdad con tipo de conversión

Este operador  `==` ,trabaja similar al anterior ,solo que es mas flexible, algunas características son:

*   Si un valor es `null` y el otro es `undefined` , son iguales
*   Si dos valores son iguales , pero de diferente tipo este los considera iguales
*   Este convierte a `true` en valor numérico (1) y a `false` en (0)

### 4.9.2   Operadores de comparación

Este requiere 2 operandos ya sea numérico o alfabético:

*   **< Menor que**: Es verdadero si el primer operando es menor al segundo.
*   **> Mayor que**: Es verdadero si el primer operando es mayor al segundo. 
*   **<= Igual o menor que**: Es verdadero si el primer operando es igual o menor que el segundo.
*   **>= Igual o mayor que**: Es verdadero si el primer operando es igual o mayor que el segundo.

Los operadores pueden ser de cualquier tipo, y la comparación puede ser solo en números y cadenas de texto.

Algunas características de estos son:

*   Si ambos operandos son cadenas después de la conversión, se comparan alfabéticamente basándose en el valor Unicode de 16 bits.
*   0 y -0 son iguales.
*   Infinito es mayor que cualquier número excepto sí mismo; -Infinito es menor que cualquier número excepto sí mismo.

#####   Ejemplo:
```javascript
    11 < 3 // => falso : comparación numérica
    "11" < "3" // => verdadero , comparación de cadena de texto
    "11" < 3 // => falso , el "11" se convierte a numérico
    "one" < 3 // => falso , el "one" se convierte como NaN
``` 

### 4.9.3   El operador `in`

Este operador del lado izquierdo , espera una cadena de texto y del lado derecho un objeto , se evalúa como `true` solo cuando la cadena de texto del lado izquierdo coincide con el nombre de una propiedad del objeto en la derecha.

#####   Ejemplo:
```javascript
    let objecto = {x: 1, y: 1}; 
    "x" in objeto   // Verdadero
    "z" in objeto   // Falso
```

### 4.9.4   El operador `instanceOf`

El operador `instanceof` requiere un objeto como operando izquierdo y una función constructora como operando derecho. Evalúa a true si el objeto es una instancia de la clase definida por la función constructora, y false en caso contrario.

#####   Ejemplo:
```javascript
    let a = new Date();
    a instanceOf Date // Verdadero 
    a instanceOf Object // Falso
```

##   Expresiones lógicas

Estos se usan para combinar 2 expresiones relacionales y hacer una mas compleja, y estos son:

#####   Los operadores lógicos:

### 4.10.1  AND(&&)
*   **&&**:Este como tal se puede clasificar en 3 niveles:

1.  Fácil (Booleano):   Si ambos operadores son de tipo `boolean` , devolverá `true` solo en el caso de que los operandos que tengan sean `true`.

#####   Ejemplo:
```javascript
    5 == 5 && 5 == 5 //True
    5 == 5 && 5 == 50 //False
```

2.  Medio (Truthy y Falsy): Usando lo visto en el capítulo 3.4 , acerca de los valores `true` y `false` (`null` como false , etc), se pueden realizar expresiones con base a ellos.

#####   Ejemplo:
```javascript
    let p = null;
    p && p.x // Retorna falsy ya que "p" es null, y no evalúa "x"
```

3.  Complejo (Cortocircuito): Este evalúa primero la expresión de la izquierda y si este da `false` , el operando derecho ya no se evalúa, y en caso de que el valor izquierdo sea `true` el resultado devuelto sera el del operando derecho.

#####   Ejemplo:
```javascript
    (a===b)&& stop() // Llama a stop() solo si la expresión a la derecha es verdadera
```
### 4.10.2  OR(||)
*   **||**: Al igual que con el operador `AND` se puede clasificar en niveles:

1.  Fácil (Booleano):   Si alguno de los 2 valores en `true`  este devolverá el valor `true` , y solo devolverá `false` en el caso de que ambos sean `false`.

#####   Ejemplo:
```javascript
    10 == 10 || 10 == 5 // Verdadero , uno es `true`
    10 == 5 || 10 == 20 //Falso , los dos son `false`
```

2.  Medio (Cortocircuito):  Evalúa primero el lado izquierdo y si es `true` , devuelve ese valor sin evaluar la expresión a la derecha , y si la primer expresión es `false` , evalúa y devuelve el valor del segundo operando.

#####   Ejemplo:
```javascript
    let max = maxWidth || preferences.maxWidth || 500;
    // Selecciona el primer valor truthy entre maxWidth, preferences.maxWidth y 500.
```

### 4.10.3  NOT(!)
*   **!**: Este invierte el valor de su operando 

#####   Ejemplos:
```javascript
    let vof = true;
    !vof // False ,Se invierte de manera lógica
    !!vof // True , Doble negación devuelve el mismo valor inicial
    !(p && q) // Aquí se invierte el resultado que tengan "p" y "q"
```

##  4.11    Expresiones de asignación
El operador `=` se usa para asignar un valor a alguna variable y funciona  con el operador izquierdo al cual se le va a asignar una variable del lado derecho.

#####   Ejemplo:
```javascript
    let a = 0;
``` 

También tiene asociatividad de derecha a izquierda, lo que permite asignar un valor a múltiples variables en una sola línea:
```javascript
    let a,b,c;
    a = b = c = 10;
    //Todos toman el valor de 10
```

Cuando se use en expresiones complejas se recomienda usar paréntesis.

### 4.11.1  Asignamiento con operación

Existen "atajos" que permiten combinar una expresión con ayuda del operador `=` , un ejemplo seria usando el operador `+=` el cual suma y asigna.

#####   Ejemplo:
```javascript
    total += subtotal; //Con atajo
    total = total + subtotal; //Sin atajo
```

<table>
    <thead>
        <tr>
            <th>
                Operador
            </th>
            <th>
                Ejemplo
            </th>
            <th>
                Equivalente
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                +=
            </td>
            <td>
                a += b
            </td>
            <td>
                a = a + b
            </td>
        </tr>
        <tr>
            <td>
                -=
            </td>
            <td>
                a -= b
            </td>
            <td>
                a = a - b 
            </td>
        </tr>
        <tr>
            <td>
                *=
            </td>
            <td>
                a *= b
            </td>
            <td>
                a = a * b
            </td>
        </tr>
    </tbody>
</table>



Tabla completa en:

>   Flanagan, D. (2020). JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language (7th ed.). O'Reilly Media. (Table 4.2, "Chapter 4.11: Operators and Expressions")

## 4.12 Expresiones de evaluación

La función `eval()` permite interpretar cadenas de texto y evaluarlas para generar un valor, generalmente no es muy usada ya que casi nunca es necesaria , además este podría generar vulnerabilidades de seguridad.

### 4.12.1  eval()

Esta evalúa una cadena como código para JS y tiene características como:

*   Aceptar un solo argumento

*   En el caso de no ser cadena de texto el valor , devuelve ese mismo valor

*   Si la cadena no tiene algún elemento válido ,este lanza un `SyntaxError`

*   Puede acceder y modificar variables locales del ámbito donde se invoca.
#####   Ejemplo:
```javascript
    let x = 5;
    eval("x = 10"); // Modifica la variable local `x`
```

*   Puede declarar nuevas variables locales utilizando var(usando `const` y `let` devolverá errores)
#####   Ejemplo:
```javascript
    eval("var x = 10");
```

*   Se pueden crear funciones locales dentro de `eval()`
#####   Ejemplo:
```javascript
    eval("function getNumber() { return number; }");
```

### 4.12.2  eval() global

Cuando se llama a `eval()` el código se trata como si fuera un código global , con la posibilidad de definir nuevas variables globales o funciones, o modificar valores existentes , con la excepción de poder modificar variables locales del lugar donde se invocó, esto permite que funcione sin interferencias.

*   **Evaluación directa**:Con este el código evaluado utiliza el entorno de variables del contexto que lo invoca. Esto significa que puede leer, escribir o modificar variables locales.
*   **Evaluación indirecta**:Con esta es cuando se llama a eval() con un nombre diferente ,en este caso, el código evaluado utiliza el objeto global como su entorno de variables y no puede acceder ni modificar variables locales ,solo puede definir nuevas variables globales usando var.

#####   Ejemplo propuesto por el libro:
```javascript
    const geval = eval; // Alias para eval, realiza una evaluación global
    let x = "global", y = "global"; // Dos variables globales

    function f() {
    let x = "local"; // Define una variable local
    eval("x += 'changed';"); // Evaluación directa modifica la variable local
    return x; // Devuelve la variable local modificada
    }

    function g() {
    let y = "local"; // Define una variable local
    geval("y += 'changed';"); // Evaluación indirecta modifica la variable global
    return y; // Devuelve la variable local sin cambios
    }

    console.log(f(), x); 
    // Imprime: "localchanged global"
    // La evaluación directa cambió la variable local `x` en `f()`

    console.log(g(), y); 
    // Imprime: "local globalchanged"
    // La evaluación indirecta cambió la variable global `y`, no la local
```

### 4.12.3 eval() estricto

Esta impone restricciones adicionales al comportamiento de la función `eval()` , en modo estricto le permite consultar y establecer variables , pero no permite definir nuevas variables o funciones.

>   Este modo se ve mas a detalle en el capítulo 5.6.3

##  4.13    Operadores varios

### 4.13.1 Operador condicional (?)
A este aveces se le denomina operador tenario , su sintaxis es: 

```javascript
    condición ? valorSiVerdadero : valorSiFalso;
```

El operador condicional puede ser cualquier tipo , el primero operando se evalúa e interpreta como booleano, si este es verdadero , se evalúa el segundo y devuelve su valor, y si es falso se evalúa del tercero.

Este es un atajo practico para evitar usar la sentencia `if`.

### 4.13.2 Primera definición (??)

Este evalúa el primer operando , en el caso de que el operando izquierdo (que es el primero) no sea `null` o `undefined`, este devuelve ese valor , en el caso opuesto devuelve el valor del operando derecho.

#####   Sintaxis:
```javascript
    a ?? b
```

>   Se puede decir que toma el primer valor definido dentro del bloque.

Este se puede diferenciar del operador `||` , ya que `||` selecciona el primer valor `true` y `??` el primer valor que este definido

#####   Ejemplo:
```javascript
    let max = maxWidth ?? preferences.maxWidth ?? 500;
```
Toma el primer valor definido ente las opciones que se tiene `maxWidth` , `preferences.maxWidth` , `500`

Fue introducido en **ES2020** , y formalmente se llama "**nullish coalescing**"

### 4.13.3  El operador typeof

Este se coloca antes de su operando , siendo de cualquier tipo , y su valor es una cadena la cual especifica el tipo de operando.

#####   Tabla de los tipos de valores que puede retornar typeof

<table>
            <thead>
                <tr>
                    <th>
                        X
                    </th>
                    <th>
                        typeof x
                    </th>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td>
                        undefined
                    </td>
                    <td>
                        "undefined"
                    </td>
                </tr>
                <tr>
                    <td>
                        null
                    </td>
                    <td>
                        "object"
                    </td>
                </tr>
                <tr>
                    <td>
                        true or false
                    </td>
                    <td>
                        "boolean"
                    </td>
                </tr>
                <tr>
                    <td>
                        cualquier numero o NaN
                    </td>
                    <td>
                        "number"
                    </td>
                </tr>
                <tr>
                    <td>
                        BigInt
                    </td>
                    <td>
                        "bigint"
                    </td>
                </tr>
                <tr>
                    <td>
                        String
                    </td>
                    <td>
                        "string"
                    </td>
                </tr>
                <tr>
                    <td>
                        Symbol
                    </td>
                    <td>
                        "Symbol"
                    </td>
                </tr>
                <tr>
                    <td>
                        function
                    </td>
                    <td>
                        "function"
                    </td>
                </tr>
                <tr>
                    <td>
                        object
                    </td>
                    <td>
                        "object"
                    </td>
                </tr>
            </tbody>
        </table>

### 4.13.4 El operador delete

Este intenta eliminar la propiedad dentro de un objeto o matriz especificada 

#####   Ejemplo:
```javascript
    let o = { x: 1, y: 2}; // Objeto
    delete o.x; //Elimina la propiedad "x"
    "x" in o;   //Falso , la propiedad ya no existe
```

*   Al eliminar la propiedad esta deja de existir.
*   En el caso de que el operando no sea un valor , este no realizara ninguna acción
*   Si no existe la propiedad devuelve `true` , y si existe y la logra eliminar con éxito igual devolverá `true`
*   Las propiedades no configurables son inmunes a la eliminación

Dentro del modo "*estricto*" este genera un `SyntaxError` si su operador es un identificador no cualificado, exclusivamente funciona cuando el operando es una expresión de acceso a una propiedad, y genera un `TypeError` si se intenta eliminar una propiedad no configurable.

### 4.13.5  El operador await

Se introdujo en **ES2017** , y se ve en el capítulo 13 del libro , y sirve para simplificar la programación asíncrona de JS

### 4.13.6  El operador void

Este aparece antes que su operador , el cual puede ser de cualquier tipo , es poco usado ,y su uso es complejo

*   Este hace que el valor del operando siempre sea `undefined`

#####   Ejemplo de uso:
```javascript
    let counter = 0;
    const increment = () => void counter++;
    increment(); // => undefined
    console.log(counter); // => 1
```
En este caso, void asegura que la función `increment` no devuelva ningún valor significativo (`undefined`) mientras aún incrementa la variable `counter`.

*   Útil cuando se necesita ejecutar una expresión por sus efectos secundarios sin devolver su valor.


### 4.13.7  El operador comma (,)

El operador coma es un operador binario cuyos operandos pueden ser de cualquier tipo, este evalúa de quiera a derecha, depende del valor del operando derecho.

#####   Ejemplo:
```javascript
    i = 0, j = 1, k = 2; //Este es usando ","
    i = 0; j = 1; k = 2; //Es básicamente lo mismo , solo que aquí se usa  ";"
```

