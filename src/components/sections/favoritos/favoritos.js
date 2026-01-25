import { obtenerContacto } from "../localStorage/localStorage.js";
import { ItemContacto } from "../../common/button/itemContacto/itemContacto.js";


let Favoritos = () => {
    let section = document.createElement("section");
    section.className = "favoritos";

    let titulo = document.createElement("h2");
    titulo.textContent = "Favoritos ⭐";
    section.appendChild(titulo);

    let contactos = obtenerContacto();
    let favoritos = contactos.filter(c => c.favorito === true);

    if (favoritos.length === 0) {
        let p = document.createElement("p");
        p.textContent = "No hay contactos favoritos";
        section.appendChild(p);
        return section;
    }

    favoritos.forEach(contacto => {
        let wrapper = document.createElement("div");
        wrapper.className = "favorito-item";

        let item = ItemContacto(
            "user2.svg",
            contacto.nombre,
            contacto.telefono
        );

        wrapper.appendChild(item);
        section.appendChild(wrapper);
    });

    return section;
};

export { Favoritos };