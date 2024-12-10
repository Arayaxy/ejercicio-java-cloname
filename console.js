console.log("Inicio");
// Nombre
var nombre = "Iñigo";

// VAriable

var euro = 1000;
var int = 2;
var porcentaje = 100;

// inicializaar la variable result

var result;
var ahorro = 0;

// suma de dos variables

result = (euro * int) / porcentaje;
ahorro = euro + result;
console.log("lucas ha ganado con el interes: " + result + "$");
console.log("Dinero total ahorrado de Lucas: " + ahorro + "$");

// El tren de vitoria
// distancia de 100km tarda 1h 15 min, a que velocidad va? y en que km/h

var distancia = 100;
var tiempo = 75;
var velocidad = 0;
var kmh = 0;
var hora = 60;

velocidad = distancia / tiempo;
kmh = velocidad * hora;

console.log("el tren a vitoria va a: " + kmh + "km/h");
console.log("el tren a vitoria va a: " + velocidad.toFixed(2) + "km/m");

// suma resta multiplicaccion y division y modulo de dos numero
var num1 = 18;
var num2 = 10;
var suma,
  resta,
  multi,
  divi,
  modu = 0;

suma = num1 + num2;
resta = num1 - num2;
multi = num1 * num2;
divi = num1 / num2;
modu = num1 % num2;

console.log("resultado de la suma: " + suma);
console.log("resultado de la resta: " + resta);
console.log("resultado de la multiplicacion: " + multi);
console.log("resultado de la division: " + divi);
console.log("resultado de la modulo: " + modu);

// calcula el area del circulo y si perimetro
var num1 = 2;
var radio = 5;
const PI = 3.14;
var perimetro = 0;
var area = 0;

perimetro = num1 * PI * radio;
area = PI * (radio * radio);

console.log(perimetro.toFixed(2) + " es el perimetro del circulo");
console.log(area.toFixed(2) + " es el area del circulo");

// crear algoritmo mediante function
var nn = 300;
var num2 = 500;

function sumarnumeros(nn, num2) {
  let suma = nn + num2;
  return suma;
}

let resultado = sumarnumeros(nn, num2);

console.log("la suma es: " + resultado);

// que nos diga si es mayor o menor que 18
var edad = 19;
var edad2 = 16;

if (edad >= 18) {
  console.log("mayor");
}
if (edad2 < 18) {
  console.log("Menor de edad");
}
// crear una fucncion con varias variables
function perimetro_circulo(radio) {
  const PI = 3.14;
  var perimetro = 0;
  perimetro = 2 * PI * radio;
  return perimetro;
}
var prueba = perimetro_circulo(2);

console.log(prueba.toFixed(2));

var prueba2 = perimetro_circulo(5);
console.log(prueba2.toFixed(2));

// if / else
if (edad >= 18) {
  console.log("es mayor");
} else {
  console.log("es menor");
}

// temperatura
function plan(temperaturaActual, tengoCompania) {
  if (temperaturaActual > 25) {
    console.log("Vestir ropa deportiva");
    console.log("Ir al parque");
  } else {
    console.log("Vestir informalmente");
    console.log("Ir al cine");
    if (tengoCompania) {
      console.log("Usar el coche");
    } else {
      console.log("Usar transporte público");
    }
  }
}
plan(20, true);

function plan2(temperaturaActual2, tengoCompania2) {
  if (temperaturaActual2 >= 25) {
    console.log("Vestir ropa deportiva");
    console.log("Ir al parque");
  } else {
    console.log("Vestir informalmente");
    console.log("Ir al cine");
  }
  if (tengoCompania2) {
    console.log("Usar el coche");
  } else {
    console.log("Usar transporte público");
  }
}

plan2(30, true);
// Ejercico notas por pantalla de texto
function notas(x) {
  let resultado;
  if (x <= 5) {
    resultado = "suspendido";
  } else if (x >= 5 && x < 7) {
    resultado = "Bien";
  } else if (x >= 7 && x < 9) {
    resultado = "notable";
  } else if (x >= 9 && x <= 10) {
    resultado = "sobresaliente";
    if (x === 10) {
      resultado += " matricula de honor";
    }
  } else {
    resultado = "nota no valida";
  }
  return resultado;
}
var nota = notas(10);
console.log(nota);
// Rebajas
// tengo distintos valores de rebajas (50, 30, 20, 10) y quiero saber cual es el precio final del producto
// precio del producto y la rebaja que tiene (datos conocidos)
// fin del programa
function discount(rebaja, precio) {
  if (rebaja == 10) {
    preciofinal = precio - precio * (10 / 100);
  } else if (rebaja == 20) {
    preciofinal = precio - precio * (20 / 100);
  } else if (rebaja == 30) {
    preciofinal = precio - precio * (30 / 100);
  } else if (rebaja == 40) {
    preciofinal = precio - precio * (40 / 100);
  } else if (rebaja == 50) {
    preciofinal = precio - precio * (50 / 100);
  } else console.log("no aplica descuento");
  return preciofinal;
}

var rebaja,
  preciofinal = discount(70, 50);
