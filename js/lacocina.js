const titulo_receta = document.getElementById("titulo_receta");
const ingredientes = document.getElementById("ingredientes");
const preparacion = document.getElementById("preparacion");
const form = document.getElementById("form_receta"); // Agrega un ID al formulario

var mi_receta = JSON.parse(localStorage.getItem("recetas")) || [];

// Escuchar el evento de envío del formulario
form.addEventListener("submit", (event) => {
    // Prevenir la recarga del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    const titRecetaValue = titulo_receta.value.trim();
    const ingredientesValue = ingredientes.value.trim();
    const preparacionValue = preparacion.value.trim();

    // Validar que todos los campos estén completos
    if (!titRecetaValue) {
        alert("Introduce un título a tu receta");
        return;
    }
    if (!ingredientesValue) {
        alert("Introduce los ingredientes necesarios");
        return;
    }
    if (!preparacionValue) {
        alert("Introduce una preparación");
        return;
    }

    // Crear un objeto con los valores actuales
    const NuevaReceta = {
        titulo: titRecetaValue,
        ingredientes: ingredientesValue,
        preparacion: preparacionValue
    };

    // Agregar la receta al array y guardarlo en el localStorage
    mi_receta.push(NuevaReceta);
    localStorage.setItem("recetas", JSON.stringify(mi_receta));

    // Limpiar los campos del formulario
    titulo_receta.value = '';
    ingredientes.value = '';
    preparacion.value = '';

    alert("Receta guardada exitosamente");
});
