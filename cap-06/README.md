#   Objetos
Los objetos son fundamentales en JS.

##  6.1 Introducción a objetos

Este es un valor compuesto el cual te permite almacenar valores por nombre, en otras palabras es una colección desordenada por nombres.

Generalmente los nombres de las propiedades son cadenas , aunque en algunos casos son símbolos , como tal se le asigna una cadena de texto a algún valor , otras maneras de nombrarlo son "**hash**" , "**hash table**" , "**dictionary**" , "**associative array**".

Incluso puede heredar las propiedades de otro objeto, estos son dinámicos con la posibilidad de añadir y eliminar propiedades , además de poder simular objetos estáticos 
y
*   eliminarlos
*   probarlos
*   enumerar sus propiedades

El nombre de la propiedad puede ser cualquier cadena (incluyendo símbolos), pero no se puede tener propiedades con el mismo nombre.

Es de suma importancia distinguir entre propiedades definidas directamente en un objeto y heredadas de otro objeto.

Cada propiedad tiene 3 atributos:
*   **writable**:Especifica si se puede configurar el valor de la propiedad.
*   **enumerable**:Especifica si un bucle `for/in` devuelve el nombre de la propiedad.
*   **configurable**:Especifica si la propiedad se puede eliminar y sus atributos modificar.

##  6.2 Creando objetos

Los objetos se pueden crear con literales de objeto , con la palabra `new` y con la función `Object.create()`.

### 6.2.1 Literales de objeto

La forma mas sencilla de crear un objeto es incluir una literal , y esta es una lista de pares `name:value` separados por comas y dos puntos , encerrados entre llaves `{}`.

#####   Ejemplos:
```javascript
    let point = { x: 0, y: 0 }; 
    let p2 = { x: point.x, y: point.y+1 }; 
    let book = {
        "main title": "JavaScript",
        "sub-title": "The Definitive Guide", 
        for: "all audiences", 
        author: { 
        firstname: "David", 
        surname: "Flanagan"
        }
    };
```

El valor de la propiedad puede ser cualquier expresión de JS

El literal de objeto es una expresión que crea e inicializa un objeto nuevo y distinto cada vez que es evaluado,uno solo de estos puede crear muchos objetos nuevos.

### Creando objetos con "new"

Este operador crea e inicializa un nuevo objeto , después de la palabra new , debe ir un una función de invocación , denominada "*constructor*" , algunos constructores predefinidos son:

```javascript
    new Object();   //Crea un objeto, igual a {}
    new Array();    //Crea un arreglo, igual a []
    new Date();     //Crea un objeto de fecha , con la fecha en curso
    new Map();      //Crear un objeto de mapa para la asignación de clave/valor
```

### 6.2.3   Prototipos 
Estos son segundos objetos asociados de JS 

Cada objeto creado por literales de algún objeto tiene el mismo objeto prototipo , y se puede referir a este como `Objeto.prototype`.

>   Objetos creados con la palabra new usan el valor del prototipo

Para referirse a cualquier prototipo de objetos "*Array*,*Date*,*Object*"  se usa `(type).prototype` .

`Object.prototype` no tiene prototipo como tal , no hereda ninguna propiedad , en general la mayoría de los constructores tienen un prototipo que hereda de `Objecto.prototype` , a esta serie de propiedades heredadas se les conoce como , cadenas de prototipos.

### 6.2.4 Object.create()
Este crea un objeto usando su primer argumento como prototipo de ese objeto:

#####   Ejemplo:
```javascript
    let ob1 = Object.create({x: 1 , y: 2}); // ob1 hereda las propiedades de x & y
```

>   Se les puede pasar "null" para crear algún sin prototipo , el objeto no heredara nada.

Para crear un objeto vació se puede realizar de la siguiente manera:

#####   Ejemplo:
```javascript
    let o3 = Object.create(Object.prototype); // El valor de o3 es como "{}" o "new Object()"
```

`Object.create()` se usa cuando se desea proteger contra modificaciones no intencionadas, lo que hace es pasar por un objeto que tenga algún valor heredado , asi sin afectar al valor original.

#####   Ejemplo:
```javascript
    let o = {
        "No cambies"
    }
    library.function(Object.create(o));
```

