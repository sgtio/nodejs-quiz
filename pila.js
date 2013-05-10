/**
* PILA: Programa que crea la pila
* Autor: Sergio Ruiz
* Asignatura: SWCM
* 
**/

function Pila(){
 var _pila = [];
 return{
  reset:  function(){
    _pila = [];
  },
  push:   function(x){
    _pila.push(x);
  },
  pop:    function(){
    if(_pila.length>0){   
      return _pila.pop();
    }
    else { return undefined;}
  },
 };
}

//Aqui empieza el programa de prueba.

var pila_prueba = new Pila(undefined);
pila_prueba.reset;
var elem1 = 'Hola esto es una prueba';
pila_prueba.push(elem1);
var elem2 = 27;
pila_prueba.push(elem2);
var elem3 = true;
pila_prueba.push(elem3);

//Vamos a sacar los elementos. aux nos servira de variable temporal para almacenar los elementos que vayamos sacando
var aux=pila_prueba.pop();
if(elem3 == aux){ 
  console.log('Correcto.\nEl primer elemento de la pila coincide con: ' + elem3 + ' (el tercer elemento introducido)\n'); }
  else{console.log('Ha ocurrido un error \n Se esperaba :' + elem3 + '\n y se ha sacado' + aux +'\n');}
aux=pila_prueba.pop();
if(elem2 == aux){ 
  console.log('Correcto.\nEl segundo elemento de la pila coincide con: ' + elem2 + ' (el segundo elemento introducido)\n'); }
  else{console.log('Ha ocurrido un error \n Se esperaba :' + elem2 + '\n y se ha sacado' + aux +'\n');}

aux=pila_prueba.pop();
if(elem1 == aux){ 
  console.log('Correcto.\nEl ultimo elemento de la pila coincide con: ' + elem1 + ' (el primer elemento introducido)\n'); }
  else{console.log('Ha ocurrido un error \n Se esperaba :' + elem1 + '\n y se ha sacado' + aux +'\n');}