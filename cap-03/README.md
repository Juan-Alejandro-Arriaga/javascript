# Tipos de valor y variables

Los programas funcionan por medio de valores ya sean tipo numérico o de cadena de texto, en las variables , se almacenan los valores que se le introduzcan , cada variable se le coloca un nombre para poderse usar a lo largo del código.

## 3.1 Descripción general y definiciones

Los valores de JS se dividen en 3 tipos:

- **primitivos**
- **objetos**
- **booleanos**

Js tiene valores primitivos como "_null_" y "_undefined_" los cuales son primitivos pero no son números, booleanos o cadenas de texto.

Cualquier valor de JS que no sea alguno de los anteriores , es un objeto.

El objeto es una colección de propiedades , donde cada una tiene un nombre y un valor.

> Se ven en el capitulo 6

Este lenguaje también trae un tipo especial de objeto conocido como matriz ,la cual es una colección ordenada de valores numerados.

> Se ven en el capitulo 7

JS define un diverso grupo de objetos útiles:

- **set**:Representa un conjunto de valores.
- **map**:Representa una asignación de claves a valores, facilitando las operaciones en matrices, bytes , entre otros.
- **RegExp**:Representa patrones textuales y permite operaciones sofisticadas de coincidencia, búsqueda.
- **Error**:Representa fechas y horas.
- **Date**:Representan errores que puedan surgir.

> Capitulo 11

Las funciones y las clases no son solo parte de la sintaxis del lenguaje , son valores que se pueden manipular por programas como valores no primitivos y tipos especializados de objetos.

> Capitulo 8

JavaScript tiene un recolector de basura automático que se encarga de liberar memoria cuando los valores ya no son accesibles por el programa.

> Capítulo 3

Este lenguaje soporta un estilo de programación orientado a objetos. En lugar de usar funciones globales.

> Capítulo 9

Solo los objetos en JavaScript tienen métodos, pero los valores primitivos como números, cadenas, booleanos y símbolos se comportan como si los tuvieran. Sin embargo, null y undefined son los únicos valores que no permiten invocar métodos.

> Capítulo 3

Los tipos de objetos en JavaScript son mutables, lo que significa que se pueden cambiar sus propiedades. En contraste, los tipos primitivos (números, booleanos, símbolos, null, undefined) son inmutables.

> Capítulo 3.8

JavaScript realiza conversiones automáticas entre tipos de datos. Por ejemplo, convierte números a cadenas cuando es necesario, y cualquier valor no booleano se puede convertir automáticamente a verdadero o falso, según el caso.

> Capítulo 3.9

Estas conversiones automáticas influyen en cómo JavaScript evalúa la igualdad. El operador == hace conversiones de tipo, mientras que el operador === (recomendado) compara sin convertir tipos.

> Capítulo 3.9.1 y 4.9.1

En JavaScript se usan const para declarar constantes y let para declarar variables. No se especifica el valor que se almacenara

> Capítulo 3.10

## 3.2 Números

Se usa para representar números enteros y para aproximarse a los números reales.

JS usa el formato de punto flotante de 64 bits definido por el estándar IEE.

> El estándar es representar todos los numero entre −9 007 199 254 740 992(-2^53) y 9 007 199 254 740 992(2^53) , si se usan valores mayores o menores a este se puede perder la precisión en los dígitos finales.

Cuando un número aparece directamente en un programa de JS se denomina como literales enteros , a los cuales se le puede colocar un signo (-) para convertirlo en negativo

### 3.2.1   Enteros literales

En un programa de JS, un número entero de base 10 se escribe como una secuencia de
dígitos.

##### Ejemplo:

```javascript
0;
3;
10000000;
```

Además reconoce valores hexadecimales (base 16) , el valor comienza con `0x` o `0X` , un dígito hexadecimal es un dígito el 0 al 9 o letras a (A) hasta f (F) ,ejemplo:

```javascript
0xff;
0xbadcafe;
```

### 3.2.2 Literales enteros

Estas literales pueden tener un punto decimal , usan la sintaxis tradicional para números reales.

Estas literales pueden representarse por medio de notación exponencial.

> Un numero real seguido de la letra e (o E) seguido de un exponente entero.

##### Sintaxis:

`[digits][.digits][(E|e)[(+|-)]digits]`

##### Ejemplo:

```javascript
6.02e23; // 6.02 × 10²³
```

##### SEPARADORES EN LITERAL NUMÉRICO

