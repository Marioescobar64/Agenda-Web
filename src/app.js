import { Button } from "./components/common/button/button.js";
import { Contactos } from "./components/sections/login/Contactos/Contactos.js";
 import { FormContacto  } from "./components/sections/NewContact.js";
import { ToDoList   } from "./components/sections/toDoList/toDoList.js";
import { CrearTarea   } from "./components/sections/tareas/crearTarea.js";
import { Favoritos   } from "./components/sections/favoritos/favoritos.js";





document.addEventListener("DOMContentLoaded", () => {
    // App
    let app = document.getElementById("app");

    // section menú
    let nav = document.getElementById("nav");

    // Crear botones
    nav.appendChild(Button("Agenda", "agenda", "user.svg"));
    nav.appendChild(Button("Crear contacto", "crear-contacto", "plus.svg"));
    nav.appendChild(Button("ToDoList", "todoList", "todoList.svg"));
    nav.appendChild(Button("Crear tarea", "crear-tarea", "agenda.svg"));
    nav.appendChild(Button("Favorito", "favorito", "favorito.svg"));



    // Contenedor principal
    let container = document.getElementById("container");
    container.appendChild(Contactos());

    // Función para cambiar secciones
    function mostrarSeccion(seccion) {
        container.innerHTML = "";
        container.appendChild(seccion);
    }

    // Eventos de botones
    document.getElementById("agenda").addEventListener("click", () => {
        mostrarSeccion(Contactos());
    });

    document.getElementById("crear-contacto").addEventListener("click", () => {
        mostrarSeccion(FormContacto());
    });

    document.getElementById("todoList").addEventListener("click", () => {
        mostrarSeccion(ToDoList());
    });

    document.getElementById("crear-tarea").addEventListener("click", () => {
        mostrarSeccion(CrearTarea());
    });
    
    document.getElementById("favorito").addEventListener("click", () => {
    mostrarSeccion(Favoritos());
});

});

