// Obtener referencias a los elementos
const taskForm = document.getElementById("task-form"); // Formulario
const tableContainer = document.getElementById("table-container"); // Contenedor principal de tablas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Función para crear una tabla para un trabajador
function createTableForWorker(workerName, index) {
  let tableWrapper = document.createElement("div");
  tableWrapper.classList.add("worker-table-wrapper");
  tableWrapper.id = `table-${workerName}`;

  // Crear título para la tabla del trabajador
  const title = document.createElement("h2");
  title.textContent = `Tareas de ${workerName}`;
  tableWrapper.appendChild(title);

  // Crear la tabla
  const table = document.createElement("table");
  table.classList.add("task-table");
  table.innerHTML = `
        <thead>
            <tr>
                <th>Nombre de la Tarea</th>
                <th>Fecha de Entrega</th>
                <th>Acciones</th>
                <th><button class="btn-delete_all">Eliminar</button></th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
   
  tableWrapper.appendChild(table);
  tableContainer.appendChild(tableWrapper);
  var worker_delete = table.getElementsByClassName("btn-delete_all");
   worker_delete[0].addEventListener('click', () => {
        // Actualizar las tareas en localStorage
        var tw_todelete = JSON.parse(localStorage.getItem("tasks")) || [];
        tw_todelete = tw_todelete.filter(
            (task) =>
            !(task.workerName === workerName)
        );
        localStorage.setItem("tasks", JSON.stringify(tw_todelete));
        render_tasks();
   })
  return table.querySelector("tbody"); // Devolver el cuerpo de la tabla
}

// Manejar el evento de envío del formulario
taskForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que la página se recargue

  // Obtener los valores de los campos
  const taskName = document.getElementById("task-name").value.trim();
  const taskDate = document.getElementById("task-date").value.trim();
  const workerName = document.getElementById("worker-select").value.trim();

  // Recuperar las tareas existentes desde localStorage
 

  // Verificar si todos los campos están llenos
  if (taskName && taskDate && workerName) {
    const newTask = { taskName, taskDate, workerName };

    // Agregar la nueva tarea a la lista de tareas
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Corregido aquí
    render_tasks()
   
    // Resetear el formulario
    taskForm.reset();

    // Agregar evento al botón de eliminar
   
  } else {
    // Mostrar alerta si faltan campos
    alert("Por favor, completa todos los campos.");
  }
});
function render_tasks() {
    tableContainer.innerHTML = "";
    tasks.forEach((element, index) => { // Verificar si ya existe una tabla para este trabajador
        let workerTableBody = document.querySelector(`#table-${element.workerName} tbody`);
        if (!workerTableBody) {
          // Si no existe, crear una nueva tabla para este trabajador
          workerTableBody = createTableForWorker(element.workerName, index);
        }
    
        // Crear una nueva fila
        const row = document.createElement("tr");
        row.innerHTML = `
                <td>${element.taskName}</td>
                <td>${element.taskDate}</td>
                <td>
                    <button class="btn-delete">Eliminar</button>
                </td>
            `;
    
        // Agregar la fila al cuerpo de la tabla correspondiente
        workerTableBody.appendChild(row);
    
        // //clase solo para el color del fonodo del postit
        // tableWrapper.classList.add("color_"+(index%4));
        const deleteButton = row.querySelector(".btn-delete");
        deleteButton.addEventListener("click", function () {
          row.remove(); // Elimina la fila
         // Actualizar las tareas en localStorage
         var task_todelete = JSON.parse(localStorage.getItem("tasks")) || [];
         task_todelete = task_todelete.filter(
        (task) =>
          !(task.taskName === element.taskName && task.workerName === element.workerName)
      );
      localStorage.setItem("tasks", JSON.stringify(task_todelete));
    });
    });
}

render_tasks()