Puede utilizar guiones bajos dentro para dividir literales largos en fragmentos que sean más fáciles de leer:

```javascript
let billion = 1_000_000_000; // Separar miles
let bytes = 0x89_ab_cd_ef; // Separar bytes
let bits = 0b0001_1101_0111; // Separador de "nibbles"
let fraction = 0.123_456_789; // Funciona también en la parte de fracciones.
```

### 3.2.3 Aritmética en JavaScript

Los programas trabajan con utilizando los operadores aritméticos:

- **+**:Suma
- **-**:Resta
- **\***:Multiplicación
- **/**:División
- **%**:Módulo (resto de la división).

Se añadió el objeto() **Math**:

```javascript
Math.pow(2, 53); //Para potencias
Math.round(0.6); //Se redondea al numero entero mas cercano
Math.ceil(0.6); //Se redondea hacia arriba
Math.floor(0.6); //Se redondea hacia abajo
Math.abs(-5); //Valor absoluto
Math.max(x, y, z); //Devuelve el argumento más grande
Math.min(x, y, z); //Devuelve el argumento más pequeño
Math.random(); //Numero aleatorio dentro de un rango en especifico
Math.PI; //Circunferencias de un circulo
Math.E; //La base del logaritmo natural
Math.sqrt(3); //Raíz cuadrada
Math.pow(3, 1 / 3); //Raíz cubica
Math.sin(0); //Funciones trigonométricas (cos, atan, tan)
Math.log(10); //Logaritmo natural de 10
Math.log(10) / Math.LN10; //Base 10 logaritmo de 100
Math.log(10) / Math.LN2; //Base 2 logaritmo natural de 512
Math.exp(3); //Math.E al cubo
Math.cbrt(27); // Raíz cubica
Math.hypot(3, 4); // Raíz de cuadrada de la suma de los cuadrados
Math.log10(100); // Base -10 logaritmo
Math.log2(1024); // Base -2 logaritmo
Math.log1p(x); // Logaritmo natural de (1+x)
Math.expm1(x); // La inversa de Math.log1p()
Math.sign(x); // -1, 0 o 1 para argumentos <, == o > 0
Math.imul(2, 3); // Multiplicación optimizada de números enteros de 32 bits
Math.clz32(0xf); // Número de bits cero iniciales en un entero de 32 bits
Math.trunc(3.9); // Convertir a un entero truncando la parte fraccionaria
Math.fround(x); // Redondear al número flotante de 32 bits más cercano
Math.sinh(x); // Seno hiperbólico. También Math.cosh(),Math.tanh()
Math.asinh(x); // Acosen hiperbólico. También Math.acosh(), Math.atanh()
```

La aritmética no genera errores en casos de desbordamiento , cuando esto pasa el resultado es un valor infinito y en el caso negativo es un infinito negativo.

El desbordamiento por defecto se produce cuando una operación numérica es mas cercano a cero, si se produce un numero negativo se considera como "cero negativo" , es casi indistinguible.

Dividir por cero en JavaScript no lanza un error, devuelve infinito o -infinito. La única excepción es cuando se divide **0 entre 0**, lo cual genera el valor especial **NaN**.

JavaScript define las constantes globales **Infinity** y **NaN**, y también están disponibles como propiedades del objeto **Number**.

##### Ejemplo de objetos de números:

```javascript
Infinity; //Un número positivo demasiado grande para representar
Number.POSSIBLE_INFINITY;
1 / 0; //Infinito
Number.MAX_VALUE * 2; //Limite del infinito

/*Se puede el mismo caso  con valores negativos*/

NaN; // El valor que no es un número
Number.NaN;
0 / 0; // NaN
Infinity / Infinity; // NaN

Number.MIN_VALUE / 2 - // desbordamiento
  Number.MIN_VALUE / 2 - // cero negativo
  1 / Infinity - // cero negativo
  0;

