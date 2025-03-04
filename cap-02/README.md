#   Estructura léxica
Es el conjunto de reglas que tiene un lenguaje en la cual se establece como se escriben los programas en especifico.

## 2.1 El texto de un programa de JavaScript

Dentro de este lenguaje se deben escribir las palabras de manera uniformemente , por ejemplo se debe escribir `while` no `While` o `WHILE`, inclusive tambien ignora saltos de línea en algunos casos , tambien reconoce tabulaciones y algunos caracteres de control `ASCII` y algunos caracteres de espacio.

## 2.2 Comentarios

Tiene 2 estilos de comentario se puede usar `//` o `/* */`.
#####   Ejemplo de uso:
```javascript
    //Comentario de 1 sola linea se requiere poner otra vez // si se quiere otra linea

    /*
        Comentario de multiples 
        lineas
    */
```

##  2.3 Literales
Son los datos que aprecen directamente en un programa:

#####   Ejemplos

```javascript
    12 // Numero entero
    1.2 // Numero con decimales
    "hello world" // Cadena de texto
    'Hi' // Cadena de texto
    true // Valor booleano
    false // Valor booleano
```

## Identificadores y palabras reservadas
Es un nombre que sirve para nombrar e idenficar constantes,variables,funciones ,etc , estos deben de comenzar con un signo de dolar (*$*) o un guión bajo (*_*).

#####   Ejemplo de los indetidicadores permitidos
```javascript
    my_variable_name
    v13
    _dummy
```
El mismo JS tiene identificadores que no se pueden usar como identificadores regulares.

### 2.4.1 Palabras reservadas
Existen palabras que no se deben usar como identificador algunos ejemplos son estas:

```javascript
    as 
    const 
    export 
    get 
    null 
    target 
```

Ademas reserva algunas palabras que es probable que se puedan usar en futuras versiones:
```javascript
    enum 
    implements 
    interface 
    package 
    private 
    protected
    public
```
##  2.5 Unicode

JS se escriben utilizando el conjunto de caracteres "*UNICODE*" lo que permite que incluso caracteres especiales como simbolos matematicos y palabras de otros idiomas sirvan como constantes o variables.

```javascript
    const ª = 3.14;
    const こんにちは = true;
```

### 2.5.1   Secuencias de escape Unicode
Js define secuencias denominadas de "*escape*" para los equipos o programas que no permitan mostrar carácteres "*UNICODE*" , estas secuencias comienzan con los carácteres `\u` seguido de 4 dígitos hexadecimales o hasta 6 encerrados entre llaves.

#####   Ejemplo:
```javascript
    /*Para escribir la letra é se requiere la secuencia \u00E9 y los 
    siguientes son ejemplos de como escribirlo*/
    let café=1; //Definiendo con UNICODE
    caf\u00e9   //Secuencia de escape
    caf\u{E9}   //Secuencia de escape
```
En ES6 se implemento la versión con llaves para elementos que requerian mas de 16px como los emojis.
```javascript
    console.log("\u{1F600}");
```
### 2.5.2 Normalización del UNICODE
Los valores no UNICODE por ejemplo `e` es diferente a `é` ,y en caso de ser usados cambiaria la variable si esta es diferente.

#####   Ejemplo:
```javascript
    const cafe = 1;
    const café = 2;
    //Las dos son variables distintas
```

##  2.6 Punto y coma opcionales

JS usa el punto y coma (*;*) para separar declaraciones , con esto se indica el inicio y el final de alguna declaración , en JS se puede omitir el punto y coma entre dos declaraciones si esas declaraciones están escritas en líneas separadas.

#####   Ejemplo de uso necesario del punto y coma:
```javascript
    let a = 5; let b = 6;
```
#####   Ejemplo del uso NO necesario del punto y coma:
```javascript
    let a
    a
    =
    3
    console.log(a)
```
Esto sucede solo en el caso de el siguiente carácter no sea algo que se pueda interpretar como una declaracion de la variable.

