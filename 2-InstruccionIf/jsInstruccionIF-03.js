/*Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/
function mostrar()
{
	//declaro variable
	var edad;

	//tomo dato por ID

	edad = document.getElementById("txtIdEdad").value;

	//convierto a numeros enteros
	edad = parseInt(edad);

	//uso if
	if (edad > 17) 
	{
		alert ("Usted es mayor de edad");
	}

	else
	{
		alert ("Usted es menor de edad");
	}
	alert("Fin");

}//FIN DE LA FUNCIÓN
//txtIdEdad