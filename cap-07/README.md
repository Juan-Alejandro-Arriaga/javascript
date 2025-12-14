#   Arreglos

Los arreglos son una colección ordenada de valores, nombrados como "*elementos*" y cada elemento tiene una posición numerica dentro del arreglo, a esta posición se le llama "*index*"

Algunas caracteristicas de los arreglos de JS son:
*   Pueden ser de cualquier tipo
*   Los elementos del arreglo pueden ser de diferente tipo
*   Son arreglos dinamicos siendo posible expandirse o comprimirse 
*   Su "index" son numeros enteros

>   JS cuenta con una propiedad *length* la cual nos dice la cantidad de elementos del arreglo


##  7.1 Creando arreglos

Los arreglos se pueden crear con:
*   Literales(`Array Literals`)
*   El operador "..." con un objeto iterable
*   Con `Array()`
*   Usando `Array.of()` y `Array.from()`

### 7.1.1 Array Literals

Esta es la manera mas sencilla y consiste en crear el arreglo usando corchetes y cada elemento separado por comas

#####   Ejemplo:

```javascript
    let arr_empty = [];     //Arreglo vacio
    let numeric = [1,2,3,4]; //Arreglo con datos numericos
    let mixed = [1.1 , true, "a"]; //Arreglo con elementos mixtos
```

Cada dato puede ser expresiones arbitrarias 

#####   Ejemplo:

```javascript
    let bs = 10;
    let arr_bs = [bs ,bs + 2 ,bs - 1];
```

Tambien puede contener datos de otros arreglos 

#####   Ejemplo:

```javascript
    let arr_w_o = [1,{x: 1, y: 2}],[2,{x:3 , y: 4}];
```

Si un arreglo contiene comas vacias `1,,1` el elemento que iria en esa posición no existiría y en caso de llamarlos apareceria como `undefined`

#####   Ejemplo:

```javascript
    let count = [1,,3];
    let udefs = [,,];
```

>   La sintaxis de Javascript te permite poner una coma al final , por lo que si se pone algo como `let b = [1,2,]` tendria longitud de 2 ,debido al espacio final

### 7.1.2 El operador "Spread"

A partir de ES6 se puede usar el operador `Spread` "..." para incluir elementos de un arreglo sin la literal.

#####   Ejemplo:

```javascript
    let a = [1,2,3];
    let b = [0,...a,4]; // b == [0,1,2,3,4]    
```

>   Tomemos en cuenta que se transfieren todos los elementos del arreglo al que usaste el operador "Spread"

Sirve para pasar todos los elementos del original y poderlos modificar sin tener que alterar el original


Además con el operador "Spread" puedes separar objeto por objeto sin la necesidad de hacerlo con un bucle y convertirlo en un unico caracter independiente.

#####   Ejemplo:

```javascript
    let mixed = [..."MIALE"];

    mixed // => ["M","I","A","L","E"]
```

### 7.1.3   El constructor Array()
A este se puede invocar de 3 maneras distintas

*   Llamada sin argumentos

```javascript
    let arr = new Array();
```

*   Llamada con un solo argumento numerico, este indica la longitud especifica

```javascript
    let arr = new Array(10);
```

>   Generalmente utilizado para cuando se conoce el numero exacto del tamaño del arreglo que se va a utilizar

*   LLamada con los elementos predefinidos 

```javascript
    let arr = new Array(5 ,4 ,3 ,"Sososonido");
```

### 7.1.4   Array.of()

Cuando se invoca al arreglo con Array() y se coloca mas de un elemento numerico dentro de los parentesis , los empieza a tomar como elementos del arreglo  y no se puede crear un arreglo con un solo elemento.

Para eso existe Array.of() el cual crea un nuevo arreglo el cual devuelve los valores de sus argumentos independientemente de cuantos elementos haya.

#####   Ejemplo:
```javascript
    Array.of(); // => []; regresa un arreglo vacio
    Array.of(10); // => [10]; puede crear un arreglo con un solo elemento numerico 
    Array.of(1,2,3); // => [1,2,3]
```

### 7.1.5 Array.from()

Este hace una copia del arreglo original , funcionando similar al operador `...`.

#####   Ejemplo:
```javascript
    let copy = Array.from(original);
```

Tambien acepta pasar una funcion como segundo argumento y cada elemento que del arreglo pasara a la función y en caso de que este lo modifique, el valor nuevo sera asignado al nuevo arreglo.

##  7.2 Leyendo y escribiendo elementos del arreglo 

Para trabajar con los elementos de un arreglo en JavaScript se utiliza la notación de corchetes [], indicando dentro el índice del elemento que se quiere leer o modificar. Cada índice representa una posición específica dentro del arreglo.

> Los indices comienzan desde 0, asi que el elemento 1 sera el elemento 0

#####   Ejemplo:
```javascript
    let letra = ["a","b","c"];

    letra[0]; // => "a"
    letra[1]; // => "b"
    letra[2]; // => "c"
```

Asimismo se puede modificar un valor segun su posición asignandole un nuevo valor

>   Si se intenta acceder a un indice que no existe, Javascript lanza `undefined`

#####   7.3 Arreglos dispersos (Sparse arrays)

Un arreglo disperso es aquel en el que no todas las posiciones del arreglo contienen un valor definido. Es decir, existen índices que simplemente no existen dentro del arreglo.

Este tipo de arreglos puede aparecer de distintas formas:

*   Cuando se dejan comas vacías en la definición
*   Cuando se asignan valores a índices muy grandes
*   Cuando se eliminan elementos sin reordenar el arreglo

#####   Ejemplo:
```javascript
    let sparse = [1,,3];
```

En este caso el indice 1 no existe , y tendria longitud de 3

Tambien los arreglos pueden ser de grandes longitudes y solo tener un elemento

#####   Ejemplo:
```javascript
    let arr = [];
    arr[100] = "x";

    arr.length; // 101
```

##  7.4 Lontigudes de los arreglos (.lenght)

Todos los arreglos en JavaScript cuentan con la propiedad `length`, la cual indica el índice más alto del arreglo + 1, no necesariamente la cantidad real de elementos definidos.

#####   Ejemplo:
```javascript
    let nums = [10,20,30];
    nums.length; // 3
```

En arreglos normales, `length` suele coincidir con el número de elementos, pero en arreglos dispersos esto no siempre es así.

#####   Ejemplo:
```javascript
    let pruf = [];
    pruf[5] = "a";

    pruf.length; // 6
```

Una característica importante es que `length` se puede modificar manualmente. Si se reduce su valor, los elementos que queden fuera del nuevo tamaño se eliminan.

#####   Ejemplo:
```javascript
    nums.length = 2;
    nums; // [10,20]

```

Y si lo se aumenta el valor se crean posiciones vacias.

##  7.5 Agregando y eliminando elementos del arreglo

Los arreglos en JavaScript no tienen un tamaño fijo, lo que significa que pueden crecer o reducirse en cualquier momento. Existen varias formas de agregar o eliminar elementos, dependiendo de si se quiere hacerlo al inicio, al final o en una posición específica.

####    Agregando elementos

El método `push()` se utiliza cuando se desea agregar uno o más elementos al final del arreglo, modificando directamente el arreglo original.

#####   Ejemplo:
```javascript
    let nums = [1,2,3];
    nums.push(4);

    nums; // [1,2,3,4]

``` 

Por otro lado, `unshift()` agrega elementos al inicio del arreglo, lo cual provoca que los índices de los demás elementos se recorran.

#####   Ejemplo:
```javascript
    nums.unshift(0);
    nums; // [0,1,2,3,4]
```

#### Eliminar elementos

Para eliminar elementos también existen métodos específicos.

*   pop() elimina el último elemento del arreglo
*   shift() elimina el primer elemento

```javascript
    nums.pop(); 
    nums; // => [0,1,2,3]

    nums.shift();
    nums; // => [1,2,3]
```

>   No deja espacios vacios, se reajusta automaticamente los indices

##  7.6 Iterando arreglos

terar un arreglo significa recorrer cada uno de sus elementos para realizar alguna operación con ellos. JavaScript ofrece varias formas de hacerlo, desde bucles clásicos hasta métodos más modernos.

La forma más tradicional es usando un ciclo `for`.

#####   Ejemplo:
```javascript
    let arr = [10,20,30];

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
```

También existe el ciclo `for...of`, el cual es más legible y está pensado específicamente para recorrer valores.

#####   Ejemplo:
```javascript
    for(let value of arr){
        console.log(value);
    }
```

>   Este recorre solo los valores existentes


##  7.7 Arreglos multidimencionales

Un arreglo multidimensional es un arreglo que contiene otros arreglos. En la práctica, esto se usa para representar tablas, matrices o estructuras más complejas.

#####   Ejemplo:
```javascript
    let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
```

Para acceder a algun valor se usan multiples indices

#####   Ejemplo:
```javascript
    matrix[0][1]; // 2
```

##  7.8 Métodos de los arreglos
Los arreglos en JavaScript cuentan con muchos métodos integrados que permiten trabajar con sus elementos de manera más sencilla.

*   join() convierte el arreglo en una cadena
*   slice() obtiene una copia parcial del arreglo
*   splice() agrega o elimina elementos en una posición específica
*   sort() ordena los elementos
*   reverse() invierte el orden

#####   Ejemplo:
`join()`
```javascript
    let letters = ["a","b","c"];

    letters.join("-"); // "a-b-c"
```

`slice()`
```javascript
    letters.slice(0,2); // ["a","b"]
    // No modifica el arreglo
```

`splice()`
```javascript
    letters.splice(1,1,"x");
    letters; // ["a","x","c"]
```

##  7.9 Objetos similares a arreglos
Existen objetos que no son arreglos, pero se comportan de forma parecida, ya que tienen índices numéricos y una propiedad `length`.

Un ejemplo común es `arguments` dentro de una función o los `NodeList` del DOM.

#####   Ejemplo:
```javascript
    let realArray = Array.from(arrayLike);
```

##  7.10 Cadenas como arreglos
Las cadenas de texto se pueden tratar de forma similar a los arreglos, ya que permiten acceder a sus caracteres por índice.

#####   Ejemplo:
```javascript
    let word = "Hola";

    word[0]; // => "H"
    word[1]; // => "o"
```

Sin embargo, las cadenas son inmutables, por lo que no se pueden modificar directamente como un arreglo.


