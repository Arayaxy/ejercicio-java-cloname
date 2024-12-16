// Iñigo Ibarlucea Moreno
// Habilitar el botón si se aceptan los términos
function toggleButton() {
    const checkbox = document.getElementById("terminos");
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = !checkbox.checked;
}

// Guardar los datos en Local Storage
function saveData(e) {
    e.preventDefault(); 

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();

    if (!nombre || !apellido || !dni || !contraseña) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const formData = { nombre, apellido, dni, contraseña };

    const savedData = JSON.parse(localStorage.getItem("formDataList")) || [];
    const dniExists = savedData.some((data) => data.dni === dni);

    if (dniExists) {
        alert("Ya existe un registro con este DNI.");
        return;
    }

    savedData.push(formData);
    localStorage.setItem("formDataList", JSON.stringify(savedData));

    alert("Datos guardados en Local Storage!");
    document.getElementById("registrationForm").reset();
}

// Inicializar eventos y datos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("registrationForm").addEventListener("submit", saveData);
});
