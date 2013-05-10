/**
* Autor: Sergio Ruiz 
* Asignatura: SWCM
* Entrega 1.
* Descripcion: Script que crea un objeto libro con una
* serie de propiedades y funciones en node.js
**/

var catalogo = []; // Variable de clase catalogo
function Libro(titulo, autor, isbn, precio){
 // Definicion de variables del objeto: constructor 
 this.titulo = titulo;
 this.autor = autor;
 this.isbn = isbn;
 this.precio = precio;
 catalogo.push(this);
 
 
 // Metodos de la clase 
 this.listar_detalles = function(){
 return('Titulo: ' + this.titulo + ' Autor: ' + this.autor + ' ISBN: ' + this.isbn + ' Precio: ' + this.precio + '\n');
 }

 this.precio_rebajado = function(descuento){
 // El descuento vendra expresado como porcentaje
 this.precio = this.precio*(1-descuento/100);
 }

 this.listar_catalogo = function(){
 var respuesta = 'Estos son los libros que hay en el catalogo \n';
  for(var i=0;i< catalogo.length; i++) 
  {respuesta += catalogo[i].listar_detalles() + '\n';}
  return respuesta;
 }
}
var Libro1 = new Libro('Titulo1', 'autor1','12345ISBN1',31);
var Libro2 = new Libro('Titulo2', 'autor2','12345ISBN2',32);
console.log(Libro2.listar_catalogo());

