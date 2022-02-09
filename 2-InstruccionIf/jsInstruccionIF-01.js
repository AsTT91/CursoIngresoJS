/*Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/
function mostrar()
{	
	//declaro variable
		var edad;
		
	//tomo dato por ID
		edad = document.getElementById("txtIdEdad").value;
	
	//parseint
		edad = parseInt(edad);

	//utilizo if
		if (edad == 15) 
			{
				alert ("niña bonita");
			}


}//FIN DE LA FUNCIÓN