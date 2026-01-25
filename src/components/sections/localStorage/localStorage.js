// Clave para almacenar contactos en LocalStorage
const LOCAL_STORAGE_KEY = 'agenda_telefonica';

/**
 * Guarda la lista de contactos en LocalStorage
 * @param {Array} contactos
 */
function guardarContacto(contactos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactos));
}

/**
 * Obtiene la lista de contactos desde LocalStorage
 * @returns {Array} Lista de contactos o array vacío
 */
function obtenerContacto() {
    let contactos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

    // Asegurar que todos tengan la propiedad favorito
    contactos.forEach(contacto => {
        if (contacto.favorito === undefined) {
            contacto.favorito = false;
        }
    });


    guardarContacto(contactos);

    return contactos;
}

export { LOCAL_STORAGE_KEY, guardarContacto, obtenerContacto };
