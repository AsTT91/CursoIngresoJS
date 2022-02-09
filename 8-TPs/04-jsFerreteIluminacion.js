/*4.Gabriel Matias Veles
Div.E TP4
	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 function CalcularPrecio () 
 {   
    //declaro variables
    var lamparas;
    var precio = 35;
    var IIBB;
    var marcaLampara;
    var precioFinal;
    var precioFacturado;
    var descuento;
    var sumaCompra;
    

    //tomo datos por ID
    lamparas = document.getElementById('txtIdCantidad').value;
    lamparas = parseInt(lamparas);
    marcaLampara = document.getElementById("Marca").value;

    sumaCompra = lamparas * precio;
    sumaCompra = parseInt(sumaCompra);

    //calculo los descuentos

    if (lamparas > 5) 
    {
        descuento = 50 / 100;
    }
    else if (lamparas == 5 ) 
    {
        if (marcaLampara == "ArgentinaLuz")
        {
            descuento = 40 / 100;
        }
        else
        {
            descuento = 30 / 100;
        }
        
    }
    else if (lamparas == 4) 
    {
        if (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")

        {
            descuento = 25 / 100;
        }

        else
        {
            descuento = 20 / 100;
        }
        
    }
    else if (lamparas == 3) 
    {
        if (marcaLampara == "ArgentinaLuz") 
        {
            descuento = 15 / 100;
        }
        
        else if (marcaLampara == "FelipeLamparas")
        {
            descuento = 10 / 100;
        }

        else
        {
            descuento = 5 / 100;
        }
    }
    else
    {
        descuento = 0;
    }
    //calculo el precio final(con descuento)

    precioFinal = sumaCompra - (sumaCompra * descuento);

    //aplico IIBB en caso de ser necesario y hago la salida por ID

    if (precioFinal > 120)

    {
        IIBB = precioFinal * 0.1;

        //parsefloat IIBB
        IIBB = parseFloat(IIBB);

        precioFacturado = precioFinal + IIBB;

        //hago salida por ID en caso de cumplirse la condicion
        document.getElementById("txtIdprecioDescuento").value = ("$" + precioFacturado + " ,de IIBB usted pago $" + IIBB);
    }
    else
    {
        precioFacturado = precioFinal;
        // hago la salida por ID
        document.getElementById("txtIdprecioDescuento").value = precioFacturado;

    }
    
    
}
//Marca
//ArgentinaLuz
//FelipeLamparas
//JeLuz
//HazIluminacion
//Osram
//txtIdCantidad
//txtIdprecioDescuento