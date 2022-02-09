function mostrar()
{
	//declaro variable
	var edad;

	//tomo dato por ID
	edad = document.getElementById("txtIdEdad").value;
	//parseint
	edad = parseInt(edad);

	if (edad > 17 || edad < 12); 
{
		alert ("Usted no es adolescente")
}
	alert ("Fin");

	