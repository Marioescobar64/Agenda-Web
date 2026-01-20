
import { ItemContacto } from "../common/button/itemContacto/ItemContacto.js";
import { getContactsFromStorage, saveContactsToStorage } from "../sections/localStorage/localStorage.js";

function FormContacto() {
    const form = document.createElement("form");
    form.className = "form-contacto";

    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre";
    inputNombre.required = true;

    const inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.placeholder = "Teléfono";
    inputTelefono.required = true;

    const btnGuardar = document.createElement("button");
    btnGuardar.textContent = "Guardar";
    btnGuardar.type = "submit";

    form.appendChild(inputNombre);
    form.appendChild(inputTelefono);
    form.appendChild(btnGuardar);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Leer contactos actuales desde LocalStorage
        let contactos = getContactsFromStorage();

        let nuevoContacto = {
            nombre: inputNombre.value,
            telefono: inputTelefono.value
        };

        // Guardar nuevo contacto en LocalStorage
        contactos.push(nuevoContacto);
        saveContactsToStorage(contactos);

        // Actualizar la lista de contactos en pantalla
        let container = document.getElementById("container");
        container.innerHTML = ""; // limpiar
        import("./Contactos.js").then(module => {
            container.appendChild(module.Contactos());
        });

        form.reset();
        alert("Contacto guardado ");
    });

    return form;
}

export { FormContacto };