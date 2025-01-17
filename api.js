// URL de la API de SpaceX
const API_URL = 'https://api.spacexdata.com/v5/launches/latest';

// Obtener elementos del DOM
const fetchDataBtn = document.getElementById('fetch-data-btn');
const outputDiv = document.getElementById('output');

// Función para obtener datos de la API
async function fetchAPIData() {
  try {
    // Mostrar mensaje de carga
    outputDiv.innerHTML = '<p>Cargando datos del último lanzamiento...</p>';

    // Solicitud GET a la API de SpaceX
    const response = await fetch(API_URL);

    // Validar la respuesta
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    // Procesar los datos
    const data = await response.json();

    // Renderizar datos
    displayData(data);
  } catch (error) {
    // Mostrar errores
    outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

// Función para mostrar los datos en el DOM
function displayData(data) {
  // Limpiar el contenedor de salida
  outputDiv.innerHTML = '';

  // Crear contenido dinámico basado en la estructura de la API
  const htmlContent = `
    <div class="api-item">
      <h3>${data.name || 'Nombre no disponible'}</h3>
      <p><strong>Fecha del lanzamiento:</strong> ${new Date(data.date_utc).toLocaleString()}</p>
      <p><strong>Detalles:</strong> ${data.details || 'Detalles no disponibles.'}</p>
      <p><strong>Éxito del lanzamiento:</strong> ${data.success ? 'Sí' : 'No'}</p>
      <p><strong>Video:</strong> ${
        data.links.youtube_id
          ? `<a href="https://www.youtube.com/watch?v=${data.links.youtube_id}" target="_blank">Ver en YouTube</a>`
          : 'No disponible'
      }</p>
    </div>
  `;

  // Insertar contenido en el contenedor
  outputDiv.innerHTML = htmlContent;
}

// Agregar evento al botón
fetchDataBtn.addEventListener('click', fetchAPIData);
