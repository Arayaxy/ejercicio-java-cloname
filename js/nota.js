console.log("FUNCIONA");
//funcion notas
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
      resultado += " \n matricula de honor";
    }
  } else {
    resultado = "nota no valida";
  }
  return resultado;
}
var boton = document.getElementById("calcular");

boton.addEventListener("click", () => {
  var media = 0;
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var media = (nota1 + nota3) / 2;
  var nombre = document.getElementById("nombre").value;
  var result = notas(media);
  const elemento = document.getElementById("calcula_tu_media");
  const parrafos = elemento.querySelectorAll("p");
  parrafos.forEach(p => p.remove());
  const nuevo1 = document.createElement("p");
  nuevo1.className = "nota2";
  nuevo1.innerText = nombre + "\n" + result;

  elemento.appendChild(nuevo1);
});
// funcion numero perfecto
function esNumeroPerfecto(numero) {
  let suma = 0;

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      suma += i;
    }
  }

  return suma === numero;
}

document.getElementById("nperfecto").addEventListener("click", function () {
  const input = document.getElementById("perfecto").value;
  const numero = parseInt(input);

  const resultado = document.getElementById("nota2");

  if (isNaN(numero) || numero <= 0) {
    resultado.textContent = "Por favor, introduce un número válido.";
    return;
  }
  const elemento = document.getElementById("num_perf");
  //eliminar todos los p
  const parrafos = elemento.querySelectorAll("p");
  parrafos.forEach(p => p.remove());
  const nuevo = document.createElement("p");
  nuevo.className = "nota2";
  if (esNumeroPerfecto(numero)) {
    result = `${numero} es un número perfecto.`;
  } else {
    result = `${numero} no es un número perfecto.`;
  }
  console.log(result);
  nuevo.innerText = result;
  elemento.appendChild(nuevo);
});
//mip.id= "nota
//funcion datos
function datos() {
  const elemento = document.getElementById("informacion");
  const parrafos = elemento.querySelectorAll("p");
  parrafos.forEach(p => p.remove());
  const nuevo = document.createElement("p");
  nuevo.className = "nota2"

  var nombre = document.getElementById("nombres").value;
  var edad = document.getElementById("edad").value;
  console.log(nombre, edad);
  result = `${nombre} tiene ${edad} años`;
  nuevo.innerText = result;
  elemento.appendChild(nuevo);
}
 document.getElementById("patata").addEventListener('click', datos);

