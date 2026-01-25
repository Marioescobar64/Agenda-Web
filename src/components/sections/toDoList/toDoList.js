import { obtenerTarea , guardarTarea  } from "../localStorage/tareaStorage.js";

function ToDoList() {
    let section = document.createElement("section");
    section.className = "todo-list";

    let h2 = document.createElement("h2");
    h2.textContent = "To Do List";
    section.appendChild(h2);

    let tareas = obtenerTarea();

    // El que es urgentes va ir de primero
    tareas.sort((a, b) => {
        if (a.prioridad === "Urgente" && b.prioridad !== "Urgente") return -1;
        if (a.prioridad !== "Urgente" && b.prioridad === "Urgente") return 1;
        return 0;
    }); 

    tareas.forEach((tarea, index) => {
        let div = document.createElement("div");
        div.className = `tarea ${tarea.prioridad === "Urgente" ? "urgente" : "tiempo"}`;

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";


        let nombreTexto = document.createElement("strong");
        nombreTexto.textContent = tarea.nombre;


        let inputEditar = document.createElement("input");
        inputEditar.type = "text";
        inputEditar.value = tarea.nombre;
        inputEditar.style.display = "none";


        let selectPrioridad = document.createElement("select");
        selectPrioridad.style.display = "none";

        let optionUrgente = document.createElement("option");
        optionUrgente.value = "Urgente";
        optionUrgente.textContent = "Urgente";

        let optionNormal = document.createElement("option");
        optionNormal.value = "Con Tiempo";
        optionNormal.textContent = "Con Tiempo";

        selectPrioridad.append(optionUrgente, optionNormal);
        selectPrioridad.value = tarea.prioridad;


        let prioridadTexto = document.createElement("span");
        prioridadTexto.textContent = tarea.prioridad;

        let btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.className = "btn-editar"; 

        let btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar";
        btnBorrar.disabled = true;
        btnBorrar.className = "btn-borrar";

        checkbox.addEventListener("change", () => {
            btnBorrar.disabled = !checkbox.checked;
            div.classList.toggle("seleccionada", checkbox.checked);
        });

 
        btnEditar.addEventListener("click", () => {
            if (btnEditar.textContent === "Editar") {
                 div.classList.add("editando");

                nombreTexto.style.display = "none";
                prioridadTexto.style.display = "none";
                inputEditar.style.display = "block";
                selectPrioridad.style.display = "block";
                btnEditar.textContent = "Guardar";
            } else {
                tareas[index].nombre = inputEditar.value;
                tareas[index].prioridad = selectPrioridad.value;

                guardarTarea(tareas);

                let container = document.getElementById("container");
                container.innerHTML = "";
                container.appendChild(ToDoList());
            }
        });

        btnBorrar.addEventListener("click", () => {
            tareas.splice(index, 1);
            guardarTarea(tareas);

            let container = document.getElementById("container");
            container.innerHTML = "";
            container.appendChild(ToDoList());
        });

        div.append(
            checkbox,
            nombreTexto,
            inputEditar,
            prioridadTexto,
            selectPrioridad,
            btnEditar,
            btnBorrar
        );

        section.appendChild(div);
    });

    return section;
}

export { ToDoList };