/*Mas propiedades*/
Number.ParseInt();
Number.ParseFloat();
Number.isNaN(x);
Number.isFinite(x);
Number.isInteger(x);
```

El valor **NaN** no se puede usar `x === NaN` para comprobar si una variable es NaN. En su lugar, se debe usar `x != x` o `Number.isNaN(x)`.

La función global **isNaN()** es similar a `Number.isNaN()`, pero con una diferencia importante: también devuelve `true` si el argumento no es un número y **no puede convertirse** en uno. Por otro lado, `Number.isFinite()` devuelve `true` solo si el valor es un número finito que **no es NaN ni infinito**. La función global `isFinite()` intenta convertir el valor antes de evaluarlo.

El valor **-0** (cero negativo) también es peculiar. Aunque **se considera igual a 0 positivo**, incluso con `===`, se comporta de forma diferente al usarse como divisor:

```javascript
let zero = 0;
let negz = -0;
zero === negz; //Estos son iguales.
1 / zero === 1 / negz; //Infinito + y - no son iguales
```

### 3.2.4 Errores de redondeo y de coma flotante binaria

Los números reales son una cantidad infinita y dentro de JS se pueden representar con el formato de punto flotante , es decir que la representación de los números es una aproximación de los números reales.

La representación que se usa es una forma binaria ,representando con exactitud fracciones no tan comunes , en cambio , las mas comunes no se pueden representar con exactitud.

> Las no tan comunes 1/2 , 1/8 , 1/1024.

> Las comas comunes son 1/10 , 1/100.

##### Ejemplo donde suele ocurrir este caso:

```javascript
let x = 0.3 - 0.2; // Resultado seria .1
let y = 0.2 - 0.1; // Resultado seria .1
x === y; // Los dos valores no son los mismos
x === 0.1; //.3 - .2 no dan como resultado .1
y === 0.1; // .2 - .1 da como resultado .1
```

Esto sucede por el error de redondeo debido a la diferencia entre aproximaciones.

Como solución se puede usar números enteros escalados.

### 3.2.5 Números enteros de precisión arbitraria con BigInt

El tipo numérico `BigInt` tiene como valores números enteros , se agrego principalmente para permitir la representación de números enteros de 64bits.

> Este valor puede almacenar millones de dígitos

Las literales de este se escriben como una cadena de dígitos seguida de una letra "_n_" minúscula , se pueden usar los prefijos "_0b_","_0o_""_0x_".

##### Ejemplo:

```javascript
1234n; // BigInt no tan grande
0b111111n; // BigInt binario
0o7777n; // BigInt octal
0x8000000000000000n; // => 2n**63n: entero de 64bits
```

Se puede usar la función `BigInt()` para convertir números o cadenas a formato `BigInt`

##### Ejemplo:

```javascript
BigInt(Number.MAX_SAFE_INTEGER); // => 9007199254740991n
let string = "1" + "0".repeat(100); // 1 seguido de 100 ceros
BigInt(string); // 10n**100n
```

Este funciona como cualquier otro número regular en JS , solo que la división elimina cualquier resto y redondea hacia abajo.

JS no permite hacer una operación directa entre un número de tipo `BigInt` y `Number`.

- `BigInt` puede representar números enormes, lo que lo hace más poderoso en términos de tamaño.
- `Number` puede representar enteros y decimales, lo que lo hace más versátil en términos de tipos de valores.

No se pueden usar las dos en operaciones matemáticas. En lugar de intentar convertir automáticamente uno al otro JavaScript prohíbe las operaciones mixtas.

Los operadores de comparación si funciona con los número mixtos.

##### Ejemplo

```javascript
1 < 2n; //  verdadero
2 > 1n; //  verdadero
0 == 0n; //  verdadero
0 === 0n; // Falso , el "===" compara también los tipos
```

### 3.2.6 Fechas y tiempos

JS tiene la función `Date` con la que se manipulan y representan fechas y horas , son objetos y números

##### Funciones acerca del tiempo.

```javascript
let timestamp = Date.now(); // La hora actual como número
let now = new Date(); // La hora actual como un objeto
let ms = now.getTime(); // Convertido a milisegundos
let iso = now.toISOString(); //  Convertir a una cadena en formato
```

## 3.3 Texto

Este se representa por medio de una cadena , la cual es una secuencia ordenada de valores de 16bits , cada carácter representa un carácter "_UNICODE_" , usan la indexation basada en 0.

#### CARACTERES, PUNTOS DE CÓDIGO Y CADENAS DE JAVASCRIPT

Js usa codificación "**utf-16**" todos los caracteres que excedan de los 16bits se codifican mediante este tipo de codificación, ejemplo:

```javascript
let euro = "€";
let love = "❤";
euro.length; // Este es un elemento de 16 bits
love.length; // Se codifica mediante utf-16
```

### 3.3.1 Literales de cadena

Para incluir una cadena se encierra el contenido entre comillas simples ('') o comillas dobles ("")

##### Ejemplo:

```javascript
""; //Sin caracteres
"abc"; //Cadena de letras
"3.14"; //Cadena numérica
```

Anteriormente se requería que se escribiera la cadena en una sola linea ,actualmente se puede dividir colocando al final una barra invertida `\` y para dividir el texto e imprimirlo en una nueva linea se coloca una "_n_" después de la linea invertida.

##### Ejemplo:

```javascript
"impresion\n2lineas";
"Una cadena\
    de una linea\
    escrita en 3 lineas";
