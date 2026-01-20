import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/login/Contactos/Contactos.js";
  import { CrearContacto } from "./components/sections/NewContact.js";


// App
let app = document.getElementById("app");

// section menů
let nav = document.getElementById("nav");
// agregar botones
nav.appendChild(Button("Agenda", "agenda", "user.svg.svg"));
nav.appendChild(Button("Crear contacto", "plus", "plus.svg"));

nav.appendChild(Button("ToDoList", "todoList", "todoList.svg"));
nav.appendChild(Button("Crear tarea", "plus", "agenda.svg"));

// section container
let container = document.getElementById("container");


// Contenedor de contactos (agenda)
let containerContactos = document.createElement("div");
containerContactos.id = "container-contactos";
containerContactos.appendChild(Contactos());  // cargar lista inicial solo una vez

// Contenedor de formulario
let containerCrear = document.createElement("div");
containerCrear.id = "container-crear";
containerCrear.style.display = "none";
containerCrear.appendChild(CrearContacto());

// Agregamos ambos al contenedor principal
container.appendChild(containerContactos);
container.appendChild(containerCrear);

// Botones del nav
let btnAgenda = document.getElementById("agenda");
let btnCrear = document.getElementById("plus");

// Mostrar agenda
btnAgenda.addEventListener("click", () => {
    containerContactos.style.display = "block";
    containerCrear.style.display = "none";
});

// Mostrar formulario
btnCrear.addEventListener("click", () => {
    containerContactos.style.display = "none"; // ocultar agenda
    containerCrear.style.display = "block";
});

/*async function tarea() {

  try {
    let data = await fetch ("https://jsonplaceholder.typicode.com/posts");
    let r = await data.json();
    console.log(r);

  } catch (error) {
    console.log(error);

  }
  
}

tarea();

console.log("Comletado");
*/