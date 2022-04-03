// Código del cuadrado
console.group("Cuadrados")

const ladoCuadrado      = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado      = ladoCuadrado * ladoCuadrado;

console.log("Los lados del cuadrado miden: "
    + ladoCuadrado 
    + " cm");
console.log("El perimetro del cuadrado es: " 
    + perimetroCuadrado 
    + " cm");
console.log("El área del cuadrado es: " 
    + areaCuadrado 
    + " cm^2");

console.groupEnd();

// Código del triángulo
console.group("Triangulos")

const ladoTriangulo1     = 6;
const ladoTriangulo2     = 6;
const baseTriangulo      = 4;
const alturaTriangulo    = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo      = (baseTriangulo * alturaTriangulo) / 2;
console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm y " 
    + baseTriangulo 
    + "cm");

console.log("La altura del triangulo es de" 
    + alturaTriangulo 
    + "cm");

console.log('El perimetro del triangulo es de: '
    + perimetroTriangulo 
    +"cm");

console.log('El area del triangulo es de: '
    + areaTriangulo
    + "cm^2")

console.groupEnd();

//Codigo Circulos

console.group("Círculos")
const pi               = Math.PI;
const radioCirculo     = 4;
const perimetroCirculo = 2 * radioCirculo * pi;
const areaCirculo      = pi * radioCirculo ** 2;

console.log('El  radio del círculo es: ' + radioCirculo + 'cm');
console.log('El diametro del círculo es: ' + 2*radioCirculo + 'cm');
console.log('El perímetro del circulo es: ' + perimetroCirculo + 'cm');
console.log('El área del círculo es: ' + areaCirculo + "cm");


console.groupEnd();