```

En algunos casos debido a la sintaxis del lenguaje , tal como el ingles y sus apostrofes, para esos casos se coloca una diagonal invertida para evitar esos problemas

Html y JS pueden contener cadenas de texto uno del otro, y suele haber conflictos usando las comillas dobles , para eso se combinan con las comillas simples.

##### Ejemplo:

```html
<button onclick="alert('Thank you')">Click Me</button>
```

### 3.3.2 Secuencias de escape en literales de cadena

La barra invertida `\` tiene diferentes aplicaciones , como representar caracteres que normalmente no se pueden mostrar de otra manera en la cadena.

A estas se les llama "_secuencias de escape_"

##### Lista de diferentes secuencias:

- **\0**: Carácter "_NUL_"
- **\b**: Backspace
- **\t**: Tabulation horizontal
- **\n**: Nueva linea
- **\v**: Tabulation vertical
- **\f**: Avance de formato
- **\r**: Carriage return
- **\\"**: Comillas dobles
- **\\'**: Apostrofe o comilla simple
- **\\\\**: Diagonal invertida
- **\xnn**: El carácter Unicode especificado por los dos dígitos hexadecimales nn
- **\Unn**: El carácter Unicode especificado por los cuatro dígitos hexadecimales nnnn
- **\u{n}**: El carácter Unicode especificado por el punto de código n, donde n es de uno a seis
  dígitos hexadecimales entre 0 y 10FFFF

### 3.3.3 Trabajando con cadenas de texto

JS permite concatenar cadenas de texto usando el operador "_+_"

##### Ejemplo:

```javascript
let msg = "Hello ," + "World";
```

Las cadenas se pueden comparar usando los operadores estándar "_===_" igualdad y "_!==_" desigualdad y se pueden usar de igual manera los operadores `<,<=,>, =>`.

Se puede usar la propiedad `lenght` para determinar la longitud de una cadena.

##### Api´s de trabajo con cadenas

```javascript
let s = "Hello, world"; //Texto base
// Obtener partes de una cadena
s.substring(1, 4); //Obtiene la posición 1-4
s.slice(1, 4); // Mismo que la anterior
s.slice(-3); // Últimos 3 caracteres
s.split(", "); // Divide la cadena según el carácter especificado

// Buscando en la cadena
s.indexOf("l"); //Busca la posición de la letra
s.indexOf("l", 3); // Posición de la letra o después del 3
s.indexOf("zz"); // -1 si no indica la cadena especificada
s.lastIndexOf("l"); // Ultima posición de la letra especificada

// Funciones de búsqueda booleana en ES6 y versiones posteriores
s.startsWith("Hell"); // Verdadero si la cadena comienza con lo que se indica
s.endsWith("!"); // Verdadero si la cadena finaliza con lo que se indica
s.includes("or"); // Verdadero si la cadena contiene lo que se indica

// Modificando la cadena
s.replace("llo", "ya"); //Cambia las letras llo , por ya
s.toLowerCase(); // Convierte a minúsculas
s.toUpperCase(); // Convierte a mayúsculas

// Inspección de caracteres individuales (16 bits) de una cadena
s.charAt(0); // Busca cual es el carácter especificado
s.charAt(s.length - 1); // busca cual es el ultimo carácter
s.charCodeAt(0); // Número de 16 bits en la posición especificada
s.codePointAt(0);

// Funciones de relleno de cadenas en ES2017
"x".padStart(3); // Añade espacios a la izquierda según la longitud marcada
"x".padEnd(3); // Añade espacios a la derecha según la longitud marcada
"x".padStart(3, "*"); // Añade los elementos a la izquierda según la longitud marcada
"x".padEnd(3, "-"); // Añade los elementos a la derecha según la longitud marcada

