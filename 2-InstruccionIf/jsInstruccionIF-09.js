/*Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{
	var numeroRandom;

	numeroRandom = Math.floor(Math.random() * (11 - 1)) + 1;

	numeroRandom = parseInt(numeroRandom);

	

	alert (numeroRandom);
	

}//FIN DE LA FUNCIÓN