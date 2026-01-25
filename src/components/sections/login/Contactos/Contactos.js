
import { ItemContacto } from "../../../common/button/itemContacto/itemContacto.js";

import { obtenerContacto, guardarContacto } from "../../localStorage/localStorage.js";



let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    let contactos = obtenerContacto();

    contactos.forEach((contact, index) => {

        /* ✅ Asegurar propiedad favorito */
        if (contact.favorito === undefined) {
            contact.favorito = false;
        }

        let fila = document.createElement("div");
        fila.className = "fila-contacto";

        // Contacto
        let item = ItemContacto("user2.svg", contact.nombre, contact.telefono);

        /* 🔹 Checkbox eliminar */
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar";
        btnBorrar.className = "btn-borrar";
        btnBorrar.disabled = true;

        checkbox.addEventListener("change", () => {
            btnBorrar.disabled = !checkbox.checked;
            fila.classList.toggle("seleccionado", checkbox.checked);
        });

        btnBorrar.addEventListener("click", () => {
            contactos.splice(index, 1);
            guardarContacto(contactos);

            let container = document.getElementById("container");
            container.innerHTML = "";
            container.appendChild(Contactos());
        });

        /* ⭐ FAVORITO */
        let favoritoCheckbox = document.createElement("input");
        favoritoCheckbox.type = "checkbox";
        favoritoCheckbox.checked = contact.favorito;

        let favoritoLabel = document.createElement("label");
        favoritoLabel.textContent = "⭐";
        favoritoLabel.style.cursor = "pointer";

        favoritoCheckbox.addEventListener("change", () => {
            contactos[index].favorito = favoritoCheckbox.checked;
            guardarContacto(contactos);
        });

        /* 🔹 Acciones */
        let acciones = document.createElement("div");
        acciones.className = "acciones-contacto";
        acciones.append(
            checkbox,
            btnBorrar,
            favoritoLabel,
            favoritoCheckbox
        );

        fila.append(item, acciones);
        sectionContactos.appendChild(fila);
    });

    return sectionContactos;
};

export { Contactos };