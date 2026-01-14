//import { ItemContacto } from ../common/itemContacto/IntemContacto.js";
import { ItemContacto } from "../../../../components/common/button/itemContacto/ItemContacto.js";

let Contactos = () => {
  let sectionContactos = document.createElement("section");
  sectionContactos.className = "contactos";
  let h2 = document.createElement("h2");
  h2.textContent = "Contactos";
  sectionContactos.appendChild(h2);
  sectionContactos.appendChild(ItemContacto("user2.svg", "Jossue Fuentes", "1234567"));
  sectionContactos.appendChild(ItemContacto("user2.svg", "Jossue Fuentes", "1234567"));
  sectionContactos.appendChild(ItemContacto("user2.svg", "Jossue Fuentes", "1234567"));
  sectionContactos.appendChild(ItemContacto("user2.svg", "Jossue Fuentes", "1234567"));
  sectionContactos.appendChild(ItemContacto("user2.svg", "Jossue Fuentes", "1234567"));
  sectionContactos.appendChild(ItemContacto("user2.svg", "Jossue Fuentes", "1234567"));
  sectionContactos.appendChild(ItemContacto("user2.svg", "Jossue Fuentes", "1234567"));
  sectionContactos.appendChild(ItemContacto("user2.svg", "Jossue Fuentes", "1234567"));
  sectionContactos.appendChild(ItemContacto("user2.svg", "Jossue Fuentes", "1234567"));
  return sectionContactos;
};
export { Contactos };