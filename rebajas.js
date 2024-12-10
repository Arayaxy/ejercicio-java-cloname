function discount(rebaja, precio) {
  var preciofinal = 0;

  // Validar que precio y rebaja sean números válidos
  if (isNaN(precio) || isNaN(rebaja)) {
    return "Por favor, ingrese valores válidos.";
  }

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
  } else {
    preciofinal = "No aplica descuento";
  }
  return preciofinal;
}

var boton = document.getElementById("calcular");
boton.addEventListener("click", () => {
  // Obtener valores del input
  var precio = parseFloat(document.getElementById("precio").value);
  var rebaja = parseFloat(document.getElementById("rebaja").value);

  // Validar las entradas
  if (isNaN(precio) || precio <= 0) {
    alert("Por favor, ingrese un precio válido.");
    return;
  }
  if (isNaN(rebaja) || rebaja < 0 || rebaja > 50) {
    alert("Por favor, ingrese una rebaja válida (10, 20, 30, 40, 50).");
    return;
  }

  // Calcular resultado
  var result = discount(rebaja, precio);

  // Mostrar el resultado en la página
  var elemento_result = document.getElementById("descuento");
  elemento_result.innerText = `El precio final es: ${result}`;

  // Limpiar clases previas
  elemento_result.className = "";

  // Agregar clase según el descuento
  if (rebaja == 50) {
    elemento_result.classList.add("rojo");
  } else if (rebaja == 40) {
    elemento_result.classList.add("azul");
  } else if (rebaja == 30) {
    elemento_result.classList.add("verde");
  } else if (rebaja == 20) {
    elemento_result.classList.add("morado");
  } else if (rebaja == 10) {
    elemento_result.classList.add("amarillo");
  }
});
