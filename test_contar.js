/**
* Programa que cuenta caracteres, palabras y frases de un texto o un archivo
* Autor: Sergio Ruiz
* Asignatura: SWCM
**/


// Importamos todo lo necesario para los test
var fs = require('fs');
var cuenta = require('./contar.js').cuenta;
var assert = require('assert');
// Comienzan las pruebas: 

console.log('\nPruebas de reconocimiento de caracteres:\n\n');
assert.equal(4,cuenta.cuenta_caracteres('Caña'),'T1.1: Probamos mayusculas y ñ\n');
assert.equal(38, cuenta.cuenta_caracteres('Contábamos con él pingüino. 43 de ellos había'), 'T1.2: Probamos tildes, numeros y puntos');
assert.equal(59, cuenta.cuenta_caracteres('- ¡Pero hombre! \n- ¿Qué ocurre? \f-(Voy a tener que decirlo...) \t nada nada. \r \v'), 'T1.3: Probamos saltos de linea y  caracteres especiales.' );
assert.equal(17, cuenta.cuenta_caracteres('perro-lobo doesn´t'),'T1.4: Probamos el reconocimiento de guiones y tildes inglesas');

console.log('\nTest de caracteres pasados: 4/4 OK\n');


console.log('\nPruebas de reconocimiento de palabras:\n\n');
assert.equal(8, cuenta.cuenta_palabras('Contábamos con él pingüino. 43 de ellos había.'), 'T2.1: Probamos palabras y cifras');
assert.equal(11, cuenta.cuenta_palabras('- ¡Pero hombre! \n- ¿Qué ocurre? \f-(Voy a tener que decirlo...) \t nada nada. \r \v'), 'T2.2: Probamos saltos de linea y  caracteres especiales. Ademas, el guion no debe ser reconocido como palabra' );
assert.equal(2,cuenta.cuenta_palabras('perro-lobo doesn´t'),'T2.3: Probamos el reconocimiento de guiones y tildes inglesas');
assert.equal(1, cuenta.cuenta_palabras('proba-\nmos-\n\fguiones'),'T2.4: Probamos guiones combinados con caracteres especiales');

console.log('\nTest de palabras pasados: 4/4 OK\n');


console.log('\nPruebas de reconocimiento de frases:\n\n');
assert.equal(2, cuenta.cuenta_frases('Contábamos con él pingüino. 43 de ellos había.'), 'T3.1: Probamos tildes y puntos');
assert.equal(3, cuenta.cuenta_frases('Estas algo preocupado, no se... \nNo que va. \fAh vale.\v \r '),'T3.2: Probamos saltos de línea, puntos suspensivos y comas');
assert.equal(4, cuenta.cuenta_frases('- ¡Pero hombre! \n- ¿Qué ocurre? \f-(Voy a tener que decirlo...) \t nada nada. \r \v'), 'T3.3: Probamos formas raras de terminar la frase' );

console.log('\nTest de frases pasados: 3/3 OK\n');

