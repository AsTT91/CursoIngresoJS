/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
	var numeroRandom;

	numeroRandom = Math.floor(Math.random() * (11 - 1)) + 1;

	console.log (numeroRandom);

	if (numeroRandom > 8) 
	{
		alert("Excelente");
	}
	else if (numeroRandom < 4) 
	{
		alert("Vamos, la proxima se puede");
	}
	else
	{
		alert("Aprobó");
	}
}//FIN DE LA FUNCIÓN