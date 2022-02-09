/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{

	var edad;
	var estadoCivil;

	//tomo los datos 
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	//parseInt edad
	edad = parseInt(edad);

	if (edad < 18 && estadoCivil != "Soltero") 
	{

		alert("Es muy pequeño para NO ser soltero");
	}

	


	

//txtIdEdad
//estadoCivil
}//FIN DE LA FUNCIÓN