##  6.3 Consulta y configuración de propiedades
Para obtener el valor de alguna propiedad se usa el punto (.) o corchetes ([]) , a su lado izquierdo debe ser una expresión cuyo valor sea un objeto, si se usa el punto el lado derecho debe ser un identificador simple que nombre la propiedad , si se usan corchetes , el valor que debe ir dentro de ellos debe ser una expresión que evalué la cadena que contenga el nombre de la propiedad.

#####   Ejemplo:
```javascript
    let author = book.author; // Obtiene la propiedad de "author"
    let name = author.surname; // Obtiene el "surname" de autor
    let title = book["main title"]; // Obtiene el "main title" de la propiedad del libro
```

Para establecer o crear propiedades se coloca el objeto del lado izquierdo y se usa ya sea punto o corchetes como lo haría para consultar la propiedad.

#####   Ejemplo:
```javascript
    book.edition = 7; // Crea la edición
    book["main title"] = "ECMAScript";  //Cambia la propiedad "main title"
```

### 6.3.1 Objetos como matrices asociativas
Estas 2 sintaxis tienen el mismo valor:

```javascript
    object.property
    object["property"] //Este tipo de array se conoce como array asociativo
```

En lenguajes como "C++,C , Java"  un objeto solo puede tener un cierto número fijo de propiedades y deben definirse los nombres previamente , los nombres de las propiedades se expresan como un identificador y estos deben escribirse literalmente en el programa de JS , estos no son un tipo de datos , por lo que el programa no debe manipularlos.

Al acceder a una propiedad de un objeto con la notación de "*matriz[]*" , el nombre de la propiedad se expresa con una cadena , estas son tipos de datos los cuales se pueden manipular y crear a lo largo de la ejecución de un programa.

#####   Ejemplo:
```javascript
    let add = "";
    for (let = 0; i < 4; i++) {  
        add += customer[`address${i}`] + "\n";
    }
```

### 6.3.2 Herencia

Js tiene un conjunto de propiedades "propias" ,ademas que heredan propiedades de su objeto prototipo.

Cuando se accede a una propiedad se busca la propiedad dentro de la lista de propiedades que tiene el objeto y asi sucesivamente dentro de cada objeto hasta llegar al final de la lista llegando a un `null` 

Cuando se asigna un valor a una propiedad JS primero verifica si se tiene la propiedad ,si existe, simplemente se actualiza su valor. Si no, se crea una nueva propiedad.

En modo estricto ,el proceso de asignación examina la cadena de prototipos solo para validar permisos , no para modificar objetos superiores en ese caso fallará o solo se ignorara.

En JS la herencia solo opera al leer propiedades.

#####   Ejemplo:
```javascript
    const prototipo = { x: 5 };  
    const obj = Object.create(prototipo);  
    obj.x = 10; // Crea una propiedad propia en `obj`  
    console.log(obj.x); // 10 (propiedad de `obj`)  
    console.log(prototipo.x); // 5 (sin cambios)  
```

### 6.3.3 Errores de acceso a la propiedad

En JavaScript, **las expresiones de acceso a propiedades no siempre devuelven un valor ni permiten asignar uno**. Aquí se explican los casos en los que pueden surgir problemas al consultar o modificar una propiedad.  

Cuando **se consulta una propiedad que no existe**, JavaScript no genera un error. Si la propiedad `x` no está en el objeto `o` ni en su cadena de prototipos, la expresión `o.x` devuelve `undefined`. Por ejemplo:  

```javascript  
    const libro = { titulo: "JS Básico" };  
    libro.subtitulo; // => undefined (la propiedad no existe)  
```  
Sin embargo, **intentar acceder a una propiedad de `null` o `undefined` sí lanza un `TypeError`**. Estos valores no tienen propiedades, por lo que expresiones como `libro.autor.nombre` fallarán si `libro.autor` es `null` o `undefined`. Para evitarlo, existen técnicas de protección:  

1. **Uso explícito de condiciones**: 

```javascript  
   let nombre = undefined;  
   if (libro) {  
     if (libro.autor) {  
       nombre = libro.autor.nombre;  
     }  
   }  
```

