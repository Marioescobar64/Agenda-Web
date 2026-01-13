import { Button } from "./componnet/common/button/button.js";

let app = document.getElementById("app");

let nav = document.getElementById("nav");

nav.appendChild(Button("Agenda", "agenda"));
nav.appendChild(Button("+", "plus"));
nav.appendChild(Button("ToDoList", "todoList"));

let container = document.getElementById("container");