// Funciones de recorte de espacio. trim()
" test ".trim(); // Quita espacios en general
" test ".trimStart(); //Quita espacios al inicio
" test ".trimEnd(); // Quita espacios a la derecha
```

### 3.3.4 Literales de planta

A partir de ES6, las literales se pueden delimitar con comillas invertidas " **``** "

Estos ademas de usarse como sintaxis de cadena , se pueden usar para incluir excreciones arbitrarias de JS.

##### Ejemplo:

```javascript
let name = "Bill";
let greeting = `Hello ${name}.`; // Se concatena el valor de la variable name
```

Lo encontrado dentro de `${}` se interpretara como una expresión de JS

#### LITERALES DE PLANTILLA ETIQUETADA

Los **tagged template literals** son una característica avanzada de los template literals. Si se coloca una función justo antes del backtick inicial, el texto y las expresiones dentro del template se pasan a esa función, y su **valor será el resultado que retorne la función**. Esto permite, por ejemplo, hacer escapes personalizados de HTML o SQL antes de insertar los valores en el texto.

JavaScript incluye una función tag incorporada: **String.raw()**, que devuelve el texto dentro del template **sin interpretar secuencias como `\n`**, conservando los caracteres literalmente.

Aunque se invoca una función, **no se usan paréntesis**; los backticks reemplazan esa sintaxis en este caso específico.

### 3.3.5 Coincidencia de patrones

JS tiene datos conocidos como expresión regular , que describen y hacen coincidir cadenas de texto.

> Estas se ven a detalle en el capitulo 11.3

## 3.4 Valores booleanos

Solo tiene 2 valores , verdadero o falso .

Suelen aparecer en las comparaciones de programas JS

##### Ejemplo:

```javascript
a === 4;
```

Este tipo de valores generalmente se usan en declaraciones de `if/else` , ejemplo:

```javascript
if (a === 4) {
  // Extra
} else {
  // Extra
}
```

Cualquier valor de JS se puede convertir en un valor booleano.

Los siguientes valores son establecidos como "falsos"

```javascript
undefined;
null;
0 - 0;
NaN;
(""); // una cadena vacía
```

Y de ahi todos los demás valores se convierten en verdaderos.

Se pueden usar los operadores `&&`(and) y `||`(or) para evaluar diferentes situaciones o casos.

##### Ejemplo:

```javascript
if ((x === 0 && y === 0) || z === 0) {
  // Verdadero si x & y son iguales , o verdadero si z es igual a 0
}
```

## 3.5 null y undefined

- **null**: Es un valor especial que se usa para indicar la ausencia de algún valor
- **undefined**: Es el valor que se tiene de un objeto o elemento de matriz que no existe , también es el retorno de las funciones cuando no se pasa ningún argumento

Ambos son valores falsos que se comportan como tal , se recomienda evitar el uso de estos.

## 3.6 Símbolos

Se introdujeron para que sirvieran como nombres de propiedades que no fueran cadenas, los símbolos pueden cumplir los siguientes propósitos:

```javascript
let strname = "string name"; //Una cadena para usarse como nombre
let symname = Symbol("propname"); // Un símbolo para usarse como propiedad de nombre
typeof strname; // Esta es una cadena
typeof symname; // Este es un símbolo
let o = {}; // Crea un nuevo objeto
o[strname] = 1; // Define la propiedad con un nombre string
o[symname] = 2; // Define la propiedad con un símbolo
o[strname]; // Acceso a la propiedad nombrada con string
o[symname]; // Acceso a la propiedad nombrada con símbolo
```

Al no tener una sintaxis literal , se llama a la función `Symbol()`, y nunca devuelve el mismo valor 2 veces, se puede usar para agregar nombre a una propiedad sin preocuparse que haya alguna repetición en ello.

La función `Symbol()` toma un argumento opcional de cadena y devuelve un valor único.

`.for()` como exención a `Symbol` sirve como:

```javascript
let s = Symbol.for("compartir"); //.for devuelve el mismo valor cuando se llama a la misma cadena
let t = Symbol.for("compartir");
s === t; // => verdadero
```

## 3.7 El objeto global

Estos son objetos que se definen globalmente ,disponible para todo el archivo/programa de JS , cuando se carga una pagina web crea un objeto global y le da un conjunto inicial de propiedades que definen:

- **NaN,infinity,undefined**:Constantes
- **isNaN,parseInt(),eval()**:Funciones
- **Date(),RegExp(),String(),Object(),Array()**: Funciones constructoras
- **Math, JSON**: Objetos globales

Con `globalThis` se vuelve la forma estándar para hacer referencia al objeto global en cualquier contexto.

## 3.8 Valores primitivos inmutables y referencias a objetos mutables

Existe una diferencia entre objetos de JS:

- **primitivos(inmutables)**:Es decir que no existe manera alguna de cambiar, en el caso de usarse , solo se altera el valor cuando se devuelve creando un nuevo valor , ejemplo:

```javascript
let s = "hello"; // Texto base
s.toUpperCase(); // Regresa el texto con la modificación sin alterar el contenido de la variable
```

Dentro de este tipo , solo se pueden comparar por valor , es decir , dos valores son iguales solo si tienen el mismo valor.

- **objetos(mutables)**:Es decir que se puede alterar su contenido, ejemplo:

```javascript
let o = { x: 1 }; // Objeto inicial
o.x = 2; // Muta si el valor se cambia
o.y = 3; // Muta si se añade algún valor
```

Los objetos no se comparan por valor,inclusive si tienen las mismas propiedades, estos se comparan por medio de referencias.

##### Ejemplo:

```javascript
let a = []; // La variable hace referencia a un arreglo vacío
let b = a; // b se referencia al arreglo vacío
b[0] = 1; // cambiamos el array desde la variable b
a[0]; // El cambio se puede apreciar en a
a === b; // Los dos son iguales
```

## 3.9 Conversiones de tipo

El lenguaje de JS es flexible en el ámbito de la conversión de valores , en el caso de que se requiera un numero , este intentara convertir el valor que se tiene a un tipo numérico.

##### Ejemplos:

```javascript
10 + " objects"; // El "10" se convierte a cadena
"7" * "4"; // Ambos se convierten a números
```

### 3.9.1 Conversiones y igualdad

JS tiene 2 operadores para comprobar si dos valores son iguales:

- **===**: Operador de igualdad estricta , este no considera que sean iguales si no son del mismo tipo.
- **==**: Este operador es mas flexible y mas permisivo, ejemplos:

```javascript
null == undefined; // verdadero Estos dos valores se tratan como iguales
"0" == 0; // verdadero , la cadena se convierte a numero antes de comparar
0 == false; // verdadero , el booleano se convierte a numero antes de comparar
"0" == false; // verdadero , ambos se convierten a numero antes de comparar
```

### 3.9.2 Convecciones explicitas

Estas se usa en casos donde se necesiten hacer este tipo de conversiones o cuando se quiera hacerlo para tener un código mas limpio , la forma mas sencilla de hacerlo es usando funciones como:

```javascript
Number("3"); // 3, lo convierte a numero
String(false); // "false", lo convierte a cadena
Boolean([]); // verdadero , lo convierte a valor booleano
```

Estos también se pueden invocar con `new` como constructor , en el caso de ser asi, este objeto sera como un "envoltorio" que se comporta como un valor "*booleano*" , de "*cadena*" o "*numérico*" ,y según el libro nunca hay una buena razón para usarlos.

Algunos operadores se convierten implícitamente ,usándose explícitamente , con el propósito de convertir el tipo.

El método `toString()` acepta un argumento de tipo numérico que especifica el radio o la base de conversion.

##### Ejemplo:

```javascript
let n = 17; //Numero base
let binary = "0b" + n.toString(2); //Conversión binaria == "0b10001"
let octal = "0o" + n.toString(8); //Conversión octal == "0o21"
let hex = "0x" + n.toString(16); //Conversión hex == "0x11"
```

Si se desea controlar ciertos aspectos de los números como la cantidad de decimales o la cantidad de dígitos en la salida, para esos casos , la clase "*Number*" define 3 métodos para conversiones de números a cadenas:

*   **toFixed()**: Convierte un número en una cadena con una cantidad especifica de dígitos después del punto decimal.
*   **toExponential()**: Convierte un número en una cadena usando notación exponencial ,con un dígito antes del punto decimal , y una cantidad especifica de números después 
*   **toPrecision()**: Convierte un número en una cadena con la cantidad de dígitos significativos que se especifique 

Estos 3 métodos redondean los dígitos finales.

#####   EJEMPLO:
```javascript
    let n = 123456.789;
    n.toFixed(0) // => "123457"
    n.toFixed(2) // => "123456.79"
    n.toExponential(1) // => "1.2e+5"
    n.toExponential(3) // => "1.235e+5"
    n.toPrecision(7) // => "123456.8"
    n.toPrecision(10) // => "123456.7890"