2. **Operador lógico `&&` (cortocircuito)**:  

```javascript  
   let nombre = libro && libro.autor && libro.autor.nombre;  
```  

3. **Encadenamiento opcional `?.` (ES2020)**:  

```javascript  
   let nombre = libro?.autor?.nombre; // Devuelve undefined si alguna propiedad es null/undefined  
```  

Al **asignar una propiedad**, JavaScript verifica primero si el objeto la tiene como propia. Si existe, se actualiza su valor. Si no, se crea una nueva propiedad en el objeto. Sin embargo, **la asignación puede fallar en estos casos**:  

- **Propiedad de solo lectura**: Si `o` tiene una propiedad `p` con el atributo `writable: false`, no se puede modificar.  

- **Propiedad heredada de solo lectura**: No se puede crear una propiedad propia `p` en `o` si el prototipo tiene una propiedad `p` con `writable: false`.  

- **Objeto no extensible**: Si `o` no permite añadir nuevas propiedades (usando `Object.preventExtensions()`) y no tiene `p`, ni existe un setter para `p` en la cadena de prototipos, la asignación falla.  

En **modo estricto**, estos fallos lanzan un `TypeError`. Fuera del modo estricto, la asignación se ignora silenciosamente.  

Ejemplo:  
```javascript  
    const prototipo = Object.defineProperty({}, "x", {  
    value: 5,  
    writable: false  
    });  
    const obj = Object.create(prototipo);  

    obj.x = 10; // TypeError en modo estricto (no puede sobrescribir la propiedad heredada de solo lectura)  
```  

Esta lógica refleja un principio clave de JavaScript: **la herencia solo afecta a la lectura de propiedades**, mientras que las asignaciones siempre operan en el objeto original, garantizando que los prototipos no se modifiquen accidentalmente.

##  6.4 Eliminando propiedades

El operador `delete` en JavaScript se usa para **eliminar propiedades de un objeto**. Su único operando debe ser una **expresión de acceso a propiedad**. 

#####   Importante:  
- **Solo elimina propiedades propias**: Para borrar una propiedad heredada, debes eliminarla directamente del prototipo donde está definida.  
- **No opera sobre el valor de la propiedad**.

Ejemplo básico:  
```javascript  
    const book = { author: "JS", "main title": "Guía" };  
    delete book.author; // Elimina la propiedad "author"  
    delete book["main title"]; // Elimina "main title"  
```  

##### Comportamiento y valores de retorno:  
- **Devuelve `true`** si la eliminación tiene éxito o si la propiedad no existía (ej. `delete obj.x` cuando `x` no está definido).  
- **Devuelve `false`** si la propiedad es **no configurable** (atributo `configurable: false`), como ciertas propiedades integradas de objetos globales (`Object.prototype`) o variables declaradas con `var`/`function`.  
- En **modo estricto**, intentar eliminar una propiedad no configurable lanza un `TypeError`. En modo no estricto, devuelve `false`.  

#####   Ejemplos de fallos:  
```javascript  
    delete Object.prototype; // => false (no configurable)  
    var x = 1;  
    delete x; // => false (variable declarada con var)  
    function f() {}  
    delete f; // => false (función global declarada)  
```  

##### Eliminar propiedades globales:  
- En **modo no estricto**, puedes omitir el objeto global (`globalThis`) al eliminar propiedades **configurables** creadas sin `var`/`let`:  
```javascript  
  globalThis.y = 20;  
  delete y; // => true (elimina la propiedad global)  
```  
- En **modo estricto**, usar `delete y` con un identificador sin calificar lanza un `SyntaxError`. Debes usar explícitamente `globalThis`:  
```javascript  
  "use strict";  
  delete globalThis.y; // => true (correcto)  
```  

##### Características:  
El operador `delete` **no modifica valores heredados** ni propiedades protegidas. Su uso requiere cuidado:  
1. **Solo afecta al objeto original**, no a la cadena de prototipos.  
2. **Valida configurabilidad** antes de eliminar, evitando cambios accidentales en objetos críticos.  
3. **En modo estricto**, fuerza una sintaxis explícita para evitar errores silenciosos.  

