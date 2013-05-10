/**
* Programa que cuenta caracteres, palabras y frases de un texto o un archivo
* Autor: Sergio Ruiz
* Asignatura: SWCM
**/


var fs = require('fs');
var cuenta = {
 
 leer_archivo : function(){
  var datos;
  if(process.argv.length!=3){
    datos = ' ';
    console.log('\n ****************************************************************\n Error en los argumentos. Uso: nodejs contar.js <Archivo a leer>\n ****************************************************************\n');
  }
  else{
 	datos = fs.readFileSync(process.argv[2],'utf-8');
  }
 	return datos;
 },
 cuenta_caracteres : function (texto){
 	if(texto==null){
  	 texto = this.leer_archivo();
	}
   console.log('Texto a analizar:\n---------------------\n' + texto + '\n---------------------\n');
   var caracteres = texto.match(/[a-z,0-9,ñ¡!¿?"%&{}=#()'´:;.€@ºªç_üáéíóú-]/gim);
   console.log('El texto tiene ' + caracteres.length + ' caracteres\n');
   return caracteres.length;

 },

 cuenta_palabras : function(texto){
 	if(texto==null){
   	 texto = this.leer_archivo();
	}
  console.log('Texto a analizar:\n---------------------\n' + texto + '\n---------------------\n');
 	var palabras = texto.match(/[a-zñçüáéíóú'´€@0-9]+(-[\n\r\f\v]*[a-zñçüáéíóú'´€@0-9]*)*/gim);
 	console.log('El texto tiene ' + palabras.length + ' palabras \n');
 	return palabras.length;
 },

 cuenta_frases : function(texto){
 	if(texto==null){
  	 texto = this.leer_archivo();
	}
 	console.log('Texto a analizar:\n---------------------\n' + texto + '\n---------------------\n');
 	var frases = texto.match(/[.!?;]+/gim);
 	console.log('El texto tiene ' + frases.length + ' frases\n');
 	return frases.length;
 },
 
}
 module.exports.cuenta = cuenta;