```

La función `Number()` solo funciona para números enteros de base 10 y no permite caracteres finales.

#####   Funciones globales:

*   **parseInt()**:Solo analiza números enteros
*   **parseFloat()**:Analiza números enteros y de punto flotante

Ambas funciones omiten espacios en blanco, además que intentan obtener todos los números posibles de la cadena de texto.

```javascript
    parseInt("3 papas") // => 3
    parseFloat(" 3.14 metros") // => 3.14
    parseInt("-12.34") // => -12
    parseInt("0xff") // => 255
    parseInt("-0XFF") // => -255
    parseFloat(".1") // => 0.1
    parseInt("0.1") // => 0
    parseInt(".1") // NaN
```

### 3.9.3   Objeto a las conversiones primitivas
Al transformar objetos a primitivos en JS es que cada objeto suele tener diversas representaciones primitivas, un caso podría ser la fecha , ya que se puede tomar como de tipo cadena y/o tipo numérico.

JS define 3 algoritmos fundamentales para convertir objetos a valores primitivos:

*   **prefer-string**:Este devuelve un valor primitivo , tomando el valor de tipo cadena.
*   **prefer-number**:Este devuelve un valor primitivo , tomando el valor como tipo numérico 
*   **no-preference**:No tiene preferencia alguna sobre el tipo de valor se desea.

####    CONVERSIONES DE OBJETO A BOOLEANOS
Este tipo de conversiones hace que todos los objetos se conviertan a verdadero(true) , no requiere el uso de algoritmos.

####    CONVERSIONES DE OPERADORES DE CASOS ESPECIALES
Algunos de estos no usan conversiones básicas de objeto a cadena y de objeto a número. 

*   **+**:Realiza sumas numéricas y concatenaciones de caracteres , dependiendo el caso , los convierte a tipo cadena o a tipo numérico.

*   **==** y **!=**: Realizan pruebas de igualdad de manera flexible y convirtiendo los objetos a primitivo.

*   **<, <=, >** y **>=**: Comparan el orden de sus operandos y pueden utilizarse tanto con números como con cadenas. Si alguno de los operandos es un objeto, se convierte primero a un valor primitivo utilizando el algoritmo prefer-number.

####    LOS MÉTODOS TOSTRING() Y VALUEOF()

*   **toString()**: Devuelve una representación de una cadena de algún objeto.

#####   Ejemplo:
```javascript
    ({x: 1, y: 2}).toString()    
