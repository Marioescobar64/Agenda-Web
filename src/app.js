import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/login/Contactos/Contactos.js";
// import { viewContacts , viewNewContact } from "./components/layout/NavControler.js";    
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
container.appendChild(Contactos());





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