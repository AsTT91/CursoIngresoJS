/*Gabriel Matias Veles Div.E
TP:3
3
.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

	//declaro variables
		var temperatura;
		var fahcent;
		var centfah;
function FahrenheitCentigrados () 
{
	//tomo por dato por ID
	temperatura = document.getElementById("txtIdTemperatura").value;

	//parsefloat para convertirlo a numero flotante
	temperatura = parseFloat(temperatura);

	//convierto de fahrenheit a centigrados
		fahcent = (temperatura - 32 ) *5/9;

	//salida por alert
		alert ( temperatura + " grados Fahrenheit equivalen a " + fahcent + " grados centigrados.");

}

function CentigradosFahrenheit () 
{

	//tomo dato por ID
	temperatura = document.getElementById("txtIdTemperatura").value;

	//parsefloat para convertirlo a numero flotante
	temperatura = parseFloat(temperatura);

	//convierto de centigrados a fahrenheit
		centfah = (temperatura *9/5) + 32;

	//salida por alert

		alert (temperatura + " grados centigrados equivalen a " + centfah + " grados fahrenheit.");

}
//txtIdTemperatura
/*entrada
ID
parseFloat
alert
*/