```
Aquí lo que hace es convertir cada elemento de la matriz en una cadena.

Dentro de la clase Date, cuando se define el método ´toString()´ devuelve una cadena de fecha y hora.

*   **valueOf()**:Su propósito es convertir un objeto en un valor primitivo que lo represente.

La mayoría de los objetos no pueden representarse adecuadamente con un solo valor primitivo, asi que este método devuelve el objeto como tal. 

#####   Ejemplo:
```javascript
    let d = new Date(2010, 0, 1); // Enero 1, 2010, (Hora del Pacifico)
    d.valueOf() // 1262332800000
```
Este lo que hace es retornar los milisegundos que han transcurrido desde esa fecha

####    ALGORITMOS DE CONVERSIÓN OBJETO A PRIMITIVO
Como funcionan los 3 métodos de conversión de objeto a primitivo:

*   **prefer-string**:Se prioriza el uso de `toString()`, Si este existe y devuelve un valor primitivo se usa ese valor,en el caso de que no devuelva algún valor se prueba con `valueOf()`, si este existe y devuelve un valor primitivo, ese es el valor utilizado , en el caso de que ninguno de los dos retorne algún valor , fallara con un "*TypeError*"
*   **prefer-number**:Este trabaja similar a `prefer-string` solamente que en este se usa primero `valueOf()` y después `toString()`.
*   **no-preference**:Este depende del objeto que se va a convertir , por ejemplo si es fecha , devolverá un valor de cadena de texto , en cualquier otro objeto será tipo numérico.

## 3.10 Declaración de variables y asignación 
Lo más relevante es el uso de identificadores para representar valores, facilitando su uso en el programa.

El termino variable implica que se pueden asignar valores nuevos, los cuales pueden varear a medida que se ejecuta el programa.

### 3.10.1  Declaraciones con let y const 
#####   Ejemplo de declaración:
**LET**
```javascript
    let a;
    let b,c;
```
Siempre que sea posible es recomendable asignarle un valor a cada variable cuando se declaren.

```javascript
    let a=0;
    let b="0";
