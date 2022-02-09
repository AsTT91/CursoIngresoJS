function mostrar()
{
	//declaro variables
	var edad;

		//tomo dato por ID

		edad = document.getElementById("txtIdEdad").value;

		//parseint

		edad = parseInt(edad);

		if (edad>12 && edad < 18) 
		{
			alert ("Usted es un adolescente");
		}






}//FIN DE LA FUNCIÓN
//txtIdEdad
/*entrada
var
ID
parseInt
if
alert*/