console.log(preciofinal);
console.log("etiqueta roja");
// let i = 1;
// while (i <=10){
//    console.log(`3 x ${i} = ${3 * i}`);
// i++;
// }
//  i = 1
// while (i <= 15){
//   if(i % 2 >= 1){
//   console.log(i)
//   }
//   i++
// }
// i= 1
// while (i <= 20){
//   if(i % 3 == 0 && i % 2 == 0){
//     console.log(i)
//   }
//   i++
// }
// i= 1
// while (i <= 20){
//   if(i % 3 == 0 || i % 2 == 0){
//     console.log(i)
//   }
//   i++
// }
// i = 1;
// while (i <= 20){
//   if(i % 3 ==0 ||(i % 2 == 0&&i % 5 == 0)){
//     console.log(i)
//   }
//   i++
// }
// while (i <= 20){
//   if((i % 3 ==0 ||i % 2 == 0) && i % 5 == 0){
//     console.log(i)
//   }
//   i++
// }
// quiero la suma de todos los elementos que son multiplos de 3 del 1 al 20
// i = 1
// suma = 0
// while (i <= 20){
//   if(i % 3 == 0){
//  suma = suma + i
//   }
//   i++
// }
// i = 1;
// suma = 0;
// while (i <= 10) {
//   suma = suma + i;

//   i++;
// }
// console.log(suma);
// i= 2;
// var num =12;
// var primo = true;
// while (i < num){
// if(num % i == 0){
//   primo = false
// }
// i++

// }
// console.log(`es priemo ${num}? ${primo}`)
// suma=0
// for(i=0; i<=12; i++){
//   suma+= i
// }
for(i=10; i<=30; i++){
  if(i % 2 ==0){
    console.log(i)
  }
}
var fruta = ["manzana", "pera", "fresa"]
var size = fruta.length
console.log(size)
console.log(fruta[2])
fruta.push("uva")
// fruta.shift("manzana")
console.log(fruta)
fruta.forEach(element =>{
  console.log(`${element} tiene ${element.length} caracteres`)
})

//elimina valor concreto de un array
var resulta = fruta.filter(fruit => fruit != "fresa")
console.log(resulta)
// eliminar sabiendo la posición
delete(fruta[2])
console.log(fruta) //borra el contenido pero sigue manteniendo el espacio reservado
//eliminar sabiendo la posicion 
fruta.splice (2,1)
console.log(fruta)
//array con los meses del año y quiero eliminar febrero, pero no se su posicion
var meses = ["Enero", "febrero", "marzo", "abril", "mayo" , "junio", "julio", "agosto" ];
var cont = 0;
var indice = meses.length;
meses.forEach(element =>{
  cont++;
  if(element == "febrero"){
    return
  }0
  cont++;
})

function tablaDeMultiplicar(x) {
  let tabla = [];
  for (let i = 1; i <= 10; i++) {
      tabla.push(`${x} x ${i} = ${x * i}`);
  }
  return tabla;
}

let resul = tablaDeMultiplicar(8);
resul.forEach(linea => console.log(linea));
// Días de la semana
const dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
const diasMayusculas = dias.map(dia => dia.toUpperCase());
const diasminusuclas = dias.map(dia => dia.toLowerCase())
 const diasInvertidos = [...dias].reverse();
 const numeroLetras = [];
 const diasReverso = [];

 for (let i = 0; i < dias.length; i++) {     numeroLetras.push(dias[i].length); // Contar letras
     diasReverso.push([...dias[i]].reverse().join('')); // Invertir el día
 }

// // Resultados
console.log("Días originales:", dias);
console.log("Número de letras:", numeroLetras);
console.log("Días al revés:", diasReverso);
console.log("Días en mayúsculas:", diasMayusculas);
console.log("Dias en minusculas", diasminusuclas);
console.log("Array de días en orden inverso:", diasInvertidos);

//Ejercicio de examen
//* perimetro del circulo  2pir y el area pi r^2 
//datos necesarios: radio
// triangulo perimetro es = 3*a
//triangula area = base por altura / 2 tenemos que calcular la altura h
//datos necesarios a lado del triangulo
//cuadrado permietro = 4* lado
//area  = l^2
//datos lado 
//perimetro rectangulo = 2x+2y
//area= x*y
// datos y , x



function calcularCirculo(radio) {
  const PI = 3.1416;
    const perimetro = 2 * PI * radio;
    const area = PI * (radio * radio);

    console.log(  " El perímetro del círculo es " +perimetro.toFixed(2));
    console.log(" El área del círculo es "+ area.toFixed(2)  );
}

calcularCirculo(2); 

function calcularTriangulo(lado){
const perimetro = 3*lado;
const altura= (3**1/2/2)*lado;
const area = (lado*altura)/2;

 console.log("el perimetro del triangulo es " + perimetro);
 console.log("el area de un triangulo es "+ area);
 console.log(altura)
}
calcularTriangulo(2)

function calcularCuadrado(lado){
  const perimetro = 4*lado;
  const area= lado**2;
  console.log("El perimetro de el cuadrado es " + perimetro)
  console.log("El Area de un cuadrado es " + area)
}
calcularCuadrado(2)

function calcularRectangulo(lado, lad){
  const perimetro =lado * 2 + lad * 2;
  const area = lado * lad;

  console.log("El perimetro del rectangulo es " + perimetro)
  console.log("El area del rectangulo es " + area)
}
calcularRectangulo(2,4)