```

En el caso de no asignarle valor al declararse , no estará definida hasta que el código de asigne un valor.

**CONST**
Para declarar una constante se usa `const` ,funciona igual que let , solo que esta debe de definir su valor al declararse.

```javascript
    const a = "Hola";
    const b = 0;
```

Sus valores no se pueden cambiar , si se intentara hacerlo arrojaría un "*TypeError*"

#####   Cuando usar const
Se recomienda solo usar `const` para valores que son inmutables , es decir solo usar `const` para valores que no cambiarán.

####    ALCANCE VARIABLE Y CONSTANTE
El alcance de una variable es la parte del código donde dicha variable se encuentra disponible,variables como `let` y `const` tienen un "*alcance de bloque*", lo que significa que solo existen dentro del bloque de código delimitado por llaves `{}` donde fueron declaradas, no se pueden usar antes de ser declaradas.

Una variable declarada fuera de cualquier bloque es **global**.,en Node.js o en módulos JS, su alcance es el archivo, en JS del navegador, es accesible en todo el documento HTML y por cualquier `<script>` posterior.

####    Declaraciones repetidas

No es recomendable tener nombres de variables repetidos a lo largo de programa , es mejor evitarlo.

#####   Ejemplo de caso:
```javascript
    const x = 1;
    if (x === 1) {
        let x = 2; 
        console.log(x); 
    }
    console.log(x); 
    let x = 3; 
```

####    Declaración y tipos
JS no se requiere indicar el tipo de variable que va a ser al momento de declararla , además permite que a una misma variable se le asigne de primera un valor numérico y después un valor de cadena de texto.

```javascript
    let i = 10;
    i = "diez";
```

### 3.10.2 Declaración de variables con var

**var**

Su sintaxis es igual a la de let, y originalmente antes de ES6 solo se podían declarar variables con esta.

#####   Ejemplo:
```javascript
    var x;
```

Este tipo de variable se limita al cuerpo de la función donde se encuentran.

Estas al declararse globalmente se implementan como propiedades de algún objeto global.

#####   Ejemplo:
```javascript
    var y = 2; //Esto se trataría como un globalThis.y = 2;
    function ejemplo () {
        var x = 1; 
    }
```

Con `var` esta "bien visto" declarar las variables con el mismo nombre ya que su alcance es de función.

#####   Ejemplo:
```javascript
    function ejemplo () {
        for (var i=0;i==5;i++){
            console.log("si");
        }
        for (var i=0;i==5;i++){
            console.log("no");
        }
    }
```

Las variables declaradas con `var` se pueden usar en cualquier parte de la función incluso antes de donde existe su declaración escrita debido a que es una variable de "*hosting*"

#####   Ejemplo:
```javascript
    function ejemplo () {
        console.log(variable);
        var variable = "Hola , Mundo!!";
    }
```

### 3.10.3 Tarea de desestructuración

ES6 introduce una forma de declaración y asignación llamada "*asignación por desestructuración*". En ella, el valor del lado derecho es un "*objeto o arreglo*", y el lado izquierdo especifica variables usando una sintaxis similar a los literales ,esto extrae valores del lado derecho y los asigna a las variables del lado izquierdo

#####   Ejemplo:
```javascript
    let [x,y]= [1,2];
```

No necesariamente deben de coincidir la cantidad que hay del lado izquierdo con las del lado derecho y viceversa ,las variables de la izquierda , si no tienen valor se configuran como indefinidas y los valores de la derecha simplemente se ignoran.

#####   Ejemplo:
```javascript
    let [x,y] = [1]; // x == 1; y == indefinida
    [x,y] = [1,2,3]; // x == 1; y == 2 , el tercer valor se ignora
    [,x,,y] = [1,2,3,4]; // x == 2; y == 4 , según posiciones se ignoran los valores
```

JS permite  recopilar los valores restantes en una variable con agregar (...) tres puntos antes del ultimo nombre de la variable en su lado izquierdo.

#####   Ejemplo:

```javascript
    let [x, ...y] = [1,2,3,4]; // y == [2,3,4
```

La asignación por desestructuración permite extraer valores incluso de estructuras anidadas como arreglos dentro de arreglos.

Además permite extraer propiedades en variables individuales si el nombre de la variable coincide con el nombre de la propiedad, la sintaxis es simple,Sin embargo, si se quieren usar nombres diferentes, se puede usar la forma `propiedad: variable`, sin embargo esto vuelve la sintaxis más compleja.
