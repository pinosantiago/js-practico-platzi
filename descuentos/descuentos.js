function calcularPorcentaje(){
    const precio               = document.getElementById("precio").value;
    const descuento            = document.getElementById("descuento").value;
    if (descuento > 100 || descuento < 1){
        window.alert("El descuento tiene que ser entre 1 y 100");
    }
    else{
        const resultado            = Number(precio) * (100 - Number(descuento)) / 100;
        const mostrarResultado     = document.getElementById("preciofinal");
        mostrarResultado.innerText = "Tu precio final es: $" + resultado;
    }
    
    
}