#####   Ejemplo:  
```javascript  
const obj = { x: 10 };  
delete obj.x; // => true (eliminado)  
delete obj.x; // => true (ya no existe, pero sin error)  
```  
Este comportamiento permite gestionar las propiedades de los objetos, pero exige validaciones previas para evitar efectos colaterales no deseados.

##  6.5 Probando propiedades

**Resumen:**  
En JavaScript, los objetos se pueden considerar conjuntos de **propiedades**, y es común necesitar verificar si un objeto contiene una propiedad específica. Para esto, existen varias herramientas:  

##### 1. **Operador `in`:**  
Verifica si el objeto tiene una propiedad **propia o heredada**.  

#####   Ejemplo:  

```javascript  
    const o = { x: 1 };  
    "x" in o; // true (propiedad propia)  
    "toString" in o; // true (propiedad heredada)  
```  

##### 2. **Método `hasOwnProperty()`:**  
Comprueba si la propiedad existe **directamente en el objeto** (no heredada).  

#####   Ejemplo:  

```javascript  
    const o = { x: 1 };  
    o.hasOwnProperty("x"); // true (propiedad propia)  
    o.hasOwnProperty("toString"); // false (heredada)  
```  

### 3. **Método `propertyIsEnumerable()`:**  
Refina `hasOwnProperty()` al verificar que la propiedad **existe directamente en el objeto y es enumerable**.  
Las propiedades no enumerables (como algunas integradas de JavaScript) devuelven `false`.  
#####   Ejemplo:  
```javascript  
    const o = { x: 1 };  
    o.propertyIsEnumerable("x"); // true (propiedad propia y enumerable)  
    Object.prototype.propertyIsEnumerable("toString"); // false (no enumerable)  
```  

##### 4. **Verificación con `!== undefined`:**  
   - Comprueba si la propiedad tiene un valor definido (propia o heredada).  
   - **No distingue** entre propiedades inexistentes y propiedades con valor `undefined`.  
   - Ejemplo:  
     ```javascript  
     const o = { x: undefined };  
     o.x !== undefined; // false (propiedad existe pero es undefined)  
     o.y !== undefined; // false (propiedad no existe)  
     ```  

##### Comparación:  
- **`in` vs. `!== undefined`:**  
  - `in` detecta propiedades inexistentes vs. existentes con valor `undefined`.  
  - Ejemplo:  
    ```javascript  
    const o = { x: undefined };  
    "x" in o; // true (existe, pero es undefined)  
    "y" in o; // false (no existe)  
    ```  

##### Consideraciones prácticas:  
- **Propiedades simbólicas (`Symbol`):**  
  - Todos los métodos funcionan con propiedades cuyas claves son `Symbol` (no solo cadenas).  
- **Propiedades no enumerables:**  
  - `propertyIsEnumerable()` ignora propiedades marcadas como no enumerables (ej. creadas con `Object.defineProperty`).  
- **Objetos globales:**  
  - Propiedades del objeto global (`globalThis`) creadas con `var` o `function` no son eliminables y pueden afectar resultados de verificación.  

### Ejemplo:  
```javascript  
    const obj = { x: 10 };  
    "x" in obj; // true (propiedad propia)  
    "y" in obj; // false (no existe)  
    obj.hasOwnProperty("x"); // true  
    obj.propertyIsEnumerable("x"); // true  
    obj.x !== undefined; // true  
    delete obj.x;  
    "x" in obj; // false (eliminado)  
```  

### Característica:  
JavaScript ofrece múltiples formas de validar la existencia de propiedades, cada una con un propósito específico:  
- **`in`:** Para verificar acceso a cualquier propiedad (propia o heredada).  
- **`hasOwnProperty`:** Para confirmar propiedad directa.  
- **`propertyIsEnumerable`:** Para validar propiedad directa y enumerabilidad.  
- **`!== undefined`:** Para comprobar valores definidos, sin distinguir existencia.  


##  6.6 Enumerando propiedades

En JavaScript, para iterar o listar propiedades de un objeto:  

##### 1. **`for/in`**:  
*   Itera **propiedades enumerables** (propias y heredadas).  
*   Usa `hasOwnProperty()` para excluir heredadas.  

