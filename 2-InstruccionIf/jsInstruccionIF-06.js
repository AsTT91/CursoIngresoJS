function mostrar()
{
	//declaro variable
	var edad;

	//tomo dato por ID
	edad = document.getElementById("txtIdEdad").value;
	
	//parseint
	edad = parseInt(edad);

	//uso If
	if (edad <= 12) 
	{
		alert ("Usted es un niño");

	}

	if (edad >= 18)
	{

		alert ("Usted es un adulto");
	}
	
	if (edad > 12 && edad < 18)
	{
		alert ("Usted es un adolescente");
	}


	alert ("Fin");

	

}//FIN DE LA FUNCIÓN