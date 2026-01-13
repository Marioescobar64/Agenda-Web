// aqui van dos importes


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