// Código del cuadrado
console.group("Cuadrados") //Agrupar en consola

let lado = 5;

function perimetroCuadrado(lado) {
    return lado * 4;
} 
function areaCuadrado(lado) {
    return lado ** 2;
}    

console.log("Los lados del cuadrado miden: "
    + lado
    + " cm");
console.log("El perimetro del cuadrado es: " 
    + perimetroCuadrado(lado) 
    + " cm");
console.log("El área del cuadrado es: " 
    + areaCuadrado(lado) 
    + " cm^2");

console.groupEnd();

// Código del triángulo
console.group("Triangulos")

const ladoTriangulo1     = 6;
const ladoTriangulo2     = 6;
const baseTriangulo      = 4;
const alturaTriangulo    = 5.5;

function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
} 
//Esta funcion fue modificada del ejemplo original para poder calcular el area del triangulo sabiendo solamente las medididas de sus lados.
function areaTriangulo(base, ladoA, ladoB){
    let s      = (Number(base) + Number(ladoA) + Number(ladoB))/2
    let altura = 2/Number(base) * Math.sqrt(s*(s-Number(base))*(s-Number(ladoA))*(s-Number(ladoB)));
    return (base * altura) / 2;
}     

console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm y " 
    + baseTriangulo 
    + "cm");

console.log("La altura del triangulo es de: " 
    + alturaTriangulo 
    + "cm");

console.log('El perimetro del triangulo es de: '
    + perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) 
    +"cm");

console.log('El area del triangulo es de: '
    + areaTriangulo(baseTriangulo, alturaTriangulo)
    + "cm^2")

console.groupEnd();

//Codigo Circulos

console.group("Círculos")
function perimetroCirculo(radio){
    return 2 * Math.PI * Number(radio);
}
function areaCirculo(radio){
    return Math.PI * Number(radio) ** 2;
}      

console.log('El  radio del círculo es de: ' 
    + radioCirculo 
    + 'cm');
console.log('El diametro del círculo es de: ' 
    + 2*radioCirculo 
    + 'cm');
console.log('El perímetro del circulo es de: ' 
    + perimetroCirculo(radioCirculo) 
    + 'cm');
console.log('El área del círculo es de: ' 
    + areaCirculo(radioCirculo) 
    + "cm");


console.groupEnd();


//interaccion con HTML

function CalcularPerimetroCuadrado(){
    const input        = document.getElementById("inputCuadrado");
    const value        = input.value;
    const perimetroCua = perimetroCuadrado(value);
    window.alert("El perimetro del cuadrado es de: " + perimetroCua.toFixed(1));
}

function CalcularAreaCuadrado(){
    const input    = document.getElementById("inputCuadrado");
    const valueAcua    = input.value;
    const areaCua  = areaCuadrado(valueAcua)
    window.alert("El área del cuadrado es de: " + areaCua.toFixed(1) +"cm^2");
}

function CalcularPerimetroTriangulo(){
    const inputBase            = document.getElementById("base")
    const inputLadoA           = document.getElementById("ladoa")
    const inputLadoB           = document.getElementById("ladob")
    const valueInputBase       = inputBase.value;
    const valueinputLadoA      = inputLadoA.value;
    const valueinputLadoB      = inputLadoB.value;
    const perimetroTria        = perimetroTriangulo(valueInputBase, valueinputLadoA, valueinputLadoB)
    window.alert("El perímetro del triángulo es de: "+ perimetroTria.toFixed(1) +"cm")
}   

function CalcularAreaTriangulo(){
    const inputBase            = document.getElementById("base");
    const inputLadoA           = document.getElementById("ladoa");
    const inputLadoB           = document.getElementById("ladob");
    const valueInputBase       = inputBase.value;
    const valueinputLadoA      = inputLadoA.value;
    const valueinputLadoB      = inputLadoB.value;
    const area                 = areaTriangulo(valueInputBase, valueinputLadoA, valueinputLadoB);
    window.alert("El area del triángulo es de: "+ area.toFixed(1)+ "cm^2");
}

function CalcularPerimetroCirculo(){
    const input        = document.getElementById("inputCirculo");
    const value        = input.value;
    const perimetroCir = perimetroCirculo(value);
    window.alert("El perímetro del círculo es de: " + perimetroCir.toFixed(1) + "cm");
}

function CalcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area  = areaCirculo(value);
    window.alert("El área del círculo es de: " + area.toFixed(1) +"cm^2")
}