##### 2. **Métodos clave**:  
*   **`Object.keys(obj)`**: Propiedades propias y **enumerables** (solo strings).  
*   **`Object.getOwnPropertyNames(obj)`**: Propiedades propias (strings, incluye no enumerables).  
*   **`Object.getOwnPropertySymbols(obj)`**: Propiedades propias con claves **Symbol**.  
*   **`Reflect.ownKeys(obj)`**: Todas las propiedades propias (strings y Symbols, enumerables y no).  


##### Ejemplo:  
```javascript  
const obj = { x: 1 };  
Object.defineProperty(obj, "y", { value: 2, enumerable: false });  
obj[Symbol("z")] = 3;  

Object.keys(obj); // ["x"]  
Reflect.ownKeys(obj); // ["x", "y", Symbol(z)]  
```  

##### Uso rápido:  
*   **`for/of` + `Object.keys(obj)`**: Para iterar propiedades propias y enumerables.  
*   **`Reflect.ownKeys()`**: Para acceder a todas las propiedades sin excepciones.

### 6.6.1   Orden de enumeración de propiedades

##### Orden de enumeración:  

1. **Propiedades con claves numéricas (números enteros no negativos)**:  
*   Se listan primero, **en orden numérico ascendente**.  
*    Afecta a arrays y objetos similares (ej. `{ 2: "a", 1: "b" }` → se enumeran como `1, 2`).  

2. **Propiedades restantes con claves de tipo *string***:  
*   Incluye claves que no son índices válidos (ej. `"nombre"`, `"-1"`, `"3.14"`).  
*   Se enumeran en el **orden de inserción**:  
    *   En literales de objeto, sigue el orden de declaración (`{ a: 1, b: 2 }` → `a, b`).  
    *   En objetos modificados , sigue el orden en que se agregaron.  

3. **Propiedades con claves *Symbol***:  
   * Se enumeran al final, **en el orden de inserción**.  

##### Comportamiento del bucle `for/in`: 

- No está tan estrictamente definido como los métodos anteriores.  
- Generalmente sigue el mismo orden para propiedades propias, pero **recorre la cadena de prototipos** después.  
- **No repite propiedades duplicadas**: Si una propiedad con el mismo nombre ya fue enumerada (incluso si es no enumerable), se omite en prototipos.  

##### Ejemplo:  
```javascript  
    const obj = {  
    1: "uno",  
    cero: 0,  
    2: "dos",  
    [Symbol("s")]: "símbolo"  
    };  

    Reflect.ownKeys(obj); // ["1", "2", "cero", Symbol(s)]  
    Object.keys(obj); // ["1", "2", "cero"] (solo claves string, ordenadas)  
```  

##  6.7  Extendiendo objetos

En JavaScript, copiar propiedades entre objetos es una tarea común. ES6 introdujo `Object.assign()` para simplificar este proceso:  

##### 1. **`Object.assign(target, ...sources)`**:  
*Copia **propiedades propias y enumerables** (incluidas las con claves `Symbol`) de los objetos `sources` al `target`.  
*Las propiedades de los `sources` **sobreescriben** las del `target` si comparten el mismo nombre.  

#####   Ejemplo:  
```javascript  
    const target = {x: 1};  
    const source = {y: 2, z: 3};  
    Object.assign(target, source); // target => {x: 1, y: 2, z: 3}  
```  

##### 2. **Uso para valores por defecto**:  
Si se quiere **completar un objeto con valores predeterminados** (sin sobreescribir propiedades existentes):  
*   **Solución incorrecta**: `Object.assign(o, defaults)` (sobreescribe todo).  
*   **Solución correcta**:  
```javascript  
    o = Object.assign({}, defaults, o); // Primero aplica defaults, luego o  
```  

*   Alternativa con **spread operator** (ES2018):  

```javascript  
    o = {...defaults, ...o};  
```  

##### 3. **Función personalizada `merge()`**:  
*   Copia solo propiedades que **no existen en el objetivo**:  
```javascript  
    function merge(target, ...sources) {  
        for (let source of sources) {  
            for (let key of Object.keys(source)) {  
                if (!(key in target)) target[key] = source[key];  
            }  
        }  
        return target;  
    }  
```  
#####   Ejemplo:  
```javascript  
    merge({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}); // => {x: 1, y: 2, z: 4}  
```  

