
import { ItemContacto } from "../../../../components/common/button/itemContacto/ItemContacto.js";

import { getContactsFromStorage } from "../../localStorage/localStorage.js";



let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    // Leer contactos desde LocalStorage
    let contactos = getContactsFromStorage();

    contactos.forEach((contact) => {
        sectionContactos.appendChild(
            ItemContacto("user2.svg", contact.nombre, contact.telefono)
        );
    });

    return sectionContactos;
};

export { Contactos };