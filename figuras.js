// Código del cuadrado
console.group("Cuadrados")

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
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return base * altura / 2;
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
const radioCirculo     = 4;
function perimetroCirculo(radio){
    return 2 * Math.PI * radio;
}
function areaCirculo(radio){
    return Math.PI * radio ** 2;
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

