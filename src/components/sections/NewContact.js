 import { ItemContacto } from "../common/button/itemContacto/ItemContacto.js";

import { ConctactList } from "../../components/sections/login/Contactos/DB.js";

let CrearContacto = () => {
    let section = document.createElement("section");
    section.className = "crear-contacto";

    let h2 = document.createElement("h2");
    h2.textContent = "Crear Nuevo Contacto";
    section.appendChild(h2);

    let form = document.createElement("form");

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre";
    inputNombre.required = true;

    let inputTelefono = document.createElement("input");
    inputTelefono.type = "text";
    inputTelefono.placeholder = "Teléfono";
    inputTelefono.required = true;

    let btnAgregar = document.createElement("button");
    btnAgregar.type = "submit";
    btnAgregar.textContent = "Agregar Contacto";

    form.appendChild(inputNombre);
    form.appendChild(inputTelefono);
    form.appendChild(btnAgregar);

    section.appendChild(form);

    // Botón para volver a la agenda
    let btnVolver = document.createElement("button");
    btnVolver.type = "button";
    btnVolver.textContent = "Volver a Agenda";
    btnVolver.style.marginTop = "10px";
    section.appendChild(btnVolver);

    // Evento para agregar contacto
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let nuevoContacto = {
            nombre: inputNombre.value,
            telefono: inputTelefono.value
        };

        // Guardamos en la lista
        ConctactList.push(nuevoContacto);

        // Agregamos solo el nuevo contacto a la agenda (no duplicar toda la lista)
        let contenedorAgenda = document.getElementById("container-contactos");
        contenedorAgenda.appendChild(
            ItemContacto("user.svg", nuevoContacto.nombre, nuevoContacto.telefono)
        );

        // Limpiar formulario
        form.reset();

        // Volver automáticamente a la agenda
        contenedorAgenda.style.display = "block";
        let contenedorCrear = document.getElementById("container-crear");
        contenedorCrear.style.display = "none";
    });

    // Botón volver a agenda
    btnVolver.addEventListener("click", () => {
        let contenedorAgenda = document.getElementById("container-contactos");
        let contenedorCrear = document.getElementById("container-crear");

        contenedorAgenda.style.display = "block";
        contenedorCrear.style.display = "none";
    });

    return section;
};

export { CrearContacto };