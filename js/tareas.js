const estado = {
  tareas: JSON.parse(localStorage.getItem('tareas')) || [],
  trabajadores: ['Mario', 'Esteban', 'Ayln', 'Natalia'],
  estados: ['pendiente', 'progreso', 'completado']
};

const elementosDOM = {
  formulario: document.getElementById('formularioTarea'),
  contenedorTableros: document.getElementById('contenedorTableros'),
  notificacion: document.getElementById('notificacion'),
  mensajeNotificacion: document.querySelector('.mensaje-notificacion')
};

// Funciones principales
function mostrarNotificacion(mensaje) {
  elementosDOM.mensajeNotificacion.textContent = mensaje;
  elementosDOM.notificacion.classList.add('mostrar');
  setTimeout(() => {
      elementosDOM.notificacion.classList.remove('mostrar');
  }, 3000);
}

function guardarTareas() {
  localStorage.setItem('tareas', JSON.stringify(estado.tareas));
}

function actualizarEstadoTarea(id, nuevoEstado) {
  const indiceTarea = estado.tareas.findIndex(t => t.id === id);
  estado.tareas[indiceTarea].estado = nuevoEstado;
  guardarTareas();
  renderizarTableros();
  mostrarNotificacion('Estado actualizado correctamente');
}

function crearTarjetaTarea(tarea, contenedor) {
  const tarjeta = document.createElement('li');
  tarjeta.className = 'tarjeta-tarea';
  tarjeta.dataset.id = tarea.id;
  tarjeta.innerHTML = `
      <div class="encabezado-tarea">
          <h3 class="titulo-tarea">${tarea.titulo}</h3>
          <select class="selector-estado" data-id="${tarea.id}">
              ${estado.estados.map(estado => 
                  `<option value="${estado}" ${tarea.estado === estado ? 'selected' : ''}>
                      ${estado.charAt(0).toUpperCase() + estado.slice(1)}
                  </option>`
              ).join('')}
          </select>
      </div>
      <div class="fecha-tarea">
          <i class="fas fa-calendar-alt"></i>
          ${new Date(tarea.fecha).toLocaleDateString('es-ES')}
      </div>
      <div class="acciones-tarea">
          <button class="boton boton-secundario boton-editar" data-id="${tarea.id}">
              <i class="fas fa-edit"></i>
          </button>
          <button class="boton boton-peligro boton-eliminar" data-id="${tarea.id}">
              <i class="fas fa-trash"></i>
          </button>
      </div>
  `;
  
  tarjeta.querySelector('.selector-estado').addEventListener('change', (e) => {
      actualizarEstadoTarea(e.target.dataset.id, e.target.value);
  });
  
  contenedor.appendChild(tarjeta);
  tarjeta.querySelector('.boton-editar').addEventListener('click', manejarEdicion);
  tarjeta.querySelector('.boton-eliminar').addEventListener('click', manejarEliminacion);
}

function renderizarTableros() {
  elementosDOM.contenedorTableros.innerHTML = '';
  
  estado.trabajadores.forEach(trabajador => {
      const tareasTrabajador = estado.tareas.filter(t => t.trabajador === trabajador);
      
      const tablero = document.createElement('div');
      tablero.className = 'tablero-trabajador';
      tablero.innerHTML = `
          <div class="encabezado-tablero">
              <h2 class="titulo-tablero">${trabajador}</h2>
              <span class="contador-tareas">${tareasTrabajador.length} tareas</span>
          </div>
          <ul class="lista-tareas" data-trabajador="${trabajador}"></ul>
      `;
      
      const listaTareas = tablero.querySelector('.lista-tareas');
      tareasTrabajador.forEach(tarea => crearTarjetaTarea(tarea, listaTareas));
      
      const formularioRapido = document.createElement('div');
      formularioRapido.className = 'formulario-rapido';
      formularioRapido.innerHTML = `
          <input type="text" class="entrada-rapida" placeholder="Añadir tarea rápida">
          <button class="boton boton-primario boton-anadir-rapido" data-trabajador="${trabajador}">
              <i class="fas fa-plus"></i>
          </button>
      `;
      
      formularioRapido.querySelector('.boton-anadir-rapido').addEventListener('click', (e) => {
          const entrada = e.target.previousElementSibling;
          if (entrada.value.trim()) {
              const nuevaTarea = {
                  id: Date.now().toString(),
                  titulo: entrada.value.trim(),
                  fecha: new Date().toISOString(),
                  trabajador: e.target.dataset.trabajador,
                  estado: 'pendiente'
              };
              estado.tareas.push(nuevaTarea);
              guardarTareas();
              renderizarTableros();
              entrada.value = '';
          }
      });
      
      tablero.appendChild(formularioRapido);
      elementosDOM.contenedorTableros.appendChild(tablero);
  });
}

function manejarEdicion(e) {
  const id = e.currentTarget.dataset.id;
  const tarea = estado.tareas.find(t => t.id === id);
  
  elementosDOM.formulario.tituloTarea.value = tarea.titulo;
  elementosDOM.formulario.fechaTarea.value = tarea.fecha.split('T')[0];
  elementosDOM.formulario.trabajadorTarea.value = tarea.trabajador;
  elementosDOM.formulario.estadoTarea.value = tarea.estado;
  
  const botonEnvio = elementosDOM.formulario.querySelector('button');
  botonEnvio.innerHTML = `<i class="fas fa-save"></i> Actualizar Tarea`;
  botonEnvio.dataset.editandoId = id;
}

function manejarEliminacion(e) {
  const id = e.currentTarget.dataset.id;
  estado.tareas = estado.tareas.filter(t => t.id !== id);
  guardarTareas();
  renderizarTableros();
  mostrarNotificacion('Tarea eliminada correctamente');
}

// Evento principal
elementosDOM.formulario.addEventListener('submit', e => {
  e.preventDefault();
  
  const datosFormulario = new FormData(elementosDOM.formulario);
  const datosTarea = Object.fromEntries(datosFormulario.entries());
  
  if (!datosTarea.titulo || !datosTarea.fecha || !datosTarea.trabajador) {
      mostrarNotificacion('Complete todos los campos requeridos');
      return;
  }

  if (elementosDOM.formulario.querySelector('button').dataset.editandoId) {
      const id = elementosDOM.formulario.querySelector('button').dataset.editandoId;
      const indice = estado.tareas.findIndex(t => t.id === id);
      estado.tareas[indice] = {
          ...estado.tareas[indice],
          ...datosTarea,
          fecha: new Date(datosTarea.fecha).toISOString()
      };
      mostrarNotificacion('Tarea actualizada correctamente');
  } else {
      estado.tareas.push({
          id: Date.now().toString(),
          ...datosTarea,
          fecha: new Date(datosTarea.fecha).toISOString()
      });
      mostrarNotificacion('Tarea creada correctamente');
  }
  
  elementosDOM.formulario.reset();
  elementosDOM.formulario.querySelector('button').innerHTML = `<i class="fas fa-plus"></i> Crear Tarea`;
  delete elementosDOM.formulario.querySelector('button').dataset.editandoId;
  
  guardarTareas();
  renderizarTableros();
});

// Inicialización
document.addEventListener('DOMContentLoaded', renderizarTableros);