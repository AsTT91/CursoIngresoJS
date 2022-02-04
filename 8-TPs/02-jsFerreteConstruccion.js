/*Gabriel Matias Veles Div.E
TP:2
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

	//declaro variables
 	var largo;
 	var ancho;
 	var radio;
 	var alambre;
 	var perimetroCirculo;
 	var calRectangulo;
 	var cementoRectangulo;
 	var areaCirculo;
 	var areaRectangulo;

function Rectangulo () 
{
	var perimetro

	//tomo datos por ID
		largo = document.getElementById("txtIdLargo").value
		ancho = document.getElementById("txtIdAncho").value

 	//transformo a numeros flotantes por parseFloat
 		largo = parseFloat(largo);
 		ancho = parseFloat(ancho);

 	//calculo la cantidad de alambre para el perimetro (se usan 3 alambres)
 		perimetro = (largo + ancho) * 2;
 		alambre = perimetro * 3;

 	//muestro la cantidad de alambre por document.write
 		document.write("Se necesitan "+ alambre + " mts. de alambre.");
	




}
function Circulo () 

{
	//tomo el radio por ID
		radio = document.getElementById("txtIdRadio").value;

	//transformo a valores numericos (flotantes) por parseFloat
		radio = parseFloat(radio);

	//calculo el perimetro
		perimetroCirculo = 6.28 * radio;

	//calculo la cantidad de alambre
		alambre = perimetroCirculo * 3;

	//muestro el resultado por document.Write
		document.write("se necesitan " + alambre + " mts. de alambre.");



	
}
function Materiales () 
{
	//tomo los datos por ID

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById('txtIdAncho').value;


	//calculo el area del rectangulo

	areaRectangulo = largo * ancho;

	//calculo la cal y el cemento a precisar

	cementoRectangulo = areaRectangulo * 2;

	calRectangulo = areaRectangulo * 3;


	//muestro la cantidad de cal y cemento por document.Write

	document.write("Se necesitan " + cementoRectangulo + " bolsas de cemento y " + calRectangulo + " bolsas de cal para un terreno de " + largo + " mts. de largo y " + ancho + " mts. de ancho.")



}
//txtIdLargo
//txtIdAncho
//txtIdRadio
/*entrada
id
parse
document.Write*/