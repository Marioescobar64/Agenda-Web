//import { ItemContacto } from ../common/itemContacto/IntemContacto.js";
import { ItemContacto } from "../../../../components/common/button/itemContacto/ItemContacto.js";

import { ConctactList } from "./DB.js";



let Contactos = () => {
  let sectionContactos = document.createElement("section");
  sectionContactos.className = "contactos";
  let h2 = document.createElement("h2");
  h2.textContent = "Contactos";
  sectionContactos.appendChild(h2);



ConctactList.forEach((contact) => {
sectionContactos.appendChild(ItemContacto("user2.svg",
contact.nombre, contact.telefono));

});


  return sectionContactos;
};
export { Contactos };