/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Se toma el nombre;
	var nombreIngresado;
	//se toma la edad;
	var edadIngresada;
	
	nombreIngresado=document.getElementById("txtIdNombre").value;

	edadIngresada=document.getElementById("txtIdEdad").value;

	//muestro por alert;

	alert("usted se llama "+ nombreIngresado +" y tiene "+edadIngresada+" años");
}

//txtIdNombre
//txtIdEdad