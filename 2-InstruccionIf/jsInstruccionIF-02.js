/*Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/
function mostrar()
{
	//declaro variable
	var edad;
	//tomo la edad 
		edad = document.getElementById("txtIdEdad").value;

	//transformo a valores numericos por parseInt
		edad = parseInt(edad);

	if (edad>=18) 
	{
		alert("Sos mayor de edad");
	}

 	alert("Fin");

	
	

}
//txtIdEdad
//FIN DE LA FUNCIÓN
/*entrada
ID
parseInt
if
alert
*/