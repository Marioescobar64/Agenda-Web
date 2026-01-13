import { Button } from "./componnet/common/button/button.js";

import { Contactos } from "./componnet/section/Contactos/Contactos.js";

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