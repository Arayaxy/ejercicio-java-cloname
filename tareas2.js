//identificar mis elementos de html
const taskImput = document.getElementById("task");
const boton = document.getElementById("create");
const taskContainer = document.getElementById("board");
//recupero la infromacion de localStorage y la guardo en el array mis_tareas
var mis_tareas = JSON.parse(localStorage.getItem("mi_tarea")) || [];
console.log(mis_tareas)
//Asigno un evento al boton, cuando lo pulso es cuando se crea la tarea
boton.addEventListener("click", () => {
    let text = taskImput.value.trim();
    console.log(text);
    if (text) {
        //crear la tarea
        const newTask = {text};
        mis_tareas.push(newTask);
        localStorage.setItem("mi_tarea", JSON.stringify(mis_tareas));
        render_tasks(); //pinta
    } else {
        alert("Introduce la tarea");
    }
});
//funcion que  mi  pinta mis posits en la web
function render_tasks() {
    taskContainer.innerHTML = ""; //dejar vacio el contenedor (no tiene ningun postit pintado)
    mis_tareas.forEach((element, index) => {
        var new_postit = document.createElement("div");
        new_postit.className = "postit"
        //Quieron que el backgrouncolor este entre 4 definidos
        new_postit.classList.add("color_"+(index%4))
        new_postit.id = "postit" +index;
        new_postit.innerHTML = `<strong>${element.text}</strong>` ;
        taskContainer.appendChild(new_postit);
    });
}
render_tasks();
