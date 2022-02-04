/*Gabriel Matias Veles Div.E
TP:1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//declaro variables
	var precioUno;
	var precioDos;
	var precioTres;
	var precioFinal;

	//traigo datos por ID
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	//transformo los datos a valores numericos por parseFloat
	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	//calculo el precioFinal
	precioFinal = precioUno + precioDos + precioTres;

	//muestro el resultado por alert
	alert ("la suma de sus productos es "+ precioFinal);


}
function Promedio ()

{
	//declaro variables
	var precioUno;
	var precioDos;
	var precioTres;
	var precioFinal;
	var promedio;

	//traigo datos por ID
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	//transformo los datos a valores numericos por parseFloat
	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	//calculo el promedio
	precioFinal = precioUno + precioDos + precioTres;
	promedio = precioFinal / 3;

	alert ("el promedio de sus productos es de: $ " + promedio);

}
function PrecioFinal () 
{
//declaro variables
	var precioUno;
	var precioDos;
	var precioTres;
	var precioFinalIva;
	

	//traigo datos por ID
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	//transformo los datos a valores numericos por parseFloat
	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	//calculo el precio + iva
	precioFinalIva = (precioUno + precioDos + precioTres) * 1.21;

	//muestro el resultado por alert
	alert ("El precio final + Iva de sus productos es: $ " + precioFinalIva);


}
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres
/*entrada
ID
parseFloat
alert*/