##### 4. **Otras utilidades**:  
*   **`restrict(obj, template)`**: Elimina propiedades de `obj` que no están en `template`.  
*   **`subtract(obj1, obj2)`**: Remueve de `obj1` las propiedades presentes en `obj2`.  

##### Característica clave:  
*   **`Object.assign()` sobreescribe**, mientras que `merge()` **completa** propiedades faltantes.  
*   **Manejo de getters/setters**: `Object.assign()` invoca getters durante la copia, pero no copia los métodos en sí.  
*   **Orden de procesamiento**: Las fuentes se procesan en orden, por lo que las últimas tienen prioridad.  

##### Ejemplo:  
```javascript  
    Object.assign({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}); // => {x: 2, y: 3, z: 4}  
    merge({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}); // => {x: 1, y: 2, z: 4}  
```  
Estas herramientas permiten combinar objetos de forma flexible, ya sea para inicialización, actualización o filtrado de propiedades.

##  6.8 Serialización de objetos

La **serialización de objetos** en JavaScript convierte el estado de un objeto en una cadena de texto para restaurarlo posteriormente. Esto se logra con `JSON.stringify()` (para serializar) y `JSON.parse()` (para restaurar).  

##### 1. **Funcionamiento básico:**  

*   `JSON.stringify(obj)`: Convierte un objeto a una cadena en formato JSON.  
*   `JSON.parse(str)`: Restaura el objeto desde una cadena JSON. 

#####   Ejemplo:  

```javascript  
    const obj = {x: 1, y: {z: [false, null, ""]}};  
    const str = JSON.stringify(obj); // '{"x":1,"y":{"z":[false,null,""]}}'  
    const restored = JSON.parse(str); // {x: 1, y: {z: [false, null, ""]}}  
```  

##### 2. **Valores compatibles:** 

*   **Soportados:** Objetos, arrays, strings, números finitos (`NaN`, `Infinity` se convierten a `null`), `true`, `false`, `null`.  
*   **No soportados:** Funciones, expresiones regulares (`RegExp`), objetos `Error`, `undefined`. Estos se omiten o devuelven `undefined` al restaurar.  

##### 3. **Casos especiales:**  

*   **Fechas (`Date`):** Se serializan como cadenas ISO (ej. `"2023-10-01T12:00:00.000Z"`), pero `JSON.parse()` no las convierte de vuelta a objetos `Date`.  
*   **Propiedades no enumerables o heredadas:** `JSON.stringify()` las ignora.  
*   **Propiedades con valores no serializables:** Se omiten silenciosamente.  

##### 4. **Personalización:** 

   Ambas funciones aceptan un segundo argumento opcional para ajustar el proceso:  
*   **`JSON.stringify(obj, replacer, space)`:**  
    *   `replacer`: Filtra o transforma propiedades antes de serializar. 

#####   Ejemplo:  

```javascript  
    JSON.stringify({a: 1, b: 2}, (key, value) => key === "b" ? undefined : value);  
    // => {"a":1} (omite la propiedad "b")  
```

*   **`JSON.parse(str, reviver)`:**  
    *   `reviver`: Transforma valores al restaurar.  

#####   Ejemplo:  

```javascript  
    JSON.parse('{"fecha":"2023-10-01"}', (key, value) =>  
        key === "fecha" ? new Date(value) : value  
    ); // {fecha: Date("2023-10-01")}  
```  

##### 5. **Limitaciones clave:**  
*   **Unidireccionalidad:** No todos los objetos se restauran igual (ej. `Date` se convierte en string).  
*   **Perdida de funcionalidad:** Métodos, `RegExp`, `Error` y `undefined` no se serializan.  
*   **Orden de propiedades:** Las claves numéricas se ordenan primero, seguidas por claves string en orden de inserción.  

##### Uso:  
*   **Transferencia de datos:** Enviar objetos entre cliente/servidor o almacenarlos en caché.  
*   **Clonado superficial:**  

```javascript  
    const clone = JSON.parse(JSON.stringify(obj)); // Clona sin métodos ni referencias  
```

*   **Filtrado de datos:** Usar `replacer` para excluir propiedades sensibles.  

> Para objetos complejos (con ciclos o tipos no soportados), se requieren herramientas adicionales (ej. bibliotecas como `lodash` o implementaciones personalizadas).


##   6.9 Métodos de objetos

En su mayoría los objetos heredan las propiedades de `Object.prototype` , son generalmente métodos tales como `hasOwnProperty()`, aun asi existen métodos universales que están definidos en `Object.prototype` , las cuales están pensadas para se reemplazadas por otras aun más especializadas.

### 6.9.1   El método `toString()`
Este devuelve una cadena que representa el valor del objeto el cual se invoca, Js siempre que sea requerido invoca este método cuando se requiere convertir en cadena.

#####   Ejemplo:
```javascript
    let s = { x: 1, y: 1}.toString();   //El valor que devolverá es : "[Object Object]"
```

Lo que esta haciendo es imprimiendo de manera literal el objeto , y se puede definir el método de la siguiente manera para poder ver el contenido del objeto.

#####   Ejemplo:
```javascript
    let s = {
        x:1,
        y:2,
        toString: function() {
            return `this(${this.x}, ${this.y})`;
        };
    }
    String(s) // "(1,2)": toString() se usa para conversiones a cadenas
```

### 6.9.2   El método `toLocaleString()`

Su propósito es devolver una representación de una cadena localizada del objeto ,  como tal , lo que hace es llamar al método `toString()` devolviendo ese valor.

Clases como `Date` y `Number` definen valores personalizados de `toLocateString()` tratando de formatear números , fechas y horas , con base a las convenciones locales.

En un `array` este formatea los elementos del array llamando a sus métodos `toLocateString()`.

#####   Ejemplo:
```javascript
    let point = {
        x:1000,
        y:2000,
        toString: function() {
            return `(${this.x}, ${this.y})`;
        },
        toLocateString: function() {
            return `(${this.x.toLocateString()}
            ${this.y.toLocateString()})`;
            
        };
        point.toString();   //  "(1000,2000)"
        point.toLocateString(); //  "(1,000 , 2,000)" Se separaron los miles
    }
```

### 6.9.3   El método `valueOf()`

Este se utiliza para cuando convertir un objeto tipo primitivo , el cual es generalmente un numero ,dentro de la clase `Date` se utiliza `valueOf()` para convertir las fechas en números permitiendo usarlos como un dato de tipo numérico.

#####     Ejemplo de comparación:
```javascript
    let point = {
        x:3,
        x:4,
        valueOf: function() {
            return Math.hypot(this.x , this.y);
        }
    };
    Number(point);  //  El valor es 5
    point > 4 //  verdadero
    point > 5 //  falso
    point < 6 //  verdadero
```

### El método `JSON()` 

Como tal `Object.prototype` no define un método `toJSON()`, aún asi el método `JSON.stringify()` busca un objeto para serializar en cualquier objeto , en el caso de que existiera , se invoca y se serializa el valor de retorno.

Por ejemplo la clase `Date` define un método `toJSON()` que devuelve una representación de la fecha en una cadena serializable.

#####   Ejemplo:
```javascript
    let point = {
        x:1,
        y:2,
        toString: function() {
            return `(${this.x}, ${this.y})`;
        },
        toJSON: function() {
            return this.toString();
        }
        JSON.stringify([point]) // EL resultado seria '["(1,2)"]'
    }
```

##  6.10  Sintaxis literal de objeto extendido

### 6.10.1  Propiedades acortadas
El uso de la sintaxis básica de objetos en ocasiones puede hacer que se tenga que escribir mas código repitiendo las mimas funciones.

#####   Ejemplo:
```javascript
    let x = 0,y = 1;
    let o = {
        x: x,
        y: y
    };
```

A partir de *ES6* se puede hacer mas simple:

#####   Ejemplo:
```javascript
    let x = 1, y = 2;
    let o = { x, y };
```

### 6.10.2  Nombres de propiedad calculados

En ciertas ocasiones algunos nombres de propiedades no se pueden escribir en el código fuente , en cambio el nombre se puede almacenar en una variable o el valor de una función que se retorne , se debe crear un objeto y luego agregar las propiedades en un paso adicional.

#####   Ejemplo:
```javascript
    const PROPERTY_NAME = "p1";
    function computePropertyName() { 
        return "p" + 2; 
    }
    let o = {};
    o[PROPERTY_NAME] = 1;
    o[computePropertyName()] = 2;
```

En *ES6* permite mover los corchetes directamente al literal del objeto:

#####   Ejemplo:
```javascript
    const PROPERTY_NAME = "p1";
    function computePropertyName() { 
        return "p" + 2;
    }
    let p = {
        [PROPERTY_NAME] = 1,
        [computePropertyName()]= 2
    };
```

De esta manera los corchetes delimitan una expresión arbitraria de JS.


### 6.10.3  Símbolos como propiedades de nombres 

Los nombres de las propiedades pueden ser cadenas o símbolos,  para usarse se debe ser mediante la sintaxis de propiedad calculada:

#####   Ejemplo:
```javascript
    const extension = Symbol("my extension symbol");
    let o = {
    [extension]: { /* extension data stored in this object */
    }
    };t
    o[extension].x = 0; // This won't conflict with other
```

Los símbolos son valores opacos , solo se pueden usar como nombres de propiedades ,  y ya que cada uno es "único" hace que sean útiles para crear distintos nombres de propiedades

>   `Symbol()` no es una función constructora, los símbolos siempre serán diferentes

El uso de los símbolos es principalmente ser un mecanismo de extension seguro para los objetos , esto sirve para evitar conflictos de código cuando se trabaja con terceros , asegurándose que no interfiera con las propiedades del código, aun así si el código de terceros utiliza `Objecto.getOwnPropertySymbols()` para descubrir los símbolos usados ,  puede realizar cambios dentro del código.

### 6.10.4  El operador Spread
A partir de ES2018 se puede realizar una copia de las propiedades usando el operador "spread" `...` 

#####   Ejemplo:
```javascript
    let position = { x: 0, y: 0 };
    let dimension = { width: 100, height: 75 };
    let rect = {...position, ...dimension }
```

Aunque como tal aunque es llamado el operador "spread"  , aun asi no es un operador de JS , esta es una sintaxis de caso especial disponible de manera exclusiva para literales de objetos.

En el caso de que coincidan las propiedades del objeto actual y del objeto con el que se esta usando "spread" , tomara el valor dependiendo de cual este a la derecha

#####   Ejemplo:
```javascript
    let o = { x:1 }
    let b = { x:0, ...o }
    b // Su valor sera 1 debido a que se sobrescribe b.x con el valor de o.x
    let c = { ...o, x:2}
    c // El valor de c sera 2 debido a que se sobrescribe el valor de o.x con el valor de c.x
```

"Spread" solo propaga propiedades propias , no lo hace con heredadas

Para el interprete de JS esto puede ser un poco exhaustivo en el caso de que se tenga una gran cantidad de propiedades dentro del objeto 

### 6.10.5  Acotaciones de métodos 

A partir de ES6 la sintaxis del objeto ha permitido que exista un atajo donde se pueden omitir ciertas palabras clave por ejemplo:

Paso de esto:
```javascript
    let square = {
        area: function() { return this.side * this.side; },
        side: 10
    };
    square.area() 
```
A esto:
```javascript
    let square = {
        area() { return this.side * this.side; },
        side: 10
    };
    square.area()
```

### 6.10.6 Propiedades getter y setter 

JavaScript permite no solo definir propiedades de datos comunes en los objetos, sino también propiedades de acceso . Estas no almacenan directamente un valor, sino que usan métodos especiales: un getter para obtener el valor y un setter para establecerlo. Cuando se lee una propiedad de acceso, JavaScript ejecuta su getter; cuando se le asigna un valor, ejecuta su setter.

#####   Ejemplo:
```javascript
    let o = {
        dataProp: 0,
        get accessorProp() { return this.dataProp; },
        set accessorProp(value) { this.dataProp = value; }
    };
```


