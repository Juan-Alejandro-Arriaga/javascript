#   Funciones

Las funciones se pueden invocar cualquier numero de veces y estas pueden tener `parámetros`, los cuales son valores que se pueden enviar para poder realizar acciones en esa funcion, tambien incluyen `return` el cual retorna el valor de la función

Si la función se asigna a un objeto se le conoce como **método** de ese objeto

Cuando una funcion es invocada a travéz de un objeto, el mismo objeto es el valor de la función, los objetos que se designan para la creación de un objeto se les llaman **constructores**.

##  8.1 Definiendo funciones

La manera sencilla de definir una función en JavaScript es usando la palabra reservada `function` que puede ser usada como declaración o como expresión.

A partir de ES6 permite crear funciones sin la palabra reservada `function` usando: `arrow functions` las cuales tienen una sintaxis mas compacta siendo útil al pasar un argumento a otra función.

### 8.1.1   Declaración de funciones

Las funciones se declaran con el siguiente orden:

*   `function`
*   *Un identificador con el cual podamos indentificar la función*
*   *() en caso de que haya parámetros se colocan dentro de los paréntesis separados por comas*
*   *Un par de llaves el cual nos hace ver el cuerpo de la función*

#####   Ejemplo:
```javascript
    function hola(/*Aqui irían los parámetros si es se requiriera*/) {
        console.log("hola");
    }
```

>   El nombre de las funciones se tratan como si fueran variables

El intérprete de Js se encarga de ejecutar todo lo que este dentro del cuerpo de la función.

El `return` retorna un valor hacia donde fue llamada, y tambien este detiene la funcion y si no se tiene una expresion asociada el valor de retorno será `undefined`

### 8.1.2   Expresiones de funciones

Estas son similares a las funciones de declaración solo que estas se manejan como expresiones siendo el nombre opcional.

#####   Ejemplo:

```javascript
// Expresion de funcion simple, retorna un valor
    const cuadrado = function(x) {
            return x*x;
        }

//  Expresion de funcion con nombre
    const f = function fact(x) {
        if( x <= 1)
            return 1;
        else 
            return x*fact(x-1);
    }

//  Pueden ser usadas como argumentos de otras funciones
    [3,2,1].sort(function(a,b) {
        return a-b;
    });

    let diezcuadrado = (function(x) {
        return x*x;
    }(10));
```

Este tipo de funciones asigna la función a una variable o constante

>   Es recomendame usar `const` para este tipo de funciones ya que asi se evita el problema de que sobreescriba/altere la función

>   No se puede referenciar a una función de expresion cuando esta no esta asignada en una variable

### 8.1.3 Funciones de flecha (Arrow functions)
A partir de ES6 se permite declarar `Arrow functions` (dicho asi por que se utiliza `=>`) y no se utliza la palabra reservada `function`.

#####   Ejemplo:

```javascript
    const sum = (x,y) => { return x + y; };
```

O tambíen se puede omitir la palabra reservada `return`, el punto y coma `;` de este y las llaves `{}`

#####   Ejemplo:

```javascript
    const sum = (x,y) => x + y;
```

Para el caso de que solo tengamos 1 parámetro, se pueden omitir los paréntesis

#####   Ejemplo:

```javascript
    const cuadrado = x => x*x;
```

Las funciones sin argumentos llevan paréntesis vacios 

#####   Ejemplo:

```javascript
    const idk = () => 45;
```

Este tipo de funciones son ideales para cuando necesitas pasar una función a otra (comunmente usados con métodos como `map()`,  `filter()` y `reduce()`)

#####   Ejemplo:

```javascript
//  Elimina los datos "null"
    let filtro = [1,null,2,3].filter(x => x !== null);
//  Da los cuadrados de los numeros
    let cuadrados = [1,2,3,4].map(x => x*x);
```

### 8.1.4 Funciones anidadas

En JS pueden existir funciones